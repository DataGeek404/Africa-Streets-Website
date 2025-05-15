// src/components/Hero.jsx
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { WhoWeAre } from "./WhoAreWe";
import { VisionMission } from "./VisionMission";
import { RootedLocally } from "./RootedLocally";
import { Approach } from "./Approach";
import { LaunchSection } from "./Launch";
import { KeynoteSpeakers } from "./Keynote";
import { LivedExperiencesPanel } from "./LiveExperience";
import { PartnersSection } from "./Partner";
import { SupportForm } from "./SupportSection";
import { DonationSection } from "./DonationSection";
import { Footer } from "./Footer";

export default function Hero() {
  return (
  <>
    <section className="bg-[#ffffff] py-12 pb-50 px-4 sm:px-6 text-center">

      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1D204B] mb-4">
          We support African communities in tackling harmful substance use, strengthening mental health, and building systems of dignity & care for all.
        </h1>

        <div
            className="inline-block mt-4 p-[2px] rounded-full"
            style={{
                background: "conic-gradient(from 90deg, #1D204B 0deg, #40B4E7 90deg, #1D204B 180deg, #40B4E7 270deg, #1D204B 360deg)"
            }}
            >
            <Link
                to="/invite"
                className="block px-6 py-3 bg-[#1D204B] text-white font-medium rounded-full hover:opacity-90 transition"
            >
                Invite us to your community
            </Link>
        </div>
      </div>
    </section>

    <ImageSlider/>

    <WhoWeAre/>

    <VisionMission/>

    <Approach/>

    <RootedLocally/>

    <LaunchSection/>

    <KeynoteSpeakers/>

    <LivedExperiencesPanel/>

    <PartnersSection/>
    
    <SupportForm/>

    <DonationSection/>

    <Footer/>
    

  </>  
  );
}
