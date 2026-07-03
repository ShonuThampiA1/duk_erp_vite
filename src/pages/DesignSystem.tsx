import { PlusIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/20/solid';

export default function DesignSystem() {
  return (
    <div className="space-y-16 max-w-7xl mx-auto pb-16">
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">DUK Design System Reference</h1>
        <p className="mt-2 text-neutral-600">A living style guide of components and tokens based on the 8px grid and brand colors.</p>
      </div>

      {/* Colors */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900 border-b border-border pb-2">1. Brand Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-primary-500 shadow-sm flex items-end p-3">
              <span className="text-white font-mono text-sm">Primary</span>
            </div>
            <div className="grid grid-cols-5 gap-1">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(w => (
                <div key={w} className={`h-8 rounded bg-primary-${w}`} title={`primary-${w}`}></div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-secondary-500 shadow-sm flex items-end p-3">
              <span className="text-white font-mono text-sm">Secondary</span>
            </div>
            <div className="grid grid-cols-5 gap-1">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(w => (
                <div key={w} className={`h-8 rounded bg-secondary-${w}`} title={`secondary-${w}`}></div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-tertiary-500 shadow-sm flex items-end p-3">
              <span className="text-white font-mono text-sm">Tertiary</span>
            </div>
            <div className="grid grid-cols-5 gap-1">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(w => (
                <div key={w} className={`h-8 rounded bg-tertiary-${w}`} title={`tertiary-${w}`}></div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-neutral-500 shadow-sm flex items-end p-3">
              <span className="text-white font-mono text-sm">Neutral</span>
            </div>
            <div className="grid grid-cols-5 gap-1">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(w => (
                <div key={w} className={`h-8 rounded bg-neutral-${w}`} title={`neutral-${w}`}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900 border-b border-border pb-2">2. Buttons</h2>

        <div className="space-y-8 bg-surface border border-border rounded-lg p-8">

          {/* Solid Buttons */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Solid</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Primary</button>
              <button className="rounded-md bg-secondary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600">Secondary</button>
              <button className="rounded-md bg-tertiary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-tertiary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-600">Tertiary</button>
              <button className="rounded-md bg-neutral-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600">Neutral</button>
              <button className="rounded-md bg-error px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error">Danger</button>
            </div>
          </div>

          {/* Outline Buttons */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Outline</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="rounded-md bg-surface px-4 py-2 text-sm font-semibold text-primary-600 shadow-sm ring-1 ring-inset ring-primary-600 hover:bg-primary-50">Primary</button>
              <button className="rounded-md bg-surface px-4 py-2 text-sm font-semibold text-secondary-600 shadow-sm ring-1 ring-inset ring-secondary-600 hover:bg-secondary-50">Secondary</button>
              <button className="rounded-md bg-surface px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-inset ring-border hover:bg-hover">Neutral</button>
            </div>
          </div>

          {/* Soft / Ghost Buttons */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Soft / Ghost</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="rounded-md px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-primary-50">Primary</button>
              <button className="rounded-md px-4 py-2 text-sm font-semibold text-secondary-600 hover:bg-secondary-50">Secondary</button>
              <button className="rounded-md px-4 py-2 text-sm font-semibold text-neutral-600 hover:bg-hover">Neutral</button>
            </div>
          </div>

          {/* Pill Buttons */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Pill (Rounded Full)</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Primary</button>
              <button className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-inset ring-border hover:bg-hover">Neutral</button>
            </div>
          </div>

          {/* Icons in Buttons */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider">With Icons</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="inline-flex items-center gap-x-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">
                <PlusIcon className="-ml-0.5 size-5" aria-hidden="true" />
                New Item
              </button>
              <button className="inline-flex items-center gap-x-2 rounded-md bg-surface px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-inset ring-border hover:bg-hover">
                Next Step
                <ArrowRightIcon className="-mr-0.5 size-5 text-neutral-400" aria-hidden="true" />
              </button>
              <button className="inline-flex items-center gap-x-2 rounded-md px-4 py-2 text-sm font-semibold text-secondary-600 hover:bg-secondary-50">
                <CheckCircleIcon className="-ml-0.5 size-5" aria-hidden="true" />
                Mark Complete
              </button>
              <button className="rounded-full bg-primary-600 p-2 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                <PlusIcon className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Sizes</h3>
            <div className="flex flex-wrap gap-4 items-end">
              <button className="rounded bg-primary-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-primary-500">xs (p-2 py-1)</button>
              <button className="rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">sm (px-3 py-1.5)</button>
              <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">md (px-4 py-2)</button>
              <button className="rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500">lg (px-6 py-3)</button>
            </div>
          </div>

        </div>
      </section>

      {/* Badges / Labels */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900 border-b border-border pb-2">3. Badges & Labels</h2>
        <div className="bg-surface border border-border rounded-lg p-8 flex flex-wrap gap-4 items-center">
          <span className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10">Badge Primary</span>
          <span className="inline-flex items-center rounded-md bg-secondary-50 px-2 py-1 text-xs font-medium text-secondary-700 ring-1 ring-inset ring-secondary-700/10">Badge Secondary</span>
          <span className="inline-flex items-center rounded-md bg-tertiary-50 px-2 py-1 text-xs font-medium text-tertiary-700 ring-1 ring-inset ring-tertiary-700/10">Badge Tertiary</span>
          <span className="inline-flex items-center rounded-md bg-neutral-50 px-2 py-1 text-xs font-medium text-neutral-600 ring-1 ring-inset ring-neutral-500/10">Badge Neutral</span>
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Badge Error</span>
          <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Badge Warning</span>
          <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10">Pill Primary</span>
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900 border-b border-border pb-2">4. Typography</h2>
        <div className="bg-surface border border-border rounded-lg p-8 space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900">Heading 1 (text-4xl)</h1>
            <p className="text-sm text-neutral-500 mt-1">Used for main page titles and hero sections.</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Heading 2 (text-3xl)</h2>
            <p className="text-sm text-neutral-500 mt-1">Used for major section headers.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-neutral-900">Heading 3 (text-2xl)</h3>
            <p className="text-sm text-neutral-500 mt-1">Used for sub-sections and cards.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-neutral-900">Heading 4 (text-xl)</h4>
          </div>
          <div>
            <h5 className="text-lg font-bold text-neutral-900">Heading 5 (text-lg)</h5>
          </div>
          <div>
            <p className="text-base text-neutral-900">Body Base (text-base). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <p className="text-sm text-neutral-600">Body Small (text-sm). Used for secondary text, descriptions, and metadata.</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500">Body Extra Small (text-xs). Used for very minor hints or compact layouts.</p>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-neutral-900 border-b border-border pb-2">5. Form Elements</h2>
        <div className="bg-surface border border-border rounded-lg p-8 max-w-xl space-y-6">

          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-neutral-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
              />
            </div>
            <p className="mt-2 text-sm text-neutral-500">We'll only use this for spam.</p>
          </div>

          <div>
            <label htmlFor="role" className="block text-sm/6 font-medium text-neutral-900">
              Select Role
            </label>
            <div className="mt-2 grid grid-cols-1">
              <select
                id="role"
                name="role"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
              >
                <option>Student</option>
                <option>Faculty</option>
                <option>Staff</option>
              </select>
              <svg
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-neutral-500 sm:size-4"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-6 shrink-0 items-center">
              <div className="group grid size-4 grid-cols-1">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  defaultChecked
                  className="col-start-1 row-start-1 appearance-none rounded border border-border bg-white checked:border-primary-600 checked:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                />
                <svg
                  fill="none"
                  viewBox="0 0 14 14"
                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-neutral-950/25"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-has-[:checked]:opacity-100"
                  />
                </svg>
              </div>
            </div>
            <label htmlFor="remember-me" className="text-sm/6 text-neutral-900">
              I agree to the terms and conditions
            </label>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              defaultChecked
              id="push-everything"
              name="push-notifications"
              type="radio"
              className="relative size-4 appearance-none rounded-full border border-border bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-primary-600 checked:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
            />
            <label
              htmlFor="push-everything"
              className="block text-sm/6 font-medium text-neutral-900"
            >
              Option 1
            </label>
          </div>

        </div>
      </section>

    </div>
  );
}
