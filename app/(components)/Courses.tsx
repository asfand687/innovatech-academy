import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'


const Courses = () => {
  return (
    <div className="py-8 px-3">
      <h2 className="text-white text-center text-4xl pb-8">Technical Training Courses Diploma Pakistan</h2>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card>
          <Image
            src="/fire-safety-01.jpg"
            alt="Fire Safety"
            width={400}
            height={400}
            className="w-full"
          />
          <CardContent>
            <p>Level 3 Award in Fire Safety awareness.</p>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="/fire-safety-01.jpg"
            alt="Fire Safety"
            width={400}
            height={400}
            className="w-full"
          />
          <CardContent>
            <p>Level 3 Award in Fire Safety awareness.</p>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="/fire-safety-01.jpg"
            alt="Fire Safety"
            width={400}
            height={400}
            className="w-full"
          />
          <CardContent>
            <p>Level 3 Award in Fire Safety awareness.</p>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="/fire-safety-01.jpg"
            alt="Fire Safety"
            width={400}
            height={400}
            className="w-full"
          />
          <CardContent>
            <p>Level 3 Award in Fire Safety awareness.</p>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="/fire-safety-01.jpg"
            alt="Fire Safety"
            width={400}
            height={400}
            className="w-full"
          />
          <CardContent>
            <p>Level 3 Award in Fire Safety awareness.</p>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="/fire-safety-01.jpg"
            alt="Fire Safety"
            width={400}
            height={400}
            className="w-full"
          />
          <CardContent>
            <p>Level 3 Award in Fire Safety awareness.</p>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="/fire-safety-01.jpg"
            alt="Fire Safety"
            width={400}
            height={400}
            className="w-full"
          />
          <CardContent>
            <p>Level 3 Award in Fire Safety awareness.</p>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="/fire-safety-01.jpg"
            alt="Fire Safety"
            width={400}
            height={400}
            className="w-full"
          />
          <CardContent>
            <p>Level 3 Award in Fire Safety awareness.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Courses