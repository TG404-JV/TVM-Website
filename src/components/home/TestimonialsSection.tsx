import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, User, Quote, Award, Heart, TrendingUp } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { db } from "@/integrations/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const TestimonialsSection = () => {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && testimonials.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
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
      <section id="testimonials" className="section-padding relative overflow-hidden" aria-label="Client Testimonials">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        
        {/* Animated loading background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-indigo-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Loading testimonials..."
            titleClassName="text-white"
            subtitleClassName="text-blue-200"
          />
          <div className="flex justify-center mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="section-padding relative overflow-hidden" aria-label="Client Testimonials">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        <div className="container-custom relative z-10">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="No testimonials available at the moment."
            titleClassName="text-white"
            subtitleClassName="text-blue-200"
          />
        </div>
      </section>
    );
  }

  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" aria-label="Client Testimonials">
      {/* Enhanced dark background with 3D effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-1/4 w-24 h-24 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full animate-pulse shadow-2xl transform rotate-45"></div>
        </div>
        
        <div className="absolute bottom-32 left-1/4 w-20 h-20 opacity-30">
          <div className="w-full h-full bg-gradient-to-tr from-indigo-400/40 to-cyan-500/40 rounded-lg animate-bounce shadow-xl transform -rotate-12"></div>
        </div>
        
        {/* Glowing particles */}
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-blue-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-20 w-2 h-2 bg-purple-400/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-indigo-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20 animate-pulse"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-8 h-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className="border border-white/20 rounded animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our valued clients have to say about their experience with TVM IT Solutions."
          titleClassName="text-white"
          subtitleClassName="text-blue-200"
        />

        {/* Enhanced stats section */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <Award className="text-yellow-400" size={24} />
                </div>
                <div className="text-2xl font-bold text-white">{averageRating.toFixed(1)}</div>
                <div className="text-sm text-blue-200">Average Rating</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <Heart className="text-red-400" size={24} />
                </div>
                <div className="text-2xl font-bold text-white">{testimonials.length}</div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="text-green-400" size={24} />
                </div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-blue-200">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden pb-12" role="region" aria-label="Client testimonials carousel">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 p-4" 
                  role="group" 
                  aria-label={`Testimonial from ${testimonial.name}`} 
                  aria-hidden={index !== activeIndex}
                >
                  <div className="group relative">
                    {/* Main testimonial card with 3D effects */}
                    <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 transform-gpu">
                      {/* Glassmorphism overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                      
                      {/* Animated quote icon */}
                      <div className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 shadow-lg transform-gpu group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Quote size={24} className="text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 pt-4">
                        {/* Enhanced rating display */}
                        <div className="flex items-center justify-center space-x-1 mb-6" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="relative">
                              <Star
                                size={20}
                                className={`transition-all duration-300 ${
                                  i < testimonial.rating 
                                    ? "fill-yellow-400 text-yellow-400 drop-shadow-lg" 
                                    : "text-gray-500"
                                }`}
                                aria-hidden="true"
                              />
                              {i < testimonial.rating && (
                                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-sm animate-pulse"></div>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        {/* Enhanced testimonial text */}
                        <div className="relative mb-8">
                          <p className="text-lg md:text-xl leading-relaxed text-white/90 italic text-center font-light">
                            "{testimonial.testimonial}"
                          </p>
                          
                          {/* Decorative elements */}
                          <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-blue-400/30 rounded-tl-lg"></div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-purple-400/30 rounded-br-lg"></div>
                        </div>
                        
                        {/* Enhanced author section */}
                        <div className="flex items-center justify-center space-x-4">
                          {/* 3D Avatar */}
                          <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center shadow-lg transform-gpu group-hover:scale-110 transition-all duration-300">
                              <User size={28} className="text-white" />
                            </div>
                            
                            {/* Floating indicator */}
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white/20 animate-pulse"></div>
                          </div>
                          
                          <div className="text-center">
                            <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                            <p className="text-blue-200 text-sm font-medium">{testimonial.role}</p>
                            <p className="text-blue-300/70 text-xs mt-1 flex items-center justify-center">
                              <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 rounded-3xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced navigation controls */}
          <div className="flex justify-center items-center space-x-6 mt-8" role="group" aria-label="Testimonial navigation">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white backdrop-blur-sm rounded-full w-12 h-12 transform-gpu hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </Button>
            
            {/* Enhanced dot indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 transform-gpu hover:scale-125 ${
                    index === activeIndex 
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg scale-125" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : "false"}
                >
                  {index === activeIndex && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-sm animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white backdrop-blur-sm rounded-full w-12 h-12 transform-gpu hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
          
          {/* Auto-play indicator */}
          {isAutoPlaying && (
            <div className="flex justify-center mt-4">
              <div className="flex items-center space-x-2 text-blue-200 text-xs">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Auto-playing</span>
              </div>
            </div>
          )}
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />

        {/* Enhanced CTA section */}
        <div className="mt-20 text-center">
          <div className="max-w-md mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Them?</h3>
            <p className="text-blue-200">See what makes our clients choose us again and again.</p>
          </div>
          
          <Button 
            asChild 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-300 px-8 py-6 text-lg"
          >
            <Link to="/reviews" aria-label="Read all client reviews" className="relative z-10">
              <span className="relative z-10">View All Reviews</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </Link>
          </Button>
        </div>
      </div>

      {/* Custom CSS for advanced effects */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;