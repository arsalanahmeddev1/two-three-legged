import Image from "next/image";
import { Banner, Featured, FilterProfiles, LoveArt } from "@/components";
export default function Home() {
  return (
    <div className="">
      <main className="">
        <Banner />
        <Featured />
        <FilterProfiles />
        <LoveArt />
      </main>

    </div>
  );
}
