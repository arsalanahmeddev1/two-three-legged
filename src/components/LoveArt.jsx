import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";


export const LoveArt = () => {
  return (
    <div className="container pb-[35px]">
      <div className="w-full  relative flex flex-col items-center gap-[39px] text-center text-xl text-black font-poppins">
        <h2 className="w-[908px] font-bold secondary-font relative text-[55px] leading-[57px] inline-block font-cinzel h-[132px] shrink-0">Love Art? Connect with an artist and their work</h2>
        <p className="w-[582px] relative inline-block h-[69px] shrink-0">Each 23LD artist is unique in their own way just like art. Learn their story and their life's work</p>
      </div>
      <div className="grid grid-cols-6 gap-[40px] mb-[40px]">
        <div className="col-span-2">
          <img src="/images/love-art-img-lg-01.png" alt="" className="h-full" />
          <h4 className="text-[#000] text-[40px] font-bold secondary-font">Devin Pughsley </h4>
          <div className="flex flex-col pb-[10px]">
            <span className="text-[#000]">Portraits & Wildlife </span>
          </div>
          <Button asChild variant="secondary" size="md" >
            <Link href="">Visit Profile</Link>
          </Button>
        </div>
        <div className="sm-images">
          <img src="/images/love-art-img-01.png" alt="" className="" />
          <img src="/images/love-art-img-02.png" alt="" className="" />
          <img src="/images/love-art-img-03.png" alt="" className="" />
        </div>
        <div className="col-span-2">
          <img src="/images/love-art-img-lg-02.png" alt="" className="h-full" />
          <h4 className="text-[#000] text-[40px] font-bold secondary-font">Robin Barrier </h4>
          <div className="flex flex-col pb-[10px]">
            <span className="text-[#000]">Scenic Western Landscapes </span>
          </div>
          <Button asChild variant="secondary" size="md" >
            <Link href="">Visit Profile</Link>
          </Button>
        </div>
        <div className="sm-images">
          <img src="/images/love-art-img-01.png" alt="" className="" />
          <img src="/images/love-art-img-02.png" alt="" className="" />
          <img src="/images/love-art-img-03.png" alt="" className="" />
        </div>
        <div className="col-span-2">
          <img src="/images/love-art-img-lg-03.png" alt="" className="h-full" />
          <h4 className="text-[#000] text-[40px] font-bold secondary-font">Emily Brown </h4>
          <div className="flex flex-col pb-[10px]">
            <span className="text-[#000]">Leather Designs</span>
          </div>
          <Button asChild variant="secondary" size="md" >
            <Link href="">Visit Profile</Link>
          </Button>
        </div>
        <div className="sm-images">
          <img src="/images/love-art-img-07.png" alt="" className="" />
          <img src="/images/love-art-img-08.png" alt="" className="" />
          <img src="/images/love-art-img-09.png" alt="" className="" />
        </div>
        <div className="col-span-2">
          <img src="/images/love-art-img-lg-04.png" alt="" className="h-full" />
          <h4 className="text-[#000] text-[40px] font-bold secondary-font">Tanna McGuire </h4>
          <div className="flex flex-col pb-[10px]">
            <span className="text-[#000]">Abstracts & Wildlife</span>
          </div>
          <Button asChild variant="secondary" size="md" >
            <Link href="">Visit Profile</Link>
          </Button>
        </div>
        <div className="sm-images">
          <img src="/images/love-art-img-10.png" alt="" className="" />
          <img src="/images/love-art-img-11.png" alt="" className="" />
          <img src="/images/love-art-img-12.png" alt="" className="" />
        </div>

      </div>
      <div className="flex justify-center">
        <Button variant="default" size="md">View All Artists</Button>
      </div>

    </div>
  );
};

