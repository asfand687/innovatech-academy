import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function CourseRegForm() {
  return(
    <div>
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold text-center">Registration Form</h2>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <Input
                  type="text"
                  placeholder="Name"
                />
                <Input
                  type="text"
                  placeholder="Qualification"
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                />
                <Input
                  type="text"
                  placeholder="City"
                />
                <Input
                  type="text"
                  placeholder="Address"
                />
                <Button variant="default">Submit</Button>
              </div>
            </CardContent>
          </Card>
        </div>
  )
}