import { useState } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  HomeIcon,
  UsersIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  XMarkIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
  DocumentChartBarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const roleNavigation: Record<string, { name: string; href: string; icon: any }[]> = {
  student: [
    { name: 'Dashboard', href: '/student/dashboard', icon: HomeIcon },
    { name: 'Timetable', href: '/student/timetable', icon: CalendarIcon },
    { name: 'Attendance', href: '/student/attendance', icon: CheckCircleIcon },
    { name: 'Assignments', href: '/student/assignments', icon: ClipboardDocumentCheckIcon },
    { name: 'Fees', href: '/student/fees', icon: CurrencyDollarIcon },
    { name: 'Library', href: '/student/library', icon: BuildingLibraryIcon },
  ],
  faculty: [
    { name: 'Dashboard', href: '/faculty/dashboard', icon: HomeIcon },
    { name: 'Classes', href: '/faculty/classes', icon: UsersIcon },
    { name: 'Attendance', href: '/faculty/attendance', icon: CheckCircleIcon },
    { name: 'Assignments', href: '/faculty/assignments', icon: ClipboardDocumentCheckIcon },
    { name: 'Grading', href: '/faculty/grading', icon: AcademicCapIcon },
  ],
  schoolHead: [
    { name: 'Dashboard', href: '/school-head/dashboard', icon: HomeIcon },
    { name: 'Departments', href: '/school-head/departments', icon: BuildingOfficeIcon },
    { name: 'Faculty Performance', href: '/school-head/faculty-performance', icon: ChartBarIcon },
    { name: 'Reports', href: '/school-head/reports', icon: DocumentChartBarIcon },
  ],
  academicHead: [
    { name: 'Dashboard', href: '/academic-head/dashboard', icon: HomeIcon },
    { name: 'Schools', href: '/academic-head/schools', icon: BuildingOfficeIcon },
    { name: 'Analytics', href: '/academic-head/analytics', icon: ChartBarIcon },
    { name: 'Policies', href: '/academic-head/policies', icon: ShieldCheckIcon },
  ],
}

const teams = [
  { id: 1, name: 'Research Group Alpha', href: '#', initial: 'R' },
  { id: 2, name: 'Curriculum Committee', href: '#', initial: 'C' },
  { id: 3, name: 'Student Council', href: '#', initial: 'S' },
]
const userNavigation = [
  { name: 'Your profile', href: '/student/profile' },
  { name: 'Sign out', href: '/login' },
]

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MainLayout({ role = 'student' }: { role?: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true)
  const location = useLocation()

  const navigation = roleNavigation[role] || roleNavigation.student;

  return (
    <>
      <div className="bg-background text-primary min-h-screen">
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-neutral-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>

              {/* Mobile Sidebar */}
              <div className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-surface px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center mt-4">
                <Link to={`/${role}/dashboard`} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary-500 text-white flex items-center justify-center font-bold">
                            DUK
                        </div>
                        <span className="text-xl font-bold text-primary-600">ERP Portal</span>
                    </Link>
                </div>
                <nav className="relative flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => {
                          const isCurrent = location.pathname === item.href
                          return (
                            <li key={item.name}>
                              <NavLink
                                to={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={classNames(
                                  isCurrent
                                    ? 'bg-primary-50 text-primary-600'
                                    : 'text-neutral-700 hover:bg-hover hover:text-primary-600',
                                  'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold transition-colors',
                                )}
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className={classNames(
                                    isCurrent
                                      ? 'text-primary-600'
                                      : 'text-neutral-400 group-hover:text-primary-600',
                                    'size-6 shrink-0 transition-colors',
                                  )}
                                />
                                {item.name}
                              </NavLink>
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs/6 font-semibold text-neutral-500">Your teams</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.id === 1
                                  ? 'bg-primary-50 text-primary-600'
                                  : 'text-neutral-700 hover:bg-hover hover:text-primary-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold transition-colors',
                              )}
                            >
                              <span
                                className={classNames(
                                  team.id === 1
                                    ? 'border-primary-600 text-primary-600'
                                    : 'border-border text-neutral-400 group-hover:border-primary-600 group-hover:text-primary-600',
                                  'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-surface text-[0.625rem] font-medium transition-colors',
                                )}
                              >
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-neutral-700 hover:bg-hover hover:text-primary-600 transition-colors"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="size-6 shrink-0 text-neutral-400 group-hover:text-primary-600 transition-colors"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col transition-all duration-300 ${isDesktopSidebarOpen ? 'lg:w-72' : 'lg:w-20'}`}>
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-surface px-6 pb-4 overflow-x-hidden">
            <div className={`flex h-16 shrink-0 items-center mt-4 mb-2 ${!isDesktopSidebarOpen && 'justify-center'}`}>
                 <Link to={`/${role}/dashboard`} className="flex items-center gap-2">
                    <div className="w-8 h-8 shrink-0 rounded bg-primary-500 text-white flex items-center justify-center font-bold shadow-sm">
                        DUK
                    </div>
                    {isDesktopSidebarOpen && <span className="text-xl font-bold text-primary-600 truncate">ERP Portal</span>}
                </Link>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => {
                       const isCurrent = location.pathname === item.href
                       return (
                      <li key={item.name}>
                        <NavLink
                          to={item.href}
                          className={classNames(
                            isCurrent
                              ? 'bg-primary-50 text-primary-600'
                              : 'text-neutral-600 hover:bg-hover hover:text-primary-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold transition-colors',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              isCurrent
                                ? 'text-primary-600'
                                : 'text-neutral-400 group-hover:text-primary-600',
                              'size-6 shrink-0 transition-colors',
                            )}
                          />
                          {isDesktopSidebarOpen && <span className="truncate">{item.name}</span>}
                        </NavLink>
                      </li>
                    )})}
                  </ul>
                </li>
                {isDesktopSidebarOpen && (
                  <li>
                    <div className="text-xs/6 font-semibold text-neutral-500">Your teams</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                      {teams.map((team) => (
                        <li key={team.name}>
                          <a
                            href={team.href}
                            className={classNames(
                              team.id === 1
                                ? 'bg-primary-50 text-primary-600'
                                : 'text-neutral-600 hover:bg-hover hover:text-primary-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold transition-colors',
                            )}
                          >
                            <span
                              className={classNames(
                                team.id === 1
                                  ? 'border-primary-600 text-primary-600'
                                  : 'border-border text-neutral-400 group-hover:border-primary-600 group-hover:text-primary-600',
                                'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-surface text-[0.625rem] font-medium transition-colors',
                              )}
                            >
                              {team.initial}
                            </span>
                            <span className="truncate">{team.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-neutral-600 hover:bg-hover hover:text-primary-600 transition-colors"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-neutral-400 group-hover:text-primary-600 transition-colors"
                    />
                    {isDesktopSidebarOpen && <span className="truncate">Settings</span>}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={`flex flex-col h-screen transition-all duration-300 ${isDesktopSidebarOpen ? 'lg:pl-72' : 'lg:pl-20'}`}>
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-surface px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-neutral-600 hover:text-neutral-900 lg:hidden"
            >
              <span className="sr-only">Open mobile sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            {/* Desktop Sidebar Toggle */}
            <button
              type="button"
              onClick={() => setIsDesktopSidebarOpen(!isDesktopSidebarOpen)}
              className="-m-2.5 p-2.5 text-neutral-600 hover:text-neutral-900 hidden lg:block"
            >
              <span className="sr-only">Toggle desktop sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            {/* Separator */}
            <div aria-hidden="true" className="h-6 w-px bg-divider" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                <input
                  name="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="col-start-1 row-start-1 block size-full bg-surface pl-8 text-base text-primary outline-none placeholder:text-neutral-400 sm:text-sm/6 focus:ring-0"
                />
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-neutral-400"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button type="button" className="-m-2.5 p-2.5 text-neutral-400 hover:text-neutral-500 relative">
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-tertiary-500 rounded-full border border-surface"></span>
                </button>

                {/* Separator */}
                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-divider" />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="relative flex items-center p-1.5 rounded-full hover:bg-hover transition-colors">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                     <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 font-bold border border-border">
                        JD
                    </div>
                    <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-neutral-900">
                        John Doe
                      </span>
                      <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-neutral-400" />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-surface py-2 shadow-lg ring-1 ring-neutral-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <Link
                          to={item.href}
                          className="block px-3 py-1 text-sm/6 text-neutral-900 data-[focus]:bg-hover data-[focus]:text-primary-600"
                        >
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className="flex-1 overflow-y-auto">
            <div className="p-6">
                {/* Breadcrumbs */}
                <nav className="flex mb-4" aria-label="Breadcrumb">
                  <ol role="list" className="flex items-center space-x-2">
                    <li>
                      <div>
                        <Link to="/" className="text-neutral-400 hover:text-neutral-500">
                          <HomeIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                          <span className="sr-only">Home</span>
                        </Link>
                      </div>
                    </li>
                    {location.pathname.split('/').filter(Boolean).map((path, index, array) => {
                      const to = `/${array.slice(0, index + 1).join('/')}`;
                      const isLast = index === array.length - 1;
                      const name = path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' ');
                      return (
                        <li key={to}>
                          <div className="flex items-center">
                            <ChevronRightIcon className="h-5 w-5 shrink-0 text-neutral-400" aria-hidden="true" />
                            {isLast ? (
                              <span className="ml-2 text-sm font-medium text-neutral-700" aria-current="page">
                                {name}
                              </span>
                            ) : (
                              <Link to={to} className="ml-2 text-sm font-medium text-neutral-500 hover:text-neutral-700">
                                {name}
                              </Link>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </nav>

                <Outlet />
            </div>
          </main>

          {/* Footer */}
          <footer className="py-4 px-6 bg-surface border-t border-border text-center text-sm text-neutral-500">
             <p>&copy; {new Date().getFullYear()} Digital University Kerala ERP</p>
          </footer>
        </div>
      </div>
    </>
  )
}
