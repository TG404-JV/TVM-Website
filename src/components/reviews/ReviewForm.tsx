import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import SectionHeading from "../common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { db } from "@/integrations/firebase/config"; // Adjust path to your Firebase config
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ReviewForm = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    rating: 0,
    review: "",
  });

  const [hoveredRating, setHoveredRating] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.review || formData.rating === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and provide a rating.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Submit form to Firestore
      await addDoc(collection(db, "reviews"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      
      toast({
        title: "Review Submitted",
        description: "Thank you for sharing your feedback with us!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        rating: 0,
        review: "",
      });
      setHoveredRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="submit-review" className="section-padding bg-tvm-lightGray scroll-mt-20">
      <div className="container-custom">
        <SectionHeading
          title="Share Your Experience"
          subtitle="We value your feedback. Please take a moment to share your experience working with TVM IT Solutions."
        />

        <div className="max-w-2xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="glassmorphism rounded-xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-tvm-blue focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-tvm-blue focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-tvm-blue focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="service" className="block mb-2 text-sm font-medium">
                  Service Used
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-tvm-blue focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Android App Development">Android App Development</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Influencer Marketing">Influencer Marketing</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">
                Your Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="focus:outline-none"
                  >
                    <Star
                      size={24}
                      className={`${
                        star <= (hoveredRating || formData.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="review" className="block mb-2 text-sm font-medium">
                Your Review <span className="text-red-500">*</span>
              </label>
              <textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-tvm-blue focus:border-transparent"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Review
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;