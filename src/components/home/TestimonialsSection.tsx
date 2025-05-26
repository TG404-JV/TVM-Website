import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { db } from "@/integrations/firebase/config"; // Adjust path to your Firebase config
import { collection, getDocs } from "firebase/firestore";

const TestimonialsSection = () => {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "reviews"));
        const fetchedTestimonials = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            role: data.company ? `Client at ${data.company}` : "Client",
            testimonial: data.review,
            rating: data.rating,
            hasPhoto: false,
            date: data.createdAt ? data.createdAt.toDate().toISOString().split('T')[0] : "2023-01-01",
            location: "India",
          };
        });
        setTestimonials(fetchedTestimonials);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        toast({
          title: "Error",
          description: "Failed to load testimonials. Please try again later.",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Create a properly formatted review schema for search engines
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TVM IT Solutions",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": testimonials.length > 0 
        ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
        : "5",
      "reviewCount": testimonials.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(t => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "datePublished": t.date,
      "reviewBody": t.testimonial,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating,
        "bestRating": "5"
      },
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "TVM IT Solutions",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Aurangabad",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      }
    }))
  };

  if (loading) {
    return (
      <section id="testimonials" className="section-padding bg-tvm-darkGray text-white relative" aria-label="Client Testimonials">
        <div className="absolute inset-0 bg-gradient-to-br from-tvm-darkGray to-tvm-darkBlue opacity-40 -z-10" aria-hidden="true"></div>
        <div className="container-custom">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our valued clients have to say about their experience with TVM IT Solutions."
            titleClassName="text-white"
            subtitleClassName="text-gray-300"
          />
          <p className="text-center text-gray-200">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="section-padding bg-tvm-darkGray text-white relative" aria-label="Client Testimonials">
        <div className="absolute inset-0 bg-gradient-to-br from-tvm-darkGray to-tvm-darkBlue opacity-40 -z-10" aria-hidden="true"></div>
        <div className="container-custom">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our valued clients have to say about their experience with TVM IT Solutions."
            titleClassName="text-white"
            subtitleClassName="text-gray-300"
          />
          <p className="text-center text-gray-200">No testimonials available.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="section-padding bg-tvm-darkGray text-white relative" aria-label="Client Testimonials">
      <div className="absolute inset-0 bg-gradient-to-br from-tvm-darkGray to-tvm-darkBlue opacity-40 -z-10" aria-hidden="true"></div>
      
      <div className="container-custom">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our valued clients have to say about their experience with TVM IT Solutions."
          titleClassName="text-white"
          subtitleClassName="text-gray-300"
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden pb-12" role="region" aria-label="Client testimonials carousel">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-4" role="group" aria-label={`Testimonial from ${testimonial.name}`} aria-hidden={index !== activeIndex}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/5">
                    <div className="flex items-center space-x-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="text-lg mb-6 text-gray-200 italic">"{testimonial.testimonial}"</p>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-tvm-blue/20 flex items-center justify-center" aria-hidden="true">
                        <User size={24} className="text-tvm-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-gray-300">{testimonial.role}</p>
                        <p className="text-xs text-gray-400 mt-1">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-4" role="group" aria-label="Testimonial navigation">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </Button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-tvm-blue" : "bg-white/30 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === activeIndex ? "true" : "false"}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="button-animation bg-tvm-blue hover:bg-tvm-blue/90">
            <Link to="/reviews" aria-label="Read all client reviews">
              View All Reviews
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
