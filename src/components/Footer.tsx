export default function Footer() {
  return (
    <footer className="py-3 bg-primary-500 border-t dark:bg-gray-950 dark:border-neutral-900 dark:text-neutral-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-4">
          {/* Left Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0 w-32 md:w-48">
            <a
              href="https://duk.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              title="Digital University Kerala"
            >
              <div className="rounded-xl bg-white p-2 w-full flex justify-center">
                <img
                  src="/logo.png"
                  alt="Digital University Kerala"
                  className="h-8 md:h-12 w-auto"
                />
              </div>
            </a>
          </div>

          {/* Center Text */}
          <div className="flex-1 text-center px-4 mb-4 md:mb-0">
            <p className="mb-2 text-sm text-neutral-100 dark:text-neutral-300">
              Designed, Developed, and Implemented by{" "}
              <a
                href="https://duk.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-100 hover:underline dark:text-neutral-300"
              >
                Centre for Digital Innovation and Product Development (CDIPD)
              </a>
            </p>
            <p className="text-xs text-neutral-100 dark:text-neutral-300">
              A Centre of Excellence Established by{" "}
              <a
                href="https://duk.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-100 hover:underline dark:text-neutral-300"
              >
                Digital University Kerala
              </a>
            </p>
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0 w-32 md:w-48">
            <a
              href="https://duk.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              title="CDIPD"
            >
              <div className="rounded-xl bg-white p-2 w-full flex justify-center">
                <img
                  src="/logo.png"
                  alt="CDIPD"
                  className="h-8 md:h-12 w-auto"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
