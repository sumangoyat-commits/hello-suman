"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { greetUser } from "@/app/actions"
import { useActionState } from "react"

export function GreetingForm() {
  const [name, setName] = useState("")
  const [state, formAction] = useActionState(greetUser, null)

  const handleSubmit = (formData: FormData) => {
    formAction(formData)
  }

  return (
    <div className="space-y-6">
      <form action={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Your Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>

      {state && (
        <Card className="mt-6 bg-primary/5">
          <CardContent className="pt-6">
            <p className="text-xl font-medium text-center">{state}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

