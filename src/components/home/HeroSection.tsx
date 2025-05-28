import { ArrowRight, Play, CheckCircle } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  asChild?: boolean;
  size?: "default" | "lg";
  variant?: "default" | "outline";
  className?: string;
  [x: string]: any;
};

const Button = ({ children, asChild, size = "default", variant = "default", className = "", ...props }: ButtonProps) => {
  const sizeClasses = {
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50"
  };
  
  return (
    <button 
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/50" aria-label="Hero Section">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-blue-300/25 to-teal-400/25 rounded-full filter blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              #1 Rated IT Solutions Provider
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Business With{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
                    Next-Gen Technology
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transform scale-x-0 animate-[scaleIn_2s_ease-in-out_1s_forwards]" style={{transformOrigin: 'left'}}></div>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                We deliver cutting-edge digital solutions that drive growth, streamline operations, and position your business for the future. From AI-powered applications to comprehensive digital strategies.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {['Mobile Apps', 'Web Development', 'AI Solutions', 'Digital Marketing'].map((feature, index) => (
                <div key={feature} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 px-8 py-3"
                onClick={() => window.location.href = '/services'}
              >
                Get Started Today
                <ArrowRight size={18} className="ml-2" aria-hidden="true" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 px-8 py-3"
                onClick={() => window.location.href = '/portfolio'}
              >
                <Play size={18} className="mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span>500+ Happy Clients</span>
                </div>
                <div>⭐⭐⭐⭐⭐ 4.9/5 Rating</div>
                <div>🏆 Award Winning Team</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-700">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-blue-50/50 p-8">
                <img
                  src="/lovable-uploads/01123e7f-efe0-421e-bdf0-ebb3162d694e.png"
                  alt="Advanced digital technology solutions and innovation by TVM IT Solutions"
                  className="w-full h-auto object-cover rounded-xl"
                  width="600"
                  height="400"
                  loading="eager"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-slate-700">99.9% Uptime</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg shadow-lg p-3 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>
                  <div className="text-xs font-semibold">24/7 Support</div>
                </div>
              </div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl -z-10 animate-pulse transform rotate-12"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-cyan-400/15 to-teal-400/15 rounded-2xl -z-10 animate-pulse transform -rotate-12" style={{animationDelay: '1s'}}></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-1/4 -right-12 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-ping" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/4 -left-8 w-4 h-4 bg-cyan-500 rounded-full opacity-60 animate-ping" style={{animationDelay: '3s'}}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;