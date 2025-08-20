import Image from "next/image";

export default function Home() {
  return (
    <section className="mx-auto max-w-4xl px-4" aria-labelledby="home-heading">
      <div className="flex w-full flex-col items-start gap-4 md:flex-row">
        <div className="flex w-full flex-col md:w-1/2">
          <h1 id="home-heading" className="text-3xl font-bold">
            Code crafter, throttle junkie, veteran, playground hero
          </h1>
          <p className="mt-2 text-lg">
            I’m Bryan, a front‑end developer who blends clean code with a love
            for open roads and open‑ended questions. My time in the USAF taught
            me precision and grit, and my time as a dad keeps me quick on my
            feet and quicker with the dad jokes. Whether I’m tuning an interface
            or a motorcycle, I’m always chasing that perfect balance of speed,
            style, and substance — with just enough grease under the
            fingernails, and on the keyboard, to prove I’m hands‑on where it
            counts.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-3 md:w-1/2">
          <div className="relative w-full translate-x-3 -translate-y-1 scale-105 rotate-12 overflow-hidden rounded-lg bg-white p-3 pb-6 shadow-md transition-transform hover:z-10 hover:scale-115 hover:rotate-6">
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-50">
              <Image
                src="/images/mil.jpg"
                alt="Placeholder 1"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="relative w-full -translate-x-1 translate-y-2 scale-115 -rotate-6 overflow-hidden rounded-lg bg-white p-3 pb-6 shadow-lg transition-transform hover:z-10 hover:scale-125 hover:-rotate-2">
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-50">
              <Image
                src="/images/bike.jpg"
                alt="Bike"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="relative w-full translate-x-1 -translate-y-2 scale-110 rotate-8 overflow-hidden rounded-lg bg-white p-3 pb-6 shadow-md transition-transform hover:z-10 hover:scale-120 hover:rotate-2">
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-50">
              <Image
                src="/images/love.jpg"
                alt="Placeholder 3"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="relative w-full -translate-x-2 -translate-y-1 scale-108 rotate-4 overflow-hidden rounded-lg bg-white p-3 pb-6 shadow-lg transition-transform hover:z-10 hover:scale-118 hover:-rotate-1">
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-gray-50">
              <Image
                src="/images/Gulley_Horseface.jpg"
                alt="Placeholder 4"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex min-h-[300px] w-full flex-1 items-center justify-center rounded-lg border-2 border-dashed border-slate-400 bg-slate-50/30">
        <p className="text-lg font-medium text-slate-600">
          I&apos;m still deciding what should go here
        </p>
      </div>
    </section>
  );
}
