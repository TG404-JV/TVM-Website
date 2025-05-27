import { Link } from "react-router-dom";
import { Check, ArrowRight, Users, Award, Clock, Target, Zap, Shield } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { Button } from "@/components/ui/button";

const features = [
  {
    text: "Experienced team of developers and marketers",
    icon: Users,
    color: "text-blue-500"
  },
  {
    text: "Custom solutions tailored to your business",
    icon: Target,
    color: "text-purple-500"
  },
  {
    text: "Client-focused approach and support",
    icon: Shield,
    color: "text-green-500"
  },
  {
    text: "Proven track record of successful projects",
    icon: Award,
    color: "text-orange-500"
  },
  {
    text: "Cutting-edge technologies and methodologies",
    icon: Zap,
    color: "text-cyan-500"
  },
  {
    text: "Timely delivery and transparent communication",
    icon: Clock,
    color: "text-pink-500"
  },
];

const AboutPreview = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Enhanced background with 3D elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-1/4 w-20 h-20 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-400/40 to-purple-500/40 rounded-full animate-pulse shadow-xl transform rotate-45"></div>
        </div>
        
        <div className="absolute bottom-40 left-1/4 w-16 h-16 opacity-30">
          <div className="w-full h-full bg-gradient-to-tr from-indigo-400/50 to-cyan-500/50 rounded-lg animate-bounce shadow-lg transform -rotate-12"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-blue-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-20 w-2 h-2 bg-purple-400/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-indigo-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Gradient mesh */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 animate-pulse"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Enhanced Image Column */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Main image container with 3D effects */}
            <div className="relative z-20 transform-gpu group-hover:scale-[1.02] transition-all duration-700 ease-out">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                {/* Image with overlay effects */}
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                    alt="TVM IT Solutions Team"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                </div>
                
                {/* Glassmorphism border */}
                <div className="absolute inset-0 rounded-2xl border border-white/20 backdrop-blur-sm"></div>
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 transform-gpu group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-xs text-slate-600">Projects</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 transform-gpu group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-xs text-slate-600">Years</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute top-8 -left-8 w-full h-full">
              <div className="w-full h-full border-2 border-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-2xl transform-gpu group-hover:rotate-1 group-hover:scale-105 transition-all duration-700 -z-10"></div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-full h-full">
              <div className="w-full h-full bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-2xl transform-gpu group-hover:-rotate-1 group-hover:scale-95 transition-all duration-700 -z-20"></div>
            </div>
            
            {/* Animated background circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 -z-30">
              <div className="absolute inset-0 rounded-full border border-blue-200/20 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-8 rounded-full border border-purple-200/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            </div>
          </div>

          {/* Enhanced Content Column */}
          <div className="w-full lg:w-1/2 space-y-8">
            <SectionHeading
              title="About TVM IT Solutions"
              alignment="left"
              subtitle="We are a team of passionate IT professionals dedicated to delivering exceptional digital solutions that transform businesses and drive growth."
            />

            {/* Enhanced features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex items-start space-x-3">
                    {/* Enhanced icon */}
                    <div className={`p-2 rounded-lg bg-gradient-to-br from-white to-slate-50 shadow-sm group-hover:shadow-md transition-all duration-300 ${feature.color}`}>
                      <feature.icon size={18} className="transform-gpu group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300 text-sm leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"></div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform-gpu hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <Link to="/about" className="relative z-10">
                  <span className="relative z-10">Learn More About Us</span>
                  <ArrowRight size={16} className="ml-2 relative z-10 transform-gpu group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </Link>
              </Button>
              
              {/* Additional info */}
              <div className="flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for consultation</span>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-6 border-t border-slate-200/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">100%</div>
                <div className="text-xs text-slate-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">24/7</div>
                <div className="text-xs text-slate-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">48h</div>
                <div className="text-xs text-slate-600">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for advanced effects */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutPreview;