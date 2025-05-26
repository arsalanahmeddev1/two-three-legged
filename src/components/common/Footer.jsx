import Image from "next/image"
import Link from "next/link"
import logo from '@/assets/images/logo-light.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, IoCall, MdOutlineMailOutline } from "@/constants/icons";
import Input from "../ui/Input";
import { Button } from "../ui/button";
export const Footer = () => {
  return (
    <footer className="bg-[#000] pt-[65px] pb-[170px]">
      <div className="container">
        <ul className="flex-between max-w-[790px] mx-auto">
          <li><Link href="/" className="text-white text-[22px] ">Market Place</Link></li>
          <li><Link href="/" className="text-white text-[22px] ">Community Partners</Link></li>
          <li><Link href="/" className="text-white text-[22px] ">About us</Link></li>
          <li><Link href="/" className="text-white text-[22px] ">Work with Us</Link></li>
        </ul>
        <div className="border-b border-white w-full max-w-[1050px] mx-auto mt-[45px] mb-[170px]"></div>
        <div className="flex justify-between">
          <div>
            <div className="logo">
              <Image
                src={logo}
                alt="logo"
                className="mb-[20px]"
              />
            </div>
            <p className="text-white text-[22px] mb-[30px]">Join us and get 10% off your first order!</p>
            <p className="text-white text-[22px] mb-[20px] max-w-[410px]">Stay inspired with fresh artwork and curated collections added weekly.</p>
            <ul className="flex-start gap-[10px]">
              <li><Link href="/" className="text-white text-[22px] "><FaFacebookF /></Link></li>
              <li><Link href="/" className="text-white text-[22px] "><FaInstagram /></Link></li>
              <li><Link href="/" className="text-white text-[22px] "><FaLinkedinIn /></Link></li>
            </ul>
          </div>
          <div>
            <ul className="footer-links">
              <li className="text-white text-[22px] mb-[20px] font-bold">For Art Collectors</li>
              <li className="mb-[10px]"><Link href="/" className="text-white text-[22px] ">Artists</Link></li>
              <li className="mb-[10px]"><Link href="/" className="text-white text-[22px] ">Shop</Link></li>
              <li className="mb-[10px]"><Link href="/" className="text-white text-[22px] ">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <ul className="footer-links">
              <li className="text-white text-[22px] mb-[20px] font-bold">For Artists</li>
              <li className="mb-[10px]"><Link href="/" className="text-white text-[22px] ">Private Workshops</Link></li>
              <li className="mb-[10px]"><Link href="/" className="text-white text-[22px] ">Our Quiz</Link></li>
              <li className="mb-[10px]"><Link href="/" className="text-white text-[22px] ">Our Team</Link></li>
            </ul>
          </div>
          <div>
            <ul className="footer-links">
              <li className="text-white text-[22px] mb-[20px] font-bold">Contact Us</li>
              <li className="mb-[10px]"><Link href="tel:9548500145" className="text-white text-[22px] flex-start gap-[10px]"> <IoCall /> 954 850 0145</Link></li>
              <li className="mb-[10px]"><Link href="tel:2057778284" className="text-white text-[22px] flex-start gap-[10px]"> <IoCall /> 205 777 8284</Link></li>
              <li className="mb-[10px]"><Link href="mailto:alexsoto.23ld@gmail.com" className="text-white text-[22px] flex-start gap-[10px]"> <MdOutlineMailOutline /> alexsoto.23ld@gmail.com</Link></li>
              <li className="mb-[10px]"><Link href="mailto:devinpughsley.23ld@gmail.com" className="text-white text-[22px] flex-start gap-[10px]"> <MdOutlineMailOutline /> devinpughsley.23ld@gmail.com</Link></li>
            </ul>
            <form action="">
              <div className="flex-center mt-[40px]">
                <Input
                  type="text"
                  placeholder="Email"
                  variant="contactFooter"
                  className="w-full text-white placeholder:text-white"
                />
                <Button variant="primary" className="w-full  text-[#000] bg-white max-w-[100px] text-[16px] py-[26px] px-[60px] border border-white">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}