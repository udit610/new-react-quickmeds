import React, { useEffect, useRef } from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Simple animation timeline on mount
    setTimeout(() => {
      if (titleRef.current) titleRef.current.classList.add('opacity-100', 'translate-y-0');
    }, 200);
    setTimeout(() => {
      if (descRef.current) descRef.current.classList.add('opacity-100', 'translate-y-0');
    }, 400);
    setTimeout(() => {
      if (buttonRef.current) buttonRef.current.classList.add('opacity-100', 'translate-y-0');
    }, 600);
    setTimeout(() => {
      if (imageRef.current) imageRef.current.classList.add('opacity-100', 'translate-x-0');
    }, 800);
  }, []);

  return (
    <section className="pt-32 md:pt-40 pb-16 dark:bg-gradient-to-br dark:from-dark-bg dark:via-dark-bg/90 dark:to-dark-bg/95 bg-gradient-to-r from-green-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-1/2 justify-center items-start px-6">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold leading-tight mb-4 opacity-0 -translate-y-8 transition-all duration-700 ease-out dark:text-dark-text-primary"
            >
              Medicine Delivered in <span className="text-brand-primary">30 Minutes</span>
            </h2>
            <p 
              ref={descRef}
              className="leading-relaxed mb-8 text-gray-600 dark:text-dark-text-secondary opacity-0 -translate-y-8 transition-all duration-700 ease-out delay-100 text-lg"
            >
              Get your essential medications delivered to your doorstep quickly and reliably. Just a few clicks to better health.
            </p>
            <div 
              ref={buttonRef}
              className="opacity-0 -translate-y-8 transition-all duration-700 ease-out delay-200"
            >
              <WhatsAppButton text="Order Now" />
            </div>
          </div>
          <div className="w-full md:w-1/2 py-12 flex justify-center">
            <div 
              ref={imageRef}
              className="relative opacity-0 translate-x-12 transition-all duration-700 ease-out delay-300"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/30 to-brand-tertiary/30 rounded-full blur-xl animate-pulse-slow"></div>
              <img 
                className="relative z-10 w-full md:w-4/5 rounded-lg shadow-xl dark:shadow-brand-primary/10" 
                src="/api/placeholder/500/500" 
                alt="Medicine delivery illustration" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;