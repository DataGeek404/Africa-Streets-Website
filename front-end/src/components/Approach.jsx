import doveImage from '../assets/Group 7.png'; // Make sure to import your dove image
import image1 from '../assets/Rectangle 46.png'; // Replace with your actual images
import image2 from '../assets/Rectangle 47.png';
import image3 from '../assets/Rectangle 48.png';
import image4 from '../assets/Rectangle 21.png';
import image5 from '../assets/Rectangle 44.png';
import image6 from '../assets/Rectangle 45.png';
import image7 from '../assets/Rectangle 30.png';
import image8 from '../assets/Rectangle 31.png';
import image9 from '../assets/Rectangle 32.png';

export function Approach() {
  return (
    <div className="w-full bg-[#1D204B] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#41B4E7] mb-4">
            Community-Centered Approach
          </h2>
          <p className="text-white text-sm md:text-base max-w-2xl mx-auto">
            Tackling Substance Use Disorders in Vulnerable Populations
            <br />
            Through Community-Centered Street Medicine in Kenya
          </p>
        </div>

        {/* Dove and First Divider */}
        <div className="relative mb-8 w-screen -left-4 md:-left-8 lg:-left-[calc((100vw-100%)/2)] overflow-x-visible">
          <img
            src={doveImage}
            alt="Peace dove"
            className="absolute left-0 -translate-x-[15%] w-24 md:w-32 lg:-translate-x-[20px]"
          />
          <div className="mx-auto h-[2px] w-3/4 bg-gradient-to-r from-[#1D204B] via-[#40B4E7] to-[#1D204B]"></div>
        </div>

        <p className="text-white text-3xl md:text-4xl lg:text-5xl text-center mb-12 max-w-6xl mx-auto py-6 md:py-8 lg:py-10">
          Substance use disorders (SUDs) in Kenya are a growing national crisis, affecting an estimated
          <span className="text-[#41B4E7] font-bold"> 4.7 million people aged 15–65</span>.
        </p>

        <div className="mx-auto h-[2px] w-3/4 bg-gradient-to-r from-[#1D204B] via-[#40B4E7] to-[#1D204B] mb-16"></div>

        {/* First Content Block */}
        <div className="mb-24">
          <div className="text-white text-center max-w-6xl mx-auto space-y-6">
            <p className="py-6 md:py-8 lg:py-10">
              The consequences are particularly acute for teenagers and youth, women and children, and the elderly, all of whom face layered
              vulnerabilities and social exclusion due to substance abuse and limited access to support. We find that the men have more alcohol and substance use dependency and addiction compared to women.
              <br /><br />
              Teenagers and youth are among the hardest hit. Many drop out of school due to addiction, while others are incarcerated for drug-related offenses, including peddling and theft. Street Medicine
              Africa intervenes directly in these high-risk settings by providing psychoeducation, individual assessments, and counseling to incarcerated boys and girls.
              <br /><br />
              The peer pressure on drug abuse in school is on the rise. We partner with educators for drug abuse prevention campaigns in schools.
              <br /><br />
              These youths often have no access to therapeutic services or educational pathways. Through partnerships with sponsors and well-wishers, Street Medicine Africa facilitates their
              reintegration into formal education upon release, offering them a second chance at life and learning.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
            <img src={image1} alt="Content 1" className="w-full md:w-1/3 h-70 object-cover rounded-[10%]" />
            <img src={image2} alt="Content 2" className="w-full md:w-1/3 h-70 object-cover rounded-[10%]" />
            <img src={image3} alt="Content 3" className="w-full md:w-1/3 h-70 object-cover rounded-[10%]" />
          </div>
        </div>

        <div className="mx-auto h-[2px] w-full bg-gradient-to-r from-[#1D204B] via-[#40B4E7] to-[#1D204B] mb-16"></div>

        {/* Second Content Block */}
        <div className="mb-24">
          <div className="text-white text-center max-w-6xl mx-auto space-y-6">
            <p className="py-6 md:py-8 lg:py-10">
              Women and children face additional layers of harm—women affected by substance use and addiction
              are more susceptible to exploitation, gender based violence, domestic abuse ,rape and transactional sex,
              while children growing up in such environments endure neglect,violence and long-term emotional and psychological
              trauma. Africa street Medicine Therapy and partners visit the women and children in marginalized areas affected.
              We psycho educate them on matters dugs and substance use, mental health ,self value, legal rights ,children rights,
              we offer group therapy sessions ,interpersonal therapy sessions and offer economic empowerment
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
            <img src={image4} alt="Content 4" className="w-full md:w-1/3 h-70 object-cover rounded-[10%]" />
            <img src={image5} alt="Content 5" className="w-full md:w-1/3 h-70 object-cover rounded-[10%]" />
            <img src={image6} alt="Content 6" className="w-full md:w-1/3 h-70 object-cover rounded-[10%]" />
          </div>
        </div>

        <div className="mx-auto h-[2px] w-full bg-gradient-to-r from-[#1D204B] via-[#40B4E7] to-[#1D204B] mb-16"></div>

        {/* Third Content Block */}
        <div className="mb-24">
          <div className="text-white text-center max-w-6xl mx-auto space-y-6">
            <p className="py-6 md:py-8 lg:py-10">
              Men are most hit by alcohol addiction and substance use I Kenya. Africa street Therapy Medicine partners with
              stake holders and volunteer groups to offer HIV ,diabetes ,blood pressure tests and counselling , psycho educative
              sessions , psychiatry visits ,holistic therapy treatment and food .
              <br /><br />
              Elderly, frequently forgotten in addiction care strategies,they grapple with isolation and misuse of prescription
              drugs, compounded by mobility and access challenges.Africa street therapy Medicine work with partners ,stake holders
              and volunteers where we visit the elderly to offer therapy and support in affected marginalized homes.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
            <img src={image7} alt="Content 7" className="w-full md:w-1/3 h-70 object-cover rounded-[10%]" />
            <img src={image8} alt="Content 8" className="w-full md:w-1/3 h-70 object-cover rounded-[10%]" />
            <img src={image9} alt="Content 9" className="w-full md:w-1/3 h-70 object-cover rounded-[10%]" />
          </div>
        </div>

        <div className="mx-auto h-[2px] w-full bg-gradient-to-r from-[#1D204B] via-[#40B4E7] to-[#1D204B] mb-16"></div>

        {/* Final Paragraph */}
        <div className="mb-24">
          <div className="text-white text-center max-w-6xl mx-auto space-y-6">
            <p className="py-6 md:py-8 lg:py-10">
              Africa Street Therapy Medicine is registered under Street Medicine Institute and proposes a holistic,
              innovative response modeled on successful street medicine approaches developed in Ireland and other
              global street medicine programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
