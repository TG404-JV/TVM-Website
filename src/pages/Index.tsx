
import React, { useState, useEffect, Suspense } from "react";
import PageLayout from "@/components/common/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import TechGlobe from "@/components/home/TechGlobe";

// Simple fallback component when the 3D Android logo fails to load
const GlobeFallback = () => (
  <div className="w-full h-48 my-16 flex items-center justify-center">
    <div className="animate-pulse bg-green-100 rounded-lg w-full h-full flex items-center justify-center">
      <p className="text-green-800">Loading Android 3D visualization...</p>
    </div>
  </div>
);

// Simple error boundary component
class Globe3DErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      console.log("3D Android logo failed to load, showing fallback");
      return <GlobeFallback />;
    }
    return this.props.children;
  }
}

const Index = () => {
  const [showGlobe, setShowGlobe] = useState(false);
  
  // Delay loading the 3D component to ensure the main content loads first
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlobe(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <PageLayout>
      <HeroSection />
      {showGlobe && (
        <Globe3DErrorBoundary>
          <Suspense fallback={<GlobeFallback />}>
            <TechGlobe />
          </Suspense>
        </Globe3DErrorBoundary>
      )}
      <ServicesSection />
      <AboutPreview />
      <TestimonialsSection />
      <CtaSection />
    </PageLayout>
  );
};

export default Index;
