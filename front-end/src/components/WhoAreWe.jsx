// Add this section after your ImageSlider component in your layout
import whoWeAreImage from '../assets/4.jpg'; // Replace with your actual image

export function WhoWeAre() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#1D204B] py-12 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={whoWeAreImage}
              alt="Who we are"
              className="h-64 w-80 md:h-72 md:w-96 object-cover rounded-[5%] shadow-lg"
            />
          </div>

          {/* Right: Text (vertically centered) */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-2xl font-bold mb-4">Who Are We</h2>
            <p className="text-sm leading-relaxed">
                Africa Street Therapy Medicine (ASTM) is a collaborative initiative tackling 
              illicit alcohol and substance abuse across Kenya and beyond. Launched in 2024 
              under Wezesha, it brings together medical and mental health professionals, NGOs, 
              stakeholders and educators to promote access to preventive mental health and 
              addiction care to the marginalized and vulnerable communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}