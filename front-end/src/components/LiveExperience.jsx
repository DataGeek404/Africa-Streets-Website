import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Import your images - update these paths
import maryanneImage from '../assets/1.jpg';
import panelist2Image from '../assets/10.jpg';

export function LivedExperiencesPanel() {
  const panelists = [
    {
      name: "Maryanne M. Karanja",
      title: "Co-Founder Africa Street Medicine Therapy",
      role: "Counseling psychologist",
      additionalRole: "Founder; Freedom Lounge\nMusician",
      points: [
        "Survivors/lived experiences shared personal stories, highlighting the broader family impact of addiction.",
        "Discussed the link between addiction and violence.",
        "Addressed stigma and misinformation surrounding rehabilitation.",
        "Stressed the need for rehabilitation services in prisons.",
        "Advocated for early intervention in schools and community-based solutions."
      ],
      image: maryanneImage
    },
    {
      name: "Panelist 2 Name",
      title: "Panelist 2 Title",
      role: "Panelist 2 Role",
      additionalRole: "Panelist 2 Additional Role",
      points: [
        "Point 1",
        "Point 2",
        "Point 3"
      ],
      image: panelist2Image
    }
  ];

  return (
    <div className="w-full bg-white py-16">
      {/* Centered Header */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-[#1D204B] text-3xl md:text-4xl font-bold text-center">
          Lived experiences panel
        </h2>
      </div>

      {/* Full-Width Blue Background */}
      <div className="w-full bg-[#41B4E7] py-12 relative">
        {/* Slider Container with edge peeking */}
        <Swiper
          slidesPerView={1.1}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1.2
            },
            1024: {
              slidesPerView: 1.3
            }
          }}
          className="!overflow-visible"
        >
          {panelists.map((panelist, index) => (
            <SwiperSlide key={index}>
              {/* Individual Slide Content */}
              <div className="max-w-4xl mx-auto bg-[#41B4E7] rounded-xl p-8 h-full">
                {/* Stacked layout (profile above points) */}
                <div className="flex flex-col items-center text-white">
                  {/* Profile Picture */}
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white mb-6">
                    <img 
                      src={panelist.image} 
                      alt={panelist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Panelist Details */}
                  <div className="text-center mb-8">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                      {panelist.name}
                    </h3>
                    <p className="whitespace-pre-line">
                      {panelist.title}
                      {"\n"}
                      {panelist.role}
                      {"\n"}
                      {panelist.additionalRole}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="list-disc pl-5 space-y-2 w-full max-w-lg mx-auto">
                    {panelist.points.map((point, i) => (
                      <li key={i} className="text-left">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional subtle edge indicators */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#41B4E7] to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#41B4E7] to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
}