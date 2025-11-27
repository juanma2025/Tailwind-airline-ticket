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
    <div className="w-full max-w-xl px-4">
        {!showLetter ? (
        <div className="flex flex-col items-center justify-center gap-4">
            <RevealButton onClick={() => setShowLetter(true)} />
        </div>
        ) : (
        <div
            className={`mx-auto rounded-xl bg-white p-6 shadow-lg transition-all duration-500 ease-out sm:p-8 ${
            animateIn ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"
            }`}
        >
            <div className="mb-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-900 sm:text-xl">Carta</h1>
            <button
                type="button"
                onClick={() => setShowLetter(false)}
                className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
                Volver
            </button>
            </div>
            <div className="space-y-4 rounded-lg border border-teal-200 bg-teal-50 p-4">
            <p className="text-teal-900">
                Aquí irá la carta que me pases. El diseño es una tarjeta limpia
                y centrada para lectura cómoda.
            </p>
            <p className="text-teal-900">
                Puedes enviarme el contenido y lo integro manteniendo el estilo,
                añadiendo resaltados o secciones si lo necesitas.
            </p>
            </div>
        </div>
        )}
    </div>
    )
}
