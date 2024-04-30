import FeatureCourse from "@/components/FeatureCourse";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.98] antialiased bg-grid-while/[0.02]">
      <HeroSection />
      <FeatureCourse />
    </main>
  );
}
