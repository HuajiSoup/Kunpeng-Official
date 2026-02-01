import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import HeroFeatures from "@/components/HeroFeatures";
import CoreCapabilities from "@/components/CoreCapabilities";
import Statistics from "@/components/Statistics";
import Qualifications from "@/components/Qualifications";
import TechnicalSupport from "@/components/TechnicalSupport";
import Footer from "@/components/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* 全局粒子背景 */}
      <ParticleBackground />
      
      {/* 内容层 */}
      <div className="relative z-10">
        <Header />
        <HeroCarousel />
        {/* <HeroFeatures /> */}
        <CoreCapabilities />
        <Statistics />
        <Qualifications />
        <TechnicalSupport />
        <Footer />
      </div>
    </main>
  );
}
