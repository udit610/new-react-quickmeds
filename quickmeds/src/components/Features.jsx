import React, { useEffect, useRef } from 'react';

const FeatureCard = ({ icon, title, description, index }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardRef.current.classList.add('opacity-100', 'translate-y-0');
          }, index * 150);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className="w-full md:w-1/3 p-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div className="h-full bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 flex flex-col items-center text-center group hover:-translate-y-1 transform transition-transform">
        <div className="w-16 h-16 mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="absolute inset-0 flex items-center justify-center text-brand-primary">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-text-primary mb-3 group-hover:text-brand-primary transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-dark-text-secondary">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const titleRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  
  const features = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "30-Minute Delivery",
      description: "Get your medications within 30 minutes of placing your order."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Secure Ordering",
      description: "Your prescription and personal information are always kept secure."
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Seamless WhatsApp Ordering",
      description: "Simply place your order through WhatsApp for a hassle-free experience."
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-dark-bg/70">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-3xl font-bold text-center text-gray-800 dark:text-dark-text-primary mb-16 opacity-0 -translate-y-8 transition-all duration-700 ease-out"
        >
          Why Choose <span className="text-brand-primary">QuickMeds</span>?
        </h2>
        <div className="flex flex-wrap">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;