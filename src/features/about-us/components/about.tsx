import React from "react";
import FeaturesSection from "./features-section";
import HeroSection from "./hero-section";
import PricingSection from "./pricing-section";
import WhyTermbi from "./why-termbi";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <WhyTermbi />
      <PricingSection />
      <FeaturesSection />
    </div>
  );
};

export default AboutPage;
