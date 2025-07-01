import React from 'react';
import pic1 from '../assets/B1.png';
import pic2 from '../assets/B2.png';
import pic3 from '../assets/B3.png';
import pic4 from '../assets/B4.png';
import pic5 from '../assets/B5.png';

const Benefits = () => {
  const cards = [
    {
      img: pic1,
      title: 'We’re unbiased',
      desc: 'Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.',
    },
    {
      img: pic2,
      title: 'We have the best prices',
      desc: 'Our insurance plans offers are priced the same everywhere else. We just make them easier for you to find.',
    },
    {
      img: pic3,
      title: 'We’re your insurance advocate',
      desc: 'We will deal with the insurance companies for you, even after you’ve bought your plan.',
    },
    {
      img: pic4,
      title: 'We’re available 24/7',
      desc: 'We have your back 24/7 between our online chat function, email and telephone support.',
    },
    {
      img: pic5,
      title: 'We make insurance simple',
      desc: 'We’re committed to making applying for insurance as simple as can be for our customers.',
    },
  ];

  return (
    <section id="benefits" className="scroll-mt-20">
      <div className="container mx-auto px-4 mt-[125px]">
        {/* Title Area */}
        <div className="text-center mx-auto">
          <h3 className="font-bold text-[16px] text-[#89D32A] tracking-[2px] mb-[10px] uppercase">your benefits</h3>
          <span className="text-gray-500">......................................................</span>
          <h2 className="font-bold text-[28px] sm:text-[36px] md:text-[40px] text-[#313131] tracking-[2px] leading-[48px] mt-[30px]">
            We’re Your Right Insurance Advocate
          </h2>
          <p className="font-normal text-[16px] sm:text-[18px] text-[#676767] leading-[26px] max-w-[602px] mt-5 mx-auto">
            We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[80px] mb-[100px]">
          {cards.map((card, index) => (
            <div key={index} className="bg-white text-center shadow-md rounded-[10px] p-6 hover:shadow-xl transition-shadow duration-300">
              <img className="mx-auto mt-4 mb-6 w-[80px] h-auto" src={card.img} alt={`icon-${index}`} />
              <h2 className="font-bold text-[#313131] text-[20px] leading-[32px] tracking-[1px]">{card.title}</h2>
              <p className="font-normal text-[#676767] text-[16px] leading-[26px] mt-4">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
