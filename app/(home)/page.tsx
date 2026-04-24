import CoreCapabilities from "@/components/CoreCapabilities";
import CoreClients from "@/components/CoreClients";
import HeroCarousel from "@/components/HeroCarousel";
import Qualifications from "@/components/Qualifications";
import Statistics from "@/components/Statistics";
import TechnicalSupport from "@/components/TechnicalSupport";

export default function Home() {
  return (<>
    <HeroCarousel />
    <CoreCapabilities />
    {/* <Statistics /> */}
    <CoreClients />
    <Qualifications />
    <TechnicalSupport />
  </>);
}
