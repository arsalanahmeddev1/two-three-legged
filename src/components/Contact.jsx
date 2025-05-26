import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoCall, MdOutlineMailOutline } from "@/constants/icons";
import Input from './ui/Input';
import { contactInputs } from '@/constants/data';
import CustomSelect from './ui/Select';
import Textarea from './ui/Textarea';
import { Button } from './ui/button';
const renderField = (field) => {
  if (["text", "email", "phone", "number", "password"].includes(field.type)) {
    return (
      <Input
        key={field.name}
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        variant={field.variant}
        className={field.className}
      />
    );
  }

  // Handle select
  if (field.type === "select") {
    return (
      <CustomSelect
        key={field.name}
        name={field.name}
        options={field.options}
        className={field.className}
      />
    );
  }

  // Handle textarea if you uncomment Textarea import
  if (field.type === "textarea") {
    return (
      <Textarea
        key={field.name}
        name={field.name}
        placeholder={field.placeholder}
        className='mt-[10px]'
      />
    );
  }

  return null;
};
export const Contact = () => {
  return (
    <div className='container pb-[80px]'>
      <div className="flex-start">
        <div className="w-1/2">
          <h3 className='secondary-font uppercase mb-[40px] text-[55px] text-[#000]'>Connect with us</h3>
          <div className="flex-start mb-[20px] gap-[10px]">
            <div>
              <Image src="/images/profile-01.png" alt="" width={100} height={100} />
            </div>
            <div className='mt-[15px]'>
              <h4 className='text-[35px] text-[#000]'>Alex Soto</h4>
              <div className="flex-start mb-[5px]">
                <IoCall className='mr-[10px]' />
                <Link href="tel:+5148888888">+5148888888</Link>
              </div>
              <div className="flex-start">
                <MdOutlineMailOutline className='mr-[10px]' />
                <Link href="mailto:alexsoto.23ld@gmail.com">alexsoto.23ld@gmail.com</Link>
              </div>
            </div>
          </div>
          <div className="flex-start mb-[20px] gap-[10px]">
            <div>
              <Image src="/images/profile-01.png" alt="" width={100} height={100} />
            </div>
            <div className='mt-[15px]'>
              <h4 className='text-[35px] text-[#000]'>Devin Pughsley</h4>
              <div className="flex-start mb-[5px]">
                <IoCall className='mr-[10px]' />
                <Link href="tel:205 777 8284">205 777 8284</Link>
              </div>
              <div className="flex-start">
                <MdOutlineMailOutline className='mr-[10px]' />
                <Link href="mailto:devinpughsley.23ld@gmail.com">devinpughsley.23ld@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className='secondary-font uppercase text-[55px] text-[#000]'>Contact Us</h3>
          <form>
            <div className="flex-between flex-wrap">
            {contactInputs.map((field) => renderField(field))}
            <Button className='rounded-[60px] ml-auto text-[16px] font-bold mt-[20px] capitalize' variant="default" size="xl">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

