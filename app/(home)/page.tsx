import HeroCarousel from "@/components/HeroCarousel";
import CoreCapabilities from "@/components/CoreCapabilities";
import Statistics from "@/components/Statistics";
import Qualifications from "@/components/Qualifications";
import TechnicalSupport from "@/components/TechnicalSupport";
import CoreClients from "@/components/CoreClients";

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
