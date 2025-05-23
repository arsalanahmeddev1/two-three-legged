import React from 'react'
import Image from 'next/image'
export const Partners = () => {
  return (
    <div className="container pb-[90px]">
      <h3 className='text-center mb-[20px] secondary-font font-bold text-[55px] uppercase text-[#000]'>Partners we've helped</h3>
      <div className="flex flex-between">
        <Image src="/images/partners-01.png" alt="" width={100} height={100} />
        <Image src="/images/partners-02.png" alt="" width={75} height={75} />
        <Image src="/images/partners-03.png" alt="" width={100} height={100} />
        <Image src="/images/partners-04.png" alt="" width={75} height={75} />
        <Image src="/images/partners-05.png" alt="" width={100} height={100} />
        <Image src="/images/partners-06.png" alt="" width={75} height={75} />
      </div>
    </div>
  )
}

