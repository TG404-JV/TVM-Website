
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
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    id: "website",
    title: "Website Development",
    description: "Responsive and modern websites designed to provide the best user experience across all devices and platforms.",
    icon: Globe,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    id: "digital",
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive traffic, increase conversions, and maximize your online presence.",
    icon: BarChart2,
    color: "bg-indigo-500/10 text-indigo-500",
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    description: "Connect with relevant influencers to promote your brand and reach new audiences through authentic partnerships.",
    icon: Users,
    color: "bg-pink-500/10 text-pink-500",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Tech-inspired background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-blue-50/50"></div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-10 right-10 w-24 h-24 rounded-full border border-indigo-200/50 pulse-glow"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full border border-blue-200/30 pulse-glow"></div>
        <div className="absolute top-40 left-1/4 w-2 h-20 bg-gradient-to-b from-purple-300/50 to-transparent"></div>
        <div className="absolute top-60 right-1/4 w-2 h-30 bg-gradient-to-b from-blue-300/50 to-transparent"></div>
      </div>

      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="We offer a comprehensive range of IT solutions to help businesses thrive in the digital landscape."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedCard key={service.id} delay={index * 100} className="h-full">
              <Link
                to={`/services#${service.id}`}
                className="block h-full tech-card p-6 group"
              >
                <div className={`p-4 rounded-lg inline-block mb-4 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-tvm-gray mb-4">{service.description}</p>
                <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
