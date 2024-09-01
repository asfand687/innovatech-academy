import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from 'next/image'
import { coursesInfo } from '@/data/coursesData'


const Courses = () => {
  return (
    <div className="py-8 px-3">
      <h2 className="text-white text-center text-4xl pb-8">Technical Training Courses Diploma Pakistan</h2>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          coursesInfo.map(item => (
            <Card
              key={item.id}
            >
              <div className="relative">
                <Image
                  src={item.img}
                  alt={item.img}
                  width={400}
                  height={400}
                  className="w-full"
                />
                <ImagePhoneNumber />
              </div>
              <CardContent>
                <p>{item.label}</p>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default Courses

const ImagePhoneNumber = () => (
  <div className="absolute flex items-center gap-4 bottom-0 w-full bg-white p-2">
    <Image
      src="/whatsapp.svg"
      width={52}
      height={52}
      className="w-8"
      alt="Whatsapp"
    />
    <div className="text-xs font-semibold  flex items-center gap-2">
      <p>+92 3438818932</p>
      <p>+92 3005067026</p>
    </div>
  </div>
)