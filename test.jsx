// components/MarketplaceCarousel.js
'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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
  // Add more slides as needed
]

export const MarketPlace = () => {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="flex w-full overflow-hidden bg-white">
      {/* Left Text Section */}
      <div className="w-1/3 bg-black text-white p-10 rounded-br-[100px]">
        <h2 className="text-3xl font-bold mb-4 border-b border-dashed inline-block pb-2">
          23LD MARKETPLACE
        </h2>
        <p className="text-sm mt-6 leading-6">
          Find your next work of art or design piece and connect with the community of 23LD buyers and sellers.
        </p>
      </div>

      {/* Right Carousel Section */}
      <div className="relative w-2/3 pl-10 overflow-hidden">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 z-10"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 z-10"
        >
          <FaChevronRight />
        </button>

        {/* Slides */}
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full relative rounded-[30px] overflow-hidden"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={500}
                height={300}
                className="z-0"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
                <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                <p className="mb-4">{slide.description}</p>
                <button className="bg-white text-black px-4 py-2 rounded">
                  {slide.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
