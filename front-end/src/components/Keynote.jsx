import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import drFiona from '../assets/1.jpg';
import speaker2 from '../assets/10.jpg';

export function KeynoteSpeakers() {
  const speakers = [
    {
      name: "Dr Fiona O'Reilly",
      title: "Founder of Irish Street Medicine",
      role: "CEO of SafetyNet Primary Care",
      additionalRole: "Founder of the Irish Street Medicine Symposium",
      points: [
        "Presented statistics on drug and alcohol use among young people in Ireland.",
        "Emphasized the importance of understanding community-specific problems before designing interventions.",
        "Advocated for community involvement as a critical factor in addressing substance abuse."
      ],
      image: drFiona
    },
    {
      name: "Speaker 2 Name",
      title: "Speaker 2 Title",
      role: "Speaker 2 Role",
      additionalRole: "Speaker 2 Additional Role",
      points: [
        "Point 1",
        "Point 2",
        "Point 3"
      ],
      image: speaker2
    }
  ];

  return (
    <div className="w-full bg-white py-16">
      {/* Centered Header */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-[#1D204B] text-3xl md:text-4xl font-bold text-center">
          Key note speakers & speeches
        </h2>
      </div>

      {/* Full-Width Dark Blue Background */}
      <div className="w-full bg-[#1D204B] py-12 relative">
        {/* Slider Container with edge peeking */}
        <Swiper
          slidesPerView={1.1} // Makes next slide peek from edge
          centeredSlides={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1.2 // More peek on larger screens
            },
            1024: {
              slidesPerView: 1.3 // Even more peek on desktop
            }
          }}
          className="!overflow-visible" // Allows slides to extend beyond container
        >
          {speakers.map((speaker, index) => (
            <SwiperSlide key={index}>
              {/* Individual Slide Content - Constrained width */}
              <div className="max-w-4xl mx-auto bg-[#1D204B] rounded-xl p-8 h-full">
                {/* Stacked layout (profile above points) */}
                <div className="flex flex-col items-center text-white">
                  {/* Profile Picture */}
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#41B4E7] mb-6">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Speaker Details */}
                  <div className="text-center mb-8">
                    <h3 className="text-[#41B4E7] text-2xl md:text-3xl font-bold mb-2">
                      {speaker.name}
                    </h3>
                    <p>
                      {speaker.title}<br />
                      {speaker.role}<br />
                      {speaker.additionalRole}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="list-disc pl-5 space-y-2 w-full max-w-lg mx-auto">
                    {speaker.points.map((point, i) => (
                      <li key={i} className="text-left">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional subtle edge indicators */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1D204B] to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#1D204B] to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
}