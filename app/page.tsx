"use client";
import Header from "@/Home_Components/Header";
import Hero from "@/Home_Components/Hero_working";
// import Courses from "@/Home_Components/Courses";
// import Testimonials from "@/Home_Components/Testimonials";
import JourneySection from "@/Home_Components/JourneyData";
import EventsShowcase from "@/Home_Components/EventsShowcase";
import VisionMission from "@/Home_Components/VisionMission";
import AwardsSection from "@/Home_Components/AwardsSection";
import ContactComponent from "@/Home_Components/ContactSection";
import CrasoulsReverse from "@/components/CrasoulReverse";
import Footer from "@/Home_Components/Footer";
import HoverFollowCard from "@/components/HoverFollowCard";

export default function Home() {

  return (
    <main className="bg-gray-50 relative text-gray-900">
      <Header />
      <Hero />
      {/* <Courses /> */}
      <HoverFollowCard
        label="Placement Partners"
        className="w-full h-18 cursor-default opacity-80 relative"
      >
        <CrasoulsReverse />
      </HoverFollowCard>
      <JourneySection />
      <EventsShowcase />
      <VisionMission />
      <AwardsSection />
      <ContactComponent />
      {/* <Testimonials /> */}
      <Footer />
    </main>
  );
}
