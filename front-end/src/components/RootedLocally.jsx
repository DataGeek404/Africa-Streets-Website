import image1 from '../assets/peeps.jpg'; // Add your two horizontal images
import image2 from '../assets/Rectangle 5.png';

export function RootedLocally() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header with line break */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D204B]">
            Rooted Locally,<br/>Connected Globally
          </h2>
        </div>

        {/* Two Horizontal Images */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 mb-12 px-4">
          <img 
            src={image1} 
            alt="Local connection" 
            className="h-60 md:h-80 w-auto object-cover rounded-[10%] shadow-lg"
          />
          <img 
            src={image2} 
            alt="Global connection" 
            className="h-60 md:h-80 w-auto object-cover rounded-[10%] shadow-lg"
          />
        </div>


        {/* Centered Content */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Inspired by models like Street Medicine Ireland and other global street
            medicine programs, our team initiated a similar approach in Kenya.
            In 2024, we organized a landmark symposium in Nairobi, connecting Irish
            and Kenyan practitioners and policymakers. We are deepening that
            bridge—in the field we are offering technical expertise and advocacy.
            We are not outsiders parachuting in; we are connectors and co-creators
            of solutions rooted in local realities grounded by 3 pillars: prevention,
            treatment, and support of marginalized and vulnerable populations
            affected by alcohol and drug addiction.
          </p>
        </div>

        {/* Horizontal Line */}
        <div className="mx-auto h-[2px] w-1/3 bg-[#41B4E7] mb-10"></div>

      </div>
    </div>
  );
}