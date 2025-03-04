import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-start px-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-2 text-gray-800">
            Medicine Delivered in <span className="text-green-600">30 Minutes</span>
          </h2>
          <p className="leading-normal mb-6 text-gray-600 text-lg">
            Get your essential medications delivered to your doorstep quickly and reliably. Just a few clicks to better health.
          </p>
          <div className="flex w-full md:w-auto">
            <WhatsAppButton text="Order Now" />
          </div>
        </div>
        <div className="w-full md:w-1/2 py-6 flex justify-center">
          <img className="w-full md:w-4/5 z-50 h-auto" src="/api/placeholder/500/500" alt="Medicine delivery illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;