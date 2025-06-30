import React from 'react'

import Avatar from '../assets/Avatar.png';
import Avatar1 from '../assets/Avatar1.png';
import Avatar2 from '../assets/Avatar2.png';
import Star from '../assets/Star.png';

const Testimonial1 = () => {

  const reviews = [
    {
      name: "Viola Manisa",
      text: "I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.",
      img: Avatar,
      imgStar: Star,
    },
    {
      name: "Viola Manisa",
      text: "I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.",
      img: Avatar2,
      imgStar: Star,
    },
    {
      name: "Viola Manisa",
      text: "I received great customer service from the specialists who helped me. I would recommend to anyone who wants quality.",
      img: Avatar1,
      imgStar: Star,
    },
  ];

  return (
    <>
      <div className="py-20 bg-white text-center">
        <h3 className="text-green-500 font-medium tracking-widest mb-2">TESTIMONIAL</h3>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          What Our Customer Have To Says
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          We share common trends, strategies ideas, opinion, short & long stories from the team behind company.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md transition duration-300 text-left bg-gray-50"
            >
              <div className="flex justify-start mb-4">
                <img
                  src={review.imgStar}
                  alt="Star"
                  className="w-24 h-auto"
                />
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {review.text}
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-green-500 italic">✔ Verified customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial1;
