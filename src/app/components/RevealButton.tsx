"use client"

import type React from "react"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode
}

export default function RevealButton({ children = "Ver carta", className, ...props }: Props) {
  return (
    <button
      type="button"
      {...props}
      className={`rounded-lg bg-white/10 px-6 py-3 text-white backdrop-blur transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  )
}
