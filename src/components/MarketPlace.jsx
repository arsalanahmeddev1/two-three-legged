'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import { Button } from './ui/button';

const slides = [
  {
    title: 'COLLECT',
    description: 'Explore more than 70,000 works available on the Artprice Marketplace and expand your collection.',
    image: '/images/marketplace-card-01.png',
    button: 'See Ads',
  },
  {
    title: 'SELL',
    description: 'Join our seller network and reach art buyers around the globe.',
    image: '/images/marketplace-card-01.png',
    button: 'Start Selling',
  },
  {
    title: 'SELL',
    description: 'Join our seller network and reach art buyers around the globe.',
    image: '/images/marketplace-card-01.png',
    button: 'Start Selling',
  },
  {
    title: 'SELL',
    description: 'Join our seller network and reach art buyers around the globe.',
    image: '/images/marketplace-card-01.png',
    button: 'Start Selling',
  },
  {
    title: 'SELL',
    description: 'Join our seller network and reach art buyers around the globe.',
    image: '/images/marketplace-card-01.png',
    button: 'Start Selling',
  },
  // Add more slides as needed
]
export const MarketPlace = () => {
  
  const sliderRef = React.useRef(null)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
    // centerMode: true,
    // centerPadding: '30%',
  }
  return (
    <div className="marketplace-sec mb-[35px] relative beofre:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:max-w-[810px] before:h-full before:bg-black before:rounded-tr-[160px] before:rounded-bl-[100px]">
      <div className="flex w-full overflow-hidden bg-white">
        {/* Left Text Section */}
        <div className="text-white pt-[70px] pb-[443px] pl-[40px] relative ">
          <h2 className="text-3xl inline-block pb-[10px] uppercase text-[55px] font-bold secondary-font">
            23LD MARKETPLACE
          </h2>
          <p className="text-sm leading-6 max-w-[329px]">
            Find your next work of art or design piece and connect with the community of 23LD buyers and sellers.
          </p>
        </div>
        <div className="relative mt-[229px] w-2/3">
          {/* Custom Arrows */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute right-0 left-[-100px] mx-auto w-[40px] h-[40px] flex items-center justify-center top-[-80px] border-2 border-black  text-white rounded-full p-2 z-10 hover:bg-black group"
          >
          <FaChevronLeft  className='text-black group-hover:text-white'/>
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-0 left-0 mx-auto w-[40px] h-[40px] flex items-center justify-center top-[-80px] border-2 border-black  text-white rounded-full p-2 z-10 hover:bg-black group"
          >
          <FaChevronRight  className='text-black group-hover:text-white'/>
          </button>

          {/* Slick Slider */}
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="relative h-[400px] rounded-[30px] overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
                  <h3 className="text-3xl font-bold mb-4 secondary-font text-[55px]">{slide.title}</h3>
                  <p className="mb-4 text-[20px]">{slide.description}</p>
                  {/* <button className="bg-white text-black px-4 py-2 rounded">
                  </button> */}
                  <Button className='bg-white text-black px-[45px] py-[25px] rounded text-[16px]'>
                    {slide.button}
                  </Button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default MarketPlace
