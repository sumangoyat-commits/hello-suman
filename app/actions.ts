"use server"

export async function greetUser(prevState: string | null, formData: FormData): Promise<string> {
  // Simulate a delay to show the server action in action
  await new Promise((resolve) => setTimeout(resolve, 500))

  const name = formData.get("name")

  if (!name || typeof name !== "string" || name.trim() === "") {
    return "Please enter a valid name!"
  }

  return `Hello ${name}!`
}

