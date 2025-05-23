import React from 'react'
import Image from 'next/image'
export const SourceArt = () => {
  return (
    <div className="mb-[90px] w-full relative bg-black h-[434px] flex flex-col items-center justify-center py-[69px] px-[142px] box-border text-center text-[55px] text-white font-cinzel">
      <h2 className="relative secondary-font font-bold leading-[105px]">Source Art For Your Business</h2>
      <div className="w-[1634.9px] flex flex-row items-center justify-center gap-2.5 text-left text-[25px]">
        <div className="w-[546px] h-[188px] flex flex-row items-center justify-center gap-[29px]">
          <Image className="w-[105.4px] relative h-[80.1px] object-cover" width={105} height={80} alt="" src="/images/01.png" />
          <div className="w-[379px] flex flex-col items-start justify-start gap-[19px]">
            <div className="w-[260.8px] relative h-[66.3px]">
              <h3 className="secondary-font font-bold absolute top-[calc(50%_-_33.15px)]  left-[calc(50%_-_91.64px)] leading-[107px] inline-block w-[222px] h-[61px]">Vision Casting</h3>
              <Image className="absolute top-[37.39px] left-[0px] w-[29.4px] h-[28.9px]" width={29} height={28} alt="" src="/images/eye.png" />
            </div>
            <p className="self-stretch relative text-base font-poppins whitespace-pre-wrap inline-block h-[99px] shrink-0">During our in-person or virtual discovery, we'll learn about your story, vision,  and budget; and put together a plan that connects where you are to where you want your space to be.</p>
          </div>
        </div>
        <div className="w-[527px] h-[188px] flex flex-row items-center justify-center gap-[22px]">
          <Image className="w-[117.2px] relative h-[80.1px] object-cover" width={117} height={80} alt="" src="/images/02.png" />
          <div className="w-[361px] flex flex-col items-start justify-start">
            <div className="w-[326px] relative h-[75px]">
              <h3 className="secondary-font font-bold absolute top-[0px] left-[42px] leading-[35px] inline-block w-[284px] h-[75px]">{`Fine Art Matching & Acquisition`}</h3>
              <Image className="absolute top-[7.12px] left-[0px] w-[33.9px] h-[27.5px] object-cover" width={33} height={27} alt="" src="/images/frame.png" />
            </div>
            <p className="self-stretch relative text-base font-poppins inline-block h-[79px] shrink-0">We will connect you with artists best suited to meet your needs, and negotiate purchase prices for you that will stick to your budget.</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[22px] text-3xl">
          <Image className="w-[113.1px] relative h-[84.6px] object-cover" width={113} height={84.6} alt="" src="/images/03.png" />
          <div className="w-[400px] flex flex-col items-start justify-start">
            <div className="w-[253px] relative h-[107px]">
              <h3 className="secondary-font font-bold absolute top-[0px] left-[42px] leading-[107px]">Installation</h3>
              <Image className="absolute top-[41.12px] left-[0px] w-[30.3px] h-[30.4px] object-cover" width={30} height={30} alt="" src="/images/installation.png" />
            </div>
            <p className="self-stretch relative text-base font-poppins inline-block h-[99px] shrink-0">Our team will configure all the pieces in your space after your final approval, including identifying art labels and desired light fixtures.</p>
          </div>
        </div>
      </div>
    </div>);
};


