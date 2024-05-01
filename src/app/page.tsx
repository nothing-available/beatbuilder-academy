import AboutSection from "@/components/AboutSection";
import MusicSchoolCards from "@/components/Cards";
import FeatureCourse from "@/components/FeatureCourse";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import UpcomingSchedule from "@/components/UpcomingSchedule";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeatureCourse />
      <AboutSection />
      <MusicSchoolCards />
      <UpcomingSchedule />
      <Instructor />
      <Footer />
    </main>
  );
}
