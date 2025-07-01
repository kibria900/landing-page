import React from 'react';
import Pic from '../assets/pic.png';
import Pic1 from '../assets/pic1.png';
import Pic2 from '../assets/pic2.png';

const TipsForYou = () => {
  return (
    <section id="blog" className="bg-white py-16 px-4 md:px-10 text-center scroll-mt-20">
      
      <p className="text-[#85C872] text-sm font-semibold tracking-widest uppercase mb-2">
        Our Tips For You
      </p>
      <h2 className="text-[40px] md:text-4xl font-bold text-gray-900 mb-4">
        Reinventing Your Protection
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-center text-[16px] leading-relaxed">
        We share common trends, strategies ideas, opinion, short & log stories from the team behind company
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="rounded-lg overflow-hidden">
          <img
            src={Pic}
            alt="Family 1"
            className="w-[370px] h-[460px] object-cover rounded-lg"
          />
        </div>
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-start text-left">
          <img
            src={Pic1}
            alt="Family 2"
            className="w-full h-[200px] object-cover rounded-lg mb-5"
          />
          <h3 className="text-[25px] font-semibold text-[#111827] mb-3 leading-snug w-[326px] H-[120px]">
            How to prevent and protect your family from Carbon monoxide
          </h3>
          <p className="text-[16px] text-[#6B7280] leading-relaxed w-[308px] H-[74px]">
            We share common trends, strategies ideas, opinion, short & log stories from the team behind company.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={Pic2}
            alt="Family 3"
            className="w-[370px] h-[460px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TipsForYou;
