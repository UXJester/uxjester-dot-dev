export default function Uses() {
  return (
    <section className="mx-auto max-w-4xl px-4" aria-labelledby="uses-heading">
      <h1 id="uses-heading" className="text-3xl font-bold">
        What I Use
      </h1>
      <div className="mt-4 flex w-full flex-col items-start gap-4">
        <p className="mb-4 text-lg">
          Here’s a glimpse into the tools and technologies I use daily as a
          front-end developer.
        </p>
        <div className="mt-4 flex min-h-[500px] w-full min-w-4xl flex-1 items-center justify-center rounded-lg border-2 border-dashed border-slate-400 bg-slate-50/30">
          <p className="font-large text-2xl text-slate-600">
            🏗️ Is &quot;Under Construction&quot; still a thing? 👷
          </p>
        </div>
      </div>
    </section>
  );
}
