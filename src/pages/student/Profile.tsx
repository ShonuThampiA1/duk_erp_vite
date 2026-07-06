
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

export default function StudentProfile() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900">Student Profile</h1>
        <p className="text-neutral-500 text-sm mt-1">Manage your personal information and preferences.</p>
      </div>

      <div className="bg-surface border border-border rounded-xl p-8 shadow-sm">
        <form>
          <div className="space-y-12">
            <div className="border-b border-border pb-12">
              <h2 className="text-base/7 font-semibold text-neutral-900">Public Profile</h2>
              <p className="mt-1 text-sm/6 text-neutral-500">
                This information will be displayed publicly so be careful what you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="username" className="block text-sm/6 font-medium text-neutral-900">
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-border focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary-600">
                      <div className="shrink-0 select-none text-base text-neutral-500 sm:text-sm/6">
                        duk.ac.in/u/
                      </div>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="janesmith"
                        defaultValue="student123"
                        className="block min-w-0 grow bg-white py-1.5 pl-1 pr-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm/6 font-medium text-neutral-900">
                    Bio
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                      defaultValue={'Computer Science sophomore passionate about AI and Web Development.'}
                    />
                  </div>
                  <p className="mt-3 text-sm/6 text-neutral-500">Write a few sentences about yourself.</p>
                </div>

                <div className="col-span-full">
                  <label htmlFor="photo" className="block text-sm/6 font-medium text-neutral-900">
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon aria-hidden="true" className="size-12 text-neutral-300" />
                    <button
                      type="button"
                      className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-border hover:bg-neutral-50"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-neutral-900">
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-border px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-neutral-300" />
                      <div className="mt-4 flex text-sm/6 text-neutral-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-transparent font-semibold text-primary-600 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary-600 hover:text-primary-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs/5 text-neutral-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-border pb-12">
              <h2 className="text-base/7 font-semibold text-neutral-900">Personal Information</h2>
              <p className="mt-1 text-sm/6 text-neutral-500">
                Use a permanent address where you can receive official university mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm/6 font-medium text-neutral-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      defaultValue="Jane"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm/6 font-medium text-neutral-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      defaultValue="Smith"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm/6 font-medium text-neutral-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      defaultValue="jane.smith@duk.ac.in"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm/6 font-medium text-neutral-900">
                    Country
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                    >
                      <option>India</option>
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-neutral-500 sm:size-4"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm/6 font-medium text-neutral-900">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      id="street-address"
                      name="street-address"
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm/6 font-medium text-neutral-900">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-sm/6 font-medium text-neutral-900">
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      id="region"
                      name="region"
                      type="text"
                      autoComplete="address-level1"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="block text-sm/6 font-medium text-neutral-900">
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      autoComplete="postal-code"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-12">
              <h2 className="text-base/7 font-semibold text-neutral-900">Notifications</h2>
              <p className="mt-1 text-sm/6 text-neutral-500">
                We'll always let you know about important changes, but you pick what else you want to hear about.
              </p>

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm/6 font-semibold text-neutral-900">By email</legend>
                  <div className="mt-6 space-y-6">
                    <div className="flex gap-3">
                      <div className="flex h-6 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            defaultChecked
                            id="comments"
                            name="comments"
                            type="checkbox"
                            aria-describedby="comments-description"
                            className="col-start-1 row-start-1 appearance-none rounded border border-border bg-white checked:border-primary-600 checked:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
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
                      <div className="text-sm/6">
                        <label htmlFor="comments" className="font-medium text-neutral-900">
                          Announcements
                        </label>
                        <p id="comments-description" className="text-neutral-500">
                          Get notified when a new official announcement is posted.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 border-t border-border pt-6">
            <button type="button" className="text-sm/6 font-semibold text-neutral-900 hover:text-primary-600">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Save Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
