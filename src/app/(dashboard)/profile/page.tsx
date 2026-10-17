// src/app/(dashboard)/profile/page.tsx
import { auth } from "@/auth"

export default async function ProfilePage() {
  const session = await auth()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p>Welcome back, {session?.user?.name}!</p>
    </div>
  )
}