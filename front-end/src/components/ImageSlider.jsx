// src/components/ImageSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../assets/image16.png';
import slide2 from '../assets/1.jpg';
import slide3 from '../assets/2.jpg';

import dove from '../assets/Group 8.png'; // Dove image
import themeImage1 from '../assets/Rectangle 9.png';
import themeImage2 from '../assets/Rectangle 11.png';
import themeImage3 from '../assets/Rectangle 13.png';

const slides = [slide1, slide2, slide3];

export default function ImageSlider() {
  return (
    <div className="w-screen bg-[#40B4E7] relative z-0 pt-28 pb-16">
      {/* Slider appears halfway above this section */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 z-10">
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: '.custom-pagination',
            clickable: true,
          }}
          spaceBetween={20}
          slidesPerView={1}
          grabCursor={true}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-80 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="custom-pagination flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <span
              key={index}
              className="swiper-pagination-bullet w-3 h-3 bg-gray-300 rounded-full opacity-100"
            />
          ))}
        </div>
      </div>

      {/* Content below slider */}
      <div className="max-w-5xl mx-auto px-4 mt-40">
        {/* Dove Image */}
        <div className="flex justify-center mt-6 mb-6">
          <img
            src={dove}
            alt="Dove with leaf"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Section Title */}
        <div className="space-y-8 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Pillars</h2>
            <div className="w-[120px] h-[2px] bg-white mx-auto"></div>
          </div>

          {/* Theme 1 */}
          <div className="grid md:grid-cols-5 gap-6 items-center ">
            <div className="md:col-span-2 rounded-xl overflow-hidden h-48">
              <img
                src={themeImage1}
                alt="Healing on the Margins"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-3 bg-[#FFFFFF47] p-6 rounded-xl text-[#1D204B]">
              <h3 className="text-xl font-bold mb-3">
                1. Healing on the Margins: Community-Led Solutions to Substance Use
              </h3>
              <p className="text-sm">
                Focus: Centering the voices and expertise of those working directly with 
                vulnerable populations, including street-connected individuals, to address 
                substance abuse through practical, localized interventions.
              </p>
            </div>
          </div>

          {/* Theme 2 */}
          <div className="grid md:grid-cols-5 gap-6 items-center">
            <div className="md:col-span-3 bg-[#FFFFFF47] p-6 rounded-xl order-2 md:order-1 text-[#1D204B]">
              <h3 className="text-xl font-bold mb-3">
                2. Bridging Gaps: Collaboration, Care, & Change in Street Medicine
              </h3>
              <p className="text-sm">
                Focus: Centering the voices and expertise of those working directly with vulnerable populations, including street-connected individuals, to address substance abuse through practical, localized interventions.
              </p>
            </div>
            <div className="md:col-span-2 rounded-xl overflow-hidden h-48 order-1 md:order-2">
              <img
                src={themeImage2}
                alt="Bridging Gaps"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Theme 3 */}
          <div className="grid md:grid-cols-5 gap-6 items-center">
            <div className="md:col-span-2 rounded-xl overflow-hidden h-48">
              <img
                src={themeImage3}
                alt="Resilience and Recovery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-3 bg-[#FFFFFF47] p-6 rounded-xl text-[#1D204B]">
              <h3 className="text-xl font-bold mb-3">
                3. Resilience and Recovery: Reimagining Health for Vulnerable Communities
              </h3>
              <p className="text-sm">
                Focus: Centering the voices and expertise of those working directly with vulnerable populations, including street-connected individuals, to address substance abuse through practical, localized interventions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
