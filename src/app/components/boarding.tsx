"use client"

import { useEffect, useState } from "react"
import RevealButton from "./RevealButton"

export default function BoardingPass() {
    const [showLetter, setShowLetter] = useState(false)
    const [animateIn, setAnimateIn] = useState(false)

    useEffect(() => {
    if (showLetter) {
        requestAnimationFrame(() => setAnimateIn(true))
    } else {
        setAnimateIn(false)
    }
    }, [showLetter])

    return (
    <div className="w-full max-w-xl mx-auto px-4">
        {!showLetter ? (
        <div className="grid place-items-center gap-4 text-center">
          <RevealButton
            variant="primary"
            size="lg"
            onClick={() => setShowLetter(true)}
          />
        </div>
      ) : (
        <div
          className={`mx-auto rounded-xl bg-purple-200 p-6 shadow-lg transition-all duration-500 ease-out sm:p-8 ${
            animateIn ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"
          }`}
        >
          <div className="h-1 w-full rounded-t-lg bg-gradient-to-r from-purple-200 via-purple-400 to-purple-600" />
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-900 sm:text-xl">Mami</h1>
            <RevealButton
              variant="outline"
              size="sm"
              onClick={() => {
                setAnimateIn(false)
                setTimeout(() => setShowLetter(false), 200)
              }}
            >
              Volver
            </RevealButton>
          </div>
          <div className="space-y-4 rounded-lg border border-purple-600 bg-purple-300 p-4">
            <p className="text-teal-900">
              Mami hoy en tu dìa quiero recordarte lo mucho que te amo y lo agradecido que estoy con Dios,
              por darme a la mejor mama del mundo que siempre me ha apoyado y guiado con su amor incondicional
              gracias por ser mi ejemplo a seguir y por enseñarme valores que me han hecho la persona que soy hoy
            </p>
            <p className="text-teal-900">
              te amo demasiado y espero que este día esté lleno de alegría,
              asi como de amor y bendiciones que te acompañen siempre.
            </p>
            <p className="text-teal-900">
              Gracias por todo lo que haces por mí y por nuestra familia.
              Eres una madre increíble y te mereces lo mejor en este día especial y siempre.
              ¡Feliz cumple mamita 🥳🥳🥳!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
