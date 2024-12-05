import React from "react";
import { CarouselPlugin } from "@/components/common/carouselPlugin";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-foreground text-3xl font-bold text-center mb-6 leading-tight tracking-tight">Welcome to Our Store</h1>
      <CarouselPlugin />
    </div>
  );
};

export default Home;
