// src/features/auth/components/LoginForm.tsx
"use client"
import { signIn } from "next-auth/react"

export function LoginForm() {
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => signIn("github", { callbackUrl: "/learn" })}
        className="w-full py-3 px-4 bg-black text-white font-medium rounded-xl hover:bg-slate-800 transition"
      >
        Sign in with GitHub
      </button>
    </div>
  )
}