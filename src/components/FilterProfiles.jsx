"use client";
import Image from "next/image";
import Input from "./ui/Input";
import { FiSearch } from "@/constants/icons";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { selects } from "@/constants/data";

export const FilterProfiles = () => {
  return (
    <div className="filter-profile-sec secondary-font">
      <div className="container">
        <div className="bg-[#EEEEEE] p-[80px] rounded-[35px]">
          <h2 className="sec-title">Filter Artist Profiles</h2>
          <form action="">
            <div className="flex-center">
              <Input
                type="text"
                placeholder="Search"
                variant="form"
                icon={<FiSearch className="text-gray-500" />}
                iconPosition="left"
                className="w-full"
              />
              {/* <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

