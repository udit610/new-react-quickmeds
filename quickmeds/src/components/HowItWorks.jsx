import React, { useEffect, useRef } from 'react';
import WhatsAppButton from './WhatsAppButton';

const StepItem = ({ number, title, description, delay }) => {
  const stepRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            stepRef.current.classList.add('opacity-100', 'translate-x-0');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={stepRef}
      className="flex mb-10 opacity-0 translate-x-12 transition-all duration-700 ease-out"
    >
      <div className="flex-shrink-0 mr-6">
        <div className="relative">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-tertiary text-white font-bold text-xl shadow-lg">
            {number}
          </div>
          {number < 3 && (
            <div className="absolute top-14 left-1/2 w-px h-14 bg-gradient-to-b from-brand-primary to-transparent"></div>
          )}
        </div>
      </div>
      <div className="pt-2">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text-primary mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-dark-text-secondary">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  
  useEffect(() => {
    const observers = [];
    
    const createObserver = (ref, delay) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              ref.current.classList.add('opacity-100', 'translate-y-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return observer;
    };
    
    observers.push(createObserver(titleRef, 0));
    observers.push(createObserver(imageRef, 200));
    observers.push(createObserver(buttonRef, 900));
    
    return () => {
      observers.forEach(observer => {
        observer.disconnect();
      });
    };
  }, []);
  
  return (
    <section id="how-it-works" className="py-20 dark:bg-dark-bg bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-3xl font-bold text-center text-gray-800 dark:text-dark-text-primary mb-16 opacity-0 -translate-y-8 transition-all duration-700 ease-out"
        >
          How It <span className="text-brand-primary">Works</span>
        </h2>
        
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div 
              ref={imageRef}
              className="relative opacity-0 -translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary/20 to-brand-tertiary/20 rounded-2xl blur-xl"></div>
              <img 
                className="relative rounded-2xl shadow-xl dark:shadow-brand-primary/10 w-full h-auto z-10" 
                src="/api/placeholder/600/400" 
                alt="How QuickMeds works" 
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-16">
            <StepItem 
              number={1} 
              title="Click "Order Now"" 
              description="Click the Order Now button to be redirected to WhatsApp."
              delay={300}
            />
            <StepItem 
              number={2} 
              title="Chat with Our Bot" 
              description="Our WhatsApp bot will guide you through the ordering process."
              delay={500}
            />
            <StepItem 
              number={3} 
              title="Receive Your Medicine" 
              description="Your order will be delivered to your doorstep within 30 minutes."
              delay={700}
            />
            
            <div 
              ref={buttonRef}
              className="flex justify-center md:justify-start mt-10 opacity-0 -translate-y-8 transition-all duration-700 ease-out"
            >
              <WhatsAppButton text="Start Your Order" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;