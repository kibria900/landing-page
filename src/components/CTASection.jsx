import React from 'react';
import Button from './Button'

const CTASection = () => {
  return (
    <section id="Contact" className="bg-[#2d2d2d] text-white py-20 px-4">
      <div className="max-w-[600px] mx-auto text-center">

        <h2 className="text-white font-bold text-[28px] leading-[40px] mb-8">
          Ready To Get Insured? Submit Your Request <br />
          And Hear Back As Soon As Tomorroe.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-5">
          <input
            type="email"
            placeholder="Your Email"
            className="w-[230px] h-[40px] px-3 rounded-md bg-white text-gray-800 text-sm focus:outline-none"
          />
          <button className="h-[40px] bg-lime-500 hover:bg-lime-600 text-white px-6 rounded-md text-sm font-semibold">
            Get started
          </button>
        </div>
        <p className="text-gray-400 text-[12px] leading-[18px]">
          Get a response tomorrow if you submit by 9pm today. If we received after <br />
          9pm will get a response the following day.
        </p>
        
      </div>
    </section>
  );
};

export default CTASection;
