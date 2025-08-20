import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-4" aria-labelledby="about-heading">
      <h2 id="about-heading" className="mb-6 text-3xl font-bold">
        About Me
      </h2>

      <p className="text-lg leading-relaxed">
        <span className="float-left mr-4 mb-2">
          <Image
            src="/images/bryangulley.jpg"
            alt="Portrait of Bryan Gulley in formal attire"
            width={160}
            height={200}
            className="rounded-lg object-cover object-top"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </span>
        Hey — I’m Bryan. I build things for the web, lead with curiosity, and
        believe the best teams are the ones that feel like family. Over the last
        20 years, I’ve gone from surveying runways in the Air Force to
        delivering high‑performance, user‑friendly web apps for organizations
        big and small. Along the way I’ve learned that precision matters, but so
        does laughter in a stand‑up and knowing when to swap curly braces for a
        socket wrench.
      </p>

      <p className="mt-4 text-lg leading-relaxed">
        These days, I split my energy between crafting clean, reliable front‑end
        code (React, Next.js, TypeScript, TailwindCSS — my happy place),
        mentoring developers who are carving their own paths, and teaming up
        with people who care about the work <em>and</em> each other. If there’s
        a tricky layout to tame, a performance issue to squash, or a process we
        can make smoother, I’m in.
      </p>

      <p className="mt-4 text-lg leading-relaxed">
        Outside the code editor, you might catch me riding with the{" "}
        <span aria-label="Combat Veterans Motorcycle Association registered">
          Combat Veterans Motorcycle Association<sup aria-hidden="true">®</sup>
        </span>
        , raising a little noise (and money) for causes that matter, or
        chauffeuring my kids between activities. Whether it’s on two wheels or
        in a design review, I’m here for the ride, the craft, and the community
        that comes with both.
      </p>
    </section>
  );
}
