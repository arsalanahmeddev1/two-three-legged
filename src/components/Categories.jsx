import Image from "next/image";
import { categories } from "@/constants/data";
import Link from "next/link";
import { Button } from "./ui/button";
export const Categories = () => {
  return (
    <div className="pb-[65px]">

      <div className="w-full relative flex flex-col items-center justify-center gap-7 text-center text-[55px] text-black font-cinzel">
        <b className="w-[990px] relative leading-[74px] inline-block h-[163.5px] shrink-0 secondary-font">We provide a specialized service to these categories</b>
      </div>

      <div className="flex flex-row  justify-center gap-[26px]">
        {categories.map((category, index) => (
          <div key={index} className="w-[318px] h-[632px] flex flex-col  justify-center gap-px">
            <Image className="w-[318px] relative h-[424px] object-cover mb-[30px]" width={318} height={424} alt="" src={category.img} />
            <h3 className="w-[250px] secondary-font font-bold relative text-2xl leading-[20px] inline-block font-cinzel mb-[30px] shrink-0">{category.title}</h3>
            <div className="w-[195px] relative  inline-block h-[65px] shrink-0">{category.description}</div>
            <Button asChild variant="tertiary" size="lg" className="max-w-[180px]">
              <Link href={category.link}>View More</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};


