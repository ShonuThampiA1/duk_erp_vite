import { Bell, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-surface border-b border-border flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <button className="text-neutral-500 hover:text-primary-500 lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="relative hidden md:block">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm w-64 text-primary"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative text-neutral-500 hover:text-primary-500 transition-colors p-2 rounded-full hover:bg-hover">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-tertiary-500 rounded-full border-2 border-surface"></span>
        </button>
        <div className="h-8 w-px bg-divider mx-2"></div>
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Quick Action
        </button>
      </div>
    </header>
  );
}
