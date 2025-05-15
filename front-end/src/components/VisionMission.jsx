import visionImage from '../assets/5.jpg';
import missionImage from '../assets/6.jpg';

export function VisionMission() {
  return (
    <div className="w-full bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Top Section - Vision */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 items-center">
          {/* Content - Left */}
          <div className="flex flex-col justify-center md:pr-6">
            <h3 className="text-[80px] md:text-[100px] lg:text-[120px] font-normal text-[#31AC6E] leading-[0.85] mb-4">
              Our Vision
            </h3>
            <p className="text-md text-[#1D204B] max-w-[500px]">
              Where empowered African communities lead the response to substance abuse, 
              ensuring dignity, health, and support for all especially the most vulnerable.
            </p>
          </div>
          
          {/* Image - Right */}
          <div className="h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={visionImage}
              alt="Our Vision illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Section - Mission */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image - Left */}
          <div className="h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={missionImage}
              alt="Our Mission in action"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content - Right */}
          <div className="flex flex-col justify-center md:pl-6">
            <h3 className="text-[80px] md:text-[100px] lg:text-[120px] font-normal text-[#31AC6E] leading-[0.85] mb-4">
              Our Mission
            </h3>
            <p className="text-md text-[#1D204B] max-w-[500px]">
              Street Medicine Therapy Africa brings together frontline professionals and 
              communities to share practical knowledge and strategies for addressing 
              substance use and related health issues.
              <br /><br />
              We support locally driven solutions through inclusive dialogue, training, 
              and partnerships that strengthen care for vulnerable populations in our 
              society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}