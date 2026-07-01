import { Users, BookOpen, Settings, LayoutDashboard } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Users, label: 'Students' },
    { icon: BookOpen, label: 'Faculty' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-surface border-r border-border h-full flex flex-col shadow-sm">
      <div className="p-4 border-b border-divider">
        <h1 className="text-xl font-bold text-primary-600 flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary-500 text-white flex items-center justify-center font-bold">
            DUK
          </div>
          ERP Portal
        </h1>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
              item.active 
                ? 'bg-primary-50 text-primary-600 font-medium' 
                : 'text-neutral-600 hover:bg-hover hover:text-primary-500'
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-divider">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 font-bold">
            JD
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900">John Doe</p>
            <p className="text-xs text-neutral-500">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
