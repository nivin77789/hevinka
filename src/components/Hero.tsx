import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero hero-glow">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-crypto-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-crypto-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section */}
          <div className="lg:w-1/2 animate-fade-in-left">
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-crypto-purple mr-2">What’s New</span>
              <span className="text-xs text-gray-300">Custom Software & Web Solutions</span>
              <ChevronRight className="h-4 w-4 text-gray-400 ml-1" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Hevinka</span> — Crafting Digital Solutions for Businesses
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              We help companies grow by building powerful software and websites tailored to their needs — from startups to enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 py-6">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-700 text-white hover:bg-white/5 py-6">
                View Portfolio
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div>
                <p className="text-2xl font-bold text-white">200+</p>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div>
                <p className="text-2xl font-bold text-white">120+</p>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div>
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-sm text-gray-400">Industries Served</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
<div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right">
  <div className="relative h-[70vh] flex justify-end">
    {/* Show Spline only on medium+ screens */}
    <div className="hidden sm:block w-full h-full relative">
      <Spline
        scene="https://prod.spline.design/zEiCeYCDS49OEOcj/scene.splinecode" 
        style={{ width: "100%", height: "100%" }}
      />

      {/* Overlay small div to hide the "Built with Spline" text */}
      {/* Overlay small div to hide the "Built with Spline" text */}
<div className="absolute bottom-2 right-2 bg-gradient-hero w-36 h-10 rounded-lg flex items-center justify-center">
  <span className="text-sm text-gray-400">Hevinka Private Ltd</span>
</div>

    </div>

    {/* Show floating image only on mobile */}
    {/* Show floating image only on mobile */}
<div className="block sm:hidden flex justify-center items-center w-full h-full">
  <img 
    src="/hero.png" 
    alt="Floating Illustration" 
    className="w-7/5 max-w-x animate-floating"
  />
</div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
