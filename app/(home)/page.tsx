import HeroCarousel from "@/components/HeroCarousel";
import CoreCapabilities from "@/components/CoreCapabilities";
import Statistics from "@/components/Statistics";
import Qualifications from "@/components/Qualifications";
import TechnicalSupport from "@/components/TechnicalSupport";

export default function Home() {
  return (<>
    <HeroCarousel />
    <CoreCapabilities />
    <Statistics />
    <Qualifications />
    <TechnicalSupport />
  </>);
}
