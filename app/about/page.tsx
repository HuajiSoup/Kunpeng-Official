import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import CompanyIntro from "@/components/about/CompanyIntro";
import OrgStructure from "@/components/about/OrgStructure";
import CorporateCulture from "@/components/about/CorporateCulture";
import ExpertTeam from "@/components/about/ExpertTeam";
import DevelopmentHistory from "@/components/about/DevelopmentHistory";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <div className="relative z-10">
        <Header />
        <AboutHero />
        <CompanyIntro />
        <OrgStructure />
        <CorporateCulture />
        <ExpertTeam />
        <DevelopmentHistory />
        <Footer />
      </div>
    </main>
  );
}
