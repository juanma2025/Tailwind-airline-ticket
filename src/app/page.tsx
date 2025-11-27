import BoardingPass from "./components/boarding";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="mx-auto w-full max-w-2xl px-4">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Para la mejor mamà del mundo </h1>
          <p className="mt-2 text-sm text-white/70">Pulsa el botón para ver la carta</p>
        </header>
        <BoardingPass />
      </div>
    </main>
  )
}

