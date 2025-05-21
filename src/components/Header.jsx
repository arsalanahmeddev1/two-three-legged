import Image from "next/image";
import { FiSearch, CgProfile, CiHeart } from "@/constants/icons";
import { Button } from "@/components/ui/button"

import logo from '@/assets/images/logo.png'
import { nav } from '@/constants/data';
import Link from "next/link";
import Input from "./ui/Input";
export function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="flex flex-between">
          <div className="logo">
            <Image
              src={logo}
              alt="logo"
              className=""
            />
          </div>
          <nav className="grow max-w-[560px]">
            <ul className="flex-between">
              {nav.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex-between gap-[20px] grow max-w-[572px]">
            <form action="">
              <Input
                type="text"
                placeholder="Search Artist or Artworks"
                variant="search"
                icon={<FiSearch className="text-gray-500" />}
                iconPosition="right"
                className="w-full"
              // value={search}
              // onChange={handleSearch}
              />
              {/* <div className="flex-center"> */}
              {/* </div> */}
            </form>
              <CgProfile className="text-[40px]" />
              <CiHeart className="text-[40px]" />
            <Button variant="default" size="xl">Join Us</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
