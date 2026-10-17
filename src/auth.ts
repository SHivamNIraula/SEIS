// src/auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github" // Example provider

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub], // Add more providers (Google, Credentials) here later
  pages: {
    signIn: "/login", // Points to your custom login route group
  },
})