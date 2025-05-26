import Image from "next/image";
import { Banner, Featured, FilterProfiles, LoveArt, Newsletter, Categories, SourceArt, Partners, Contact, MarketPlace } from "@/components";
export default function Home() {
  return (
    <div className="">
      <main className="">
        <Banner />
        <Featured />
        <FilterProfiles />
        <LoveArt />
        <MarketPlace />
        <Newsletter />
        <Categories />
        <SourceArt />
        <Partners />
        <Contact />
      </main>

    </div>
  );
}
