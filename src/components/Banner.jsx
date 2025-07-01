import React from 'react';
import Button from './Button';
import BannerImage from '../assets/banner.png';

const Banner = () => {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="container mx-auto pt-[120px] px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-[44px] gap-10 lg:gap-0">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] leading-tight font-bold text-[#313131] tracking-wide max-w-xl lg:max-w-[680px] mx-auto lg:mx-0">
              We Are Ready To Make Your New Life Happier.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#676767] mt-5 mb-7 max-w-md sm:max-w-lg lg:max-w-[620px] mx-auto lg:mx-0 leading-relaxed">
              We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button>Get a Consultation</Button>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full max-w-[500px] mx-auto lg:mx-0">
            <img src={BannerImage} alt="Banner" className="w-full h-auto" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
