import { GreetingForm } from "@/components/greeting-form"
import { ExplanationSection } from "@/components/explanation-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-24 bg-background">
      <div className="w-full max-w-3xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl">Next.js 15.1 Greeting App</CardTitle>
          </CardHeader>
          <CardContent>
            <GreetingForm />
          </CardContent>
        </Card>

        <ExplanationSection />
      </div>
    </main>
  )
}

