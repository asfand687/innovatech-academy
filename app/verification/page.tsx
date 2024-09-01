"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function VerificationPage() {

  const [rollNumInput, setRollNumInput] = useState("")
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [verificationData, setVerificationData] = useState<Record<string, any>>({})
  function handleSubmit() {

    setVerificationData({})
    const desiredCandidate = candidateData.find(item => item.regNumber === parseInt(rollNumInput))
    if (desiredCandidate) {
      toast.success("Verification Succesfull")
      setVerificationData(prev => ({ ...prev, ...desiredCandidate }))
    } else {
      setVerificationData({})
      toast.error("Verification Failed")
    }
    setIsFormSubmitted(true)
  }
  return (
    <div className="min-h-[calc(100vh-130px)] w-full max-w-7xl mx-auto px-4">
      <h3 className="text-3xl mb-10 text-center font-bold p-4 bg-slate-700">CERTIFICATE VERIFICATION AT INNOVATECH ACADEMY</h3>
      <div>
        <Input
          className="text-black"
          value={rollNumInput}
          onChange={({ target }) => setRollNumInput(target.value)}
          placeholder="Enter Certificate Number"
        />
        <Button
          className="text-black mt-5"
          variant={"outline"}
          onClick={handleSubmit}
        >
          Verify Now
        </Button>
      </div>
      <div className="mt-10">
        {
          (Object.keys(verificationData).length && isFormSubmitted) ? (
            <div>
              <h3 className="bg-gray-400 p-4">Successfull Verification Certificate Number {verificationData.regNumber} is original</h3>
              <Card className="my-10 p-4">
                <ul className="flex flex-col gap-3">
                  <li><span>Registration Number</span>: <span>{verificationData.regNumber}</span></li>
                  <li><span>Roll Number</span>: <span>{verificationData.rollNumber}</span></li>
                  <li><span>Student Name</span>: <span>{verificationData.name}</span></li>
                  <li><span>Father Name</span>: <span>{verificationData.fatherName}</span></li>
                  <li><span>Session</span>: <span>{verificationData.session}</span></li>
                  <li><span>Course</span>: <span>{verificationData.course}</span></li>
                  <li><span>Duration</span>: <span>{verificationData.duration}</span></li>
                  <li><span>Board</span>: <span>{verificationData.board}</span></li>
                  <li><span>Issue Date</span>: <span>{verificationData.issueDate}</span></li>
                </ul>
              </Card>
            </div>
          ) : isFormSubmitted ? (
            <h2>Sorry Invalid Certificate Number</h2>
          ) : null
        }
      </div>
    </div>
  )
}

const candidateData = [
  {
    regNumber: 36015752,
    rollNumber: 212323,
    name: "Bushra Ashraf",
    fatherName: "Muhammad Ashraf",
    session: "Dec 2019 - Dec 2021",
    course: "Information Technology",
    duration: "2 Years",
    board: "IIT Pakistan",
    issueDate: "05-01-2022"
  }
]