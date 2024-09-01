import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import CourseRegForm from "../(components)/CourseRegForm";

export default function QualcertLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <section className="w-full max-w-7xl mx-auto px-4 flex">
      <article className="flex-1">
        {children}
      </article>
      <article className="w-[clamp(280px,20vw,320px)] hidden md:flex flex-col gap-10">
        <CourseRegForm/>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-semibold tracking-tight">Updated Courses</h3>
            <Button
              variant="ghost"
              className="w-fit"
            >
              View More
            </Button>
          </div>
          <ul className="flex flex-col gap-4 border-l-2">
            {
              coursesInfo.map(course => (
                <li 
                  key={course.id}
                  className="border-b-2 p-2 last-of-type:border-0"
                >
                  {course.label}
                </li>
              ))
            }
          </ul>
        </div>
      </article>
    </section>
  )
}

const coursesInfo = [
  {
    id: 1,
    label: "Level 3 Award in Fire Safety awareness.",
  },
  {
    id: 2,
    label: "Level 3 Award in Environment for Business.",
  },
  {
    id: 3,
    label: "Level 3 Award in Corporate Risk Essentials.",
  },
  {
    id: 4,
    label: "Level 3 Award in Electrical Technology.",
  },
  {
    id: 5,
    label: "Level 2 Award in Electrical Technology.",
  },
  {
    id: 6,
    label: "Level 3 Award in Civil Technology.",
  },
  {
    id: 7,
    label: "Level 2 Award in Civil Technology.",
  },
  {
    id: 8,
    label: "Award in Construction Site Incident Investigation.",
  },
]