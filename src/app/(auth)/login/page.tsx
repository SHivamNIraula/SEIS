// src/app/(auth)/login/page.tsx
import { LoginForm } from "@/features/auth/components/LoginForm"

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-2xl font-bold text-center mb-6 text-slate-800">Log in to your account</h1>
        <LoginForm />
      </div>
    </main>
  )
}