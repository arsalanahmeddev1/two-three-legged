"use client";
import Image from "next/image";
import Input from "./ui/Input";
import { FiSearch } from "@/constants/icons";
import CustomSelect from "./ui/Select";
// import { selects } from "@/constants/data";

const optionSize = [
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'small', label: 'Small' },
];
const optionPrice = [
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'small', label: 'Small' },
];
const optionLocation = [
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'small', label: 'Small' },
];
const optionArt = [
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'small', label: 'Small' },
];

export const FilterProfiles = () => {
  const handleSelection = (option) => {
    console.log('Selected:', option);
  };
  return (
    <div className="filter-profile-sec pb-[35px]">
      <div className="container">
        <div className="bg-[#EEEEEE] p-[80px] rounded-[35px]">
          <h2 className="sec-title secondary-font pb-[20px]">Filter Artist Profiles</h2>
          <form action="">
            <div className="flex-center gap-[20px]">
              <Input
                type="text"
                placeholder="Search"
                variant="form"
                icon={<FiSearch className="text-gray-500" />}
                iconPosition="left"
                className="w-full"
              />
              <CustomSelect options={optionSize} placeholder="Select Size" onChange={handleSelection} className="w-1/2" />
              <CustomSelect options={optionPrice} placeholder="Select Price" onChange={handleSelection} className="w-1/2" />
              <CustomSelect options={optionLocation} placeholder="Select Location" onChange={handleSelection} className="w-1/2" />
              <CustomSelect options={optionArt} placeholder="Select Art Style" onChange={handleSelection} className="w-1/2" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

