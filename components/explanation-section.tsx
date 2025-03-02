import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExplanationSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>How It Works</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="server-actions">
            <AccordionTrigger>Server Actions</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                Server Actions are asynchronous functions that run on the server. In this app, we use a Server Action to
                process the form input and return a greeting message. [^1]
              </p>
              <p className="mb-2">
                The Server Action is defined in <code>app/actions.ts</code> with the <code>'use server'</code> directive
                at the top of the file, marking all exports as Server Actions. [^1]
              </p>
              <p>
                Next.js 15 enhances security for Server Actions by creating unguessable, non-deterministic IDs and
                implementing dead code elimination for unused actions. [^3]
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shadcn-ui">
            <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">This app uses several Shadcn UI components:</p>
              <ul className="list-disc pl-6 space-y-1 mb-2">
                <li>
                  <code>Card</code> - For containing content in visually distinct sections
                </li>
                <li>
                  <code>Button</code> - For the submit action
                </li>
                <li>
                  <code>Input</code> - For the name entry field
                </li>
                <li>
                  <code>Accordion</code> - For this collapsible explanation section
                </li>
              </ul>
              <p>
                Shadcn UI provides accessible, customizable components built on Radix UI primitives and styled with
                Tailwind CSS.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="nextjs-features">
            <AccordionTrigger>Next.js 15.1 Features</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">This app demonstrates several key Next.js 15.1 features:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Server Actions</strong> - For processing form data on the server without creating API routes
                  [^1]
                </li>
                <li>
                  <strong>React 19 Support</strong> - Using the new <code>useActionState</code> hook for handling form
                  state [^3]
                </li>
                <li>
                  <strong>App Router</strong> - Using the modern file-based routing system
                </li>
                <li>
                  <strong>TypeScript Support</strong> - For type safety throughout the application
                </li>
                <li>
                  <strong>Client and Server Components</strong> - Mixing client components for interactivity with server
                  components for performance
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="form-handling">
            <AccordionTrigger>Form Handling</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">This app demonstrates two ways to handle forms in Next.js 15.1:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>
                  Using the <code>useActionState</code> hook from React 19 to manage form state and submission
                </li>
                <li>
                  Directly passing the Server Action to the form's <code>action</code> attribute (an alternative
                  approach)
                </li>
              </ol>
              <p className="mt-2">
                Next.js 15 also introduces a new <code>&lt;Form&gt;</code> component that extends HTML forms with
                prefetching and client-side navigation, which could be used as an alternative approach. [^3]
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

