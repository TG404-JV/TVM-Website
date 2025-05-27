import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Globe, BarChart2, Users, Code, Shield, Database } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import AnimatedCard from "../common/AnimatedCard";

const services = [
  {
    id: "android",
    title: "Android App Development",
    description: "Custom Android applications tailored to your business requirements with intuitive user interfaces and seamless functionality.",
    icon: Smartphone,
    color: "bg-gradient-to-br from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-500",
    glowColor: "shadow-blue-500/20",
    borderGradient: "from-blue-500/30 to-cyan-500/30"
  },
  {
    id: "website",
    title: "Website Development",
    description: "Responsive and modern websites designed to provide the best user experience across all devices and platforms.",
    icon: Globe,
    color: "bg-gradient-to-br from-purple-500/20 to-pink-500/10",
    iconColor: "text-purple-500",
    glowColor: "shadow-purple-500/20",
    borderGradient: "from-purple-500/30 to-pink-500/30"
  },
  {
    id: "digital",
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive traffic, increase conversions, and maximize your online presence.",
    icon: BarChart2,
    color: "bg-gradient-to-br from-indigo-500/20 to-blue-500/10",
    iconColor: "text-indigo-500",
    glowColor: "shadow-indigo-500/20",
    borderGradient: "from-indigo-500/30 to-blue-500/30"
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    description: "Connect with relevant influencers to promote your brand and reach new audiences through authentic partnerships.",
    icon: Users,
    color: "bg-gradient-to-br from-pink-500/20 to-rose-500/10",
    iconColor: "text-pink-500",
    glowColor: "shadow-pink-500/20",
    borderGradient: "from-pink-500/30 to-rose-500/30"
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Advanced background with 3D elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"></div>
        
        {/* Floating 3D geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-3xl rotate-12 transform-gpu animate-pulse shadow-2xl"></div>
        </div>
        
        <div className="absolute bottom-32 left-16 w-24 h-24 opacity-40">
          <div className="w-full h-full bg-gradient-to-tr from-indigo-400/40 to-cyan-500/40 rounded-2xl -rotate-12 transform-gpu animate-bounce shadow-xl"></div>
        </div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="border border-slate-300 rounded animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-500/60 rounded-full blur-sm animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-500/60 rounded-full blur-sm animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-indigo-500/80 rounded-full blur-sm animate-ping" style={{ animationDelay: '2s' }}></div>
        
        {/* Gradient lines */}
        <div className="absolute top-0 left-0 w-px h-40 bg-gradient-to-b from-blue-400/50 to-transparent ml-32 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-px h-60 bg-gradient-to-b from-purple-400/50 to-transparent mr-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Services"
          subtitle="We offer a comprehensive range of IT solutions to help businesses thrive in the digital landscape."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <AnimatedCard key={service.id} delay={index * 150} className="h-full">
              <Link
                to={`/services#${service.id}`}
                className="block h-full group perspective-1000"
              >
                <div className={`
                  relative h-full p-8 rounded-2xl border border-white/20 backdrop-blur-sm
                  bg-white/80 hover:bg-white/90 transition-all duration-500 ease-out
                  transform-gpu hover:scale-[1.02] hover:-translate-y-2
                  shadow-lg hover:shadow-2xl ${service.glowColor}
                  before:absolute before:inset-0 before:rounded-2xl 
                  before:bg-gradient-to-r before:${service.borderGradient}
                  before:p-[1px] before:opacity-0 hover:before:opacity-100
                  before:transition-opacity before:duration-300
                  overflow-hidden
                `}>
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 ${service.color} rounded-2xl`}></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-2xl transform rotate-45 translate-x-16 -translate-y-16"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* 3D Icon container */}
                    <div className={`
                      relative p-4 rounded-xl inline-block mb-6 ${service.color}
                      transform-gpu group-hover:scale-110 group-hover:rotate-3
                      transition-all duration-300 ease-out
                      shadow-lg group-hover:shadow-xl
                    `}>
                      <div className="absolute inset-0 bg-white/30 rounded-xl blur-sm"></div>
                      <service.icon 
                        size={32} 
                        className={`relative z-10 ${service.iconColor} transform-gpu group-hover:rotate-12 transition-transform duration-300`} 
                      />
                      
                      {/* Icon glow effect */}
                      <div className={`absolute inset-0 ${service.iconColor} opacity-0 group-hover:opacity-20 rounded-xl blur-md transition-opacity duration-300`}></div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm group-hover:text-slate-700 transition-colors">
                      {service.description}
                    </p>
                    
                    {/* Enhanced CTA */}
                    <div className="flex items-center justify-between">
                      <div className={`
                        flex items-center ${service.iconColor} font-medium text-sm
                        transform-gpu group-hover:translate-x-2 transition-all duration-300
                        relative
                      `}>
                        <span className="relative z-10">Learn More</span>
                        <ArrowRight 
                          size={16} 
                          className="ml-2 transform-gpu group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" 
                        />
                        
                        {/* Underline animation */}
                        <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300`}></div>
                      </div>
                      
                      {/* Floating indicator */}
                      <div className={`
                        w-2 h-2 rounded-full ${service.color} 
                        opacity-0 group-hover:opacity-100 
                        transform-gpu scale-0 group-hover:scale-100
                        transition-all duration-300 delay-100
                      `}></div>
                    </div>
                  </div>
                  
                  {/* Hover shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
        
        {/* Additional decorative elements */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 0 ? 'bg-blue-500' : 
                  i === 1 ? 'bg-purple-500' : 
                  i === 2 ? 'bg-indigo-500' : 'bg-pink-500'
                } opacity-60 animate-pulse`}
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom CSS for additional effects */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;