"use client"

import type React from "react"

type Variant = "primary" | "outline"
type Size = "sm" | "md" | "lg"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode
  variant?: Variant
  size?: Size
}

export default function RevealButton({ children = "Pulsa aqui", className, variant = "primary", size = "md", ...props }: Props) {
  const variantClass =
    variant === "outline"
      ? "bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-50"
      : "bg-white/10 text-white border-3 border-white/30 hover:bg-white/20 hover:border-white/50"

  const sizeClass =
    size === "sm" ? "px-3 py-2 text-sm" : size === "lg" ? "px-8 py-4 text-lg" : "px-7 py-3.5 text-base"
  return (
    <button
      type="button"
      {...props}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded- ${variantClass} ${sizeClass} font-semibold shadow-sm backdrop-blur transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40 active:scale-[0.98] ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  )
}
