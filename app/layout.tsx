"use client";
import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body><UserProvider>{children}</UserProvider></body>
    </html>
  )
}
