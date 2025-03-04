import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img className="w-full h-auto" src="/api/placeholder/600/400" alt="How QuickMeds works" />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="flex mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold text-xl">1</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Click "Order Now"</h3>
                <p className="text-gray-600">Click the Order Now button to be redirected to WhatsApp.</p>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold text-xl">2</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Chat with Our Bot</h3>
                <p className="text-gray-600">Our WhatsApp bot will guide you through the ordering process.</p>
              </div>
            </div>
            <div className="flex mb-8">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold text-xl">3</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Receive Your Medicine</h3>
                <p className="text-gray-600">Your order will be delivered to your doorstep within 30 minutes.</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start mt-8">
              <WhatsAppButton text="Start Your Order" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;