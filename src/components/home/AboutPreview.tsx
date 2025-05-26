
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { Button } from "@/components/ui/button";

const features = [
  "Experienced team of developers and marketers",
  "Custom solutions tailored to your business",
  "Client-focused approach and support",
  "Proven track record of successful projects",
  "Cutting-edge technologies and methodologies",
  "Timely delivery and transparent communication",
];

const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                alt="TVM IT Solutions Team"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-full h-full border-2 border-tvm-blue/20 rounded-lg -z-10"></div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <SectionHeading 
              title="About TVM IT Solutions" 
              alignment="left"
              subtitle="We are a team of passionate IT professionals dedicated to delivering exceptional digital solutions."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Check size={20} className="text-tvm-blue mt-1 flex-shrink-0" />
                  <p className="text-tvm-gray">{feature}</p>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="button-animation">
              <Link to="/about">
                Learn More About Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
