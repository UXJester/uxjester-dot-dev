export default function Uses() {
  return (
    <section className="mx-auto max-w-4xl px-4" aria-labelledby="uses-heading">
      <h2 id="uses-heading" className="text-3xl font-bold">
        What I Use
      </h2>
      <div className="mt-6 max-w-4xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <p className="w-full text-lg">
            This is my always‑evolving list of the tools I reach for every day —
            the hardware on my desk, the apps in my dock, and the little
            workflow helpers that keep my days smooth, creative, and just a bit
            playful.
          </p>
          <div className="hidden w-full overflow-hidden rounded-lg bg-[url('/images/icons.png')] bg-cover bg-center bg-no-repeat opacity-50 sm:block"></div>
        </div>
      </div>

      <div className="space-y-12">
        <div className="space-y-6">
          <h3 className="flex items-center justify-center gap-3 text-2xl font-semibold text-gray-900 sm:justify-start">
            <span>💻</span>
            Hardware
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">Primary Machine</h4>
              <p className="text-sm text-gray-600">
                MacBook Pro 16&quot; (M4 Max) — tuned for speed, silence, and
                zero‑compromise front‑end builds.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">Secondary</h4>
              <p className="text-sm text-gray-600">
                Surface Pro 11 Snapdragon X Elite 32GB for travel + coffee shop
                coding.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">Monitors</h4>
              <p className="text-sm text-gray-600">
                Dual 27&quot; 4K displays — more pixels = more possibilities.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">Input Devices</h4>
              <p className="text-sm text-gray-600">
                Keychron K1 Max Mechanical keyboard
                {"{quiet tactile switches(brown)}"} + Logitech MX Master mouse —
                Old as dirt, but still the best.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="flex items-center justify-center gap-3 text-2xl font-semibold text-gray-900 sm:justify-start">
            <span>🧰</span>
            Development & Engineering
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">Editor</h4>
              <p className="text-sm text-gray-600">
                VS Code (with carefully curated extensions and settings — yes,
                I&apos;m that picky).
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">
                Languages & Frameworks
              </h4>
              <p className="text-sm text-gray-600">
                TypeScript, React, Next.js, Tailwind CSS, JS, HTML, CSS — You
                get the idea.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">Hosting & Deploy</h4>
              <p className="text-sm text-gray-600">
                Vercel, Netlify, Azure for quick, global shipping.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">
                  Tooling (Windows)
                </h4>
                <p className="text-sm text-gray-600">
                  PowerShell and Starship for Terminal, Volta for Node.js, npm
                  || pnpm || yarn, ESLint, Prettier, GitHub Actions, Postman,
                  Swagger.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">Tooling (macOS)</h4>
                <p className="text-sm text-gray-600">
                  Zsh and Oh My Zsh for Terminal, NVM for Node.js, npm || pnpm
                  || yarn, ESLint, Prettier, GitHub Actions, Postman, Swagger.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">Design & UI</h4>
              <p className="text-sm text-gray-600">
                Figma for fast iteration; Affinity Tools for the occasional
                custom asset.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="flex items-center justify-center gap-3 text-2xl font-semibold text-gray-900 sm:justify-start">
            <span>📂</span>
            Productivity & Workflow
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">Task & Notes</h4>
              <p className="text-sm text-gray-600">
                Obsidian for connected thinking; Notion for team collaboration.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">Communication</h4>
              <p className="text-sm text-gray-600">
                Teams, Slack, Zoom, Google — optimized with custom shortcuts.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">Focus Helpers</h4>
              <p className="text-sm text-gray-600">
                Pomofocus, noise‑canceling playlists, and strategically timed
                coffee breaks.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="flex items-center justify-center gap-3 text-2xl font-semibold text-gray-900 sm:justify-start">
            <span>🎨</span>
            Personal Flair
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="relative z-10">
                <h4 className="font-semibold text-gray-900">
                  Branding Elements
                </h4>
                <p className="text-sm text-gray-600">
                  Playful iconography (yes, including the jester hat and the
                  rubber duck).
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">CSS Sandbox</h4>
              <p className="text-sm text-gray-600">
                Local playground for trying out new CSS specs before they hit
                production.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h4 className="font-semibold text-gray-900">Tinkering Time</h4>
              <p className="text-sm text-gray-600">
                Motorcycle maintenance tools and shop notebook for hands‑on
                creative resets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
