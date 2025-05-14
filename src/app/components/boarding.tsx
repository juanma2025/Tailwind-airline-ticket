"use client"

import { useEffect, useRef } from "react"

export default function BoardingPass() {
    const qrRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
    if (typeof window !== "undefined" && qrRef.current) {
        import("qrcode").then((QRCode) => {
        QRCode.toCanvas(
            qrRef.current,
            "https://www.gabair.ng",
            {
            width: 100,
            margin: 0,
            color: {
                dark: "#000000",
                light: "#FFFFFF",
            },
            },
            (error: any) => {
            if (error) console.error(error)
            },
        )
        })
    }
    }, [])

    return (
    <div className="boarding-pass">
        <div className="boarding-pass-container">
        {/* Top section */}
        <div className="boarding-pass-top">
            <div className="boarding-pass-red-line"></div>
            <div className="boarding-pass-cities">
            <div className="boarding-pass-city">
                <div className="boarding-pass-city-name">LAGOS</div>
                <div className="boarding-pass-city-code">LOS</div>
                <div className="boarding-pass-time">01:45 PM</div>
            </div>

            <div className="boarding-pass-plane-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
                </svg>
            </div>

            <div className="boarding-pass-city">
                <div className="boarding-pass-city-name">ABUJA</div>
                <div className="boarding-pass-city-code">ABV</div>
                <div className="boarding-pass-time">02:45 PM</div>
            </div>
            </div>

            <div className="boarding-pass-date">27 JULY 2016</div>
        </div>

        {/* Bottom section */}
        <div className="boarding-pass-bottom">
            <div className="boarding-pass-passenger">
            <div>
                <div className="boarding-pass-label">NAME</div>
                <div className="boarding-pass-value">MR ESU G</div>
            </div>
            <div className="boarding-pass-qr">
                <canvas ref={qrRef}></canvas>
            </div>
            </div>

                <div className="boarding-pass-flight-info">
            <div>
                <div className="boarding-pass-label">FLIGHT</div>
                <div className="boarding-pass-value">AR124</div>
            </div>
            <div className="text-right">
                <div className="boarding-pass-label">BOOKING REF</div>
                <div className="boarding-pass-value">7ABC123</div>
            </div>
            </div>

            <div className="boarding-pass-boarding-info">
            <div>
                <div className="boarding-pass-label">BOARDING</div>
                <div className="boarding-pass-value">MMIA</div>
            </div>
            <div>
                <div className="boarding-pass-label">GATE</div>
                <div className="boarding-pass-value">3</div>
            </div>
            <div className="text-right">
                <div className="boarding-pass-label">TIME</div>
                <div className="boarding-pass-value">01:05 PM</div>
            </div>
            </div>

            <div className="boarding-pass-footer">
            <div className="boarding-pass-airline">
                <div className="boarding-pass-airline-logo">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="black" />
                    <path
                    d="M18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12Z"
                    fill="white"
                    />
                    <path d="M12 6L16 12H8L12 6Z" fill="black" />
                </svg>
                </div>
                <div className="boarding-pass-airline-website">www.gabair.ng</div>
            </div>

            <div className="boarding-pass-seat">
                <div className="boarding-pass-seat-number">12B</div>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}
