import { Users, BookOpen, Settings, LayoutDashboard, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Student Dashboard', path: '/dashboard/student' },
    { icon: BookOpen, label: 'Faculty Dashboard', path: '/dashboard/faculty' },
    { icon: Settings, label: 'Settings', path: '#' },
  ];

  return (
    <aside className="w-64 bg-surface border-r border-border h-full flex flex-col shadow-sm">
      {/* Brand */}
      <div className="p-4 border-b border-divider">
        <h1 className="text-xl font-bold text-primary-600 flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary-500 text-white flex items-center justify-center font-bold">
            DUK
          </div>
          ERP Portal
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                isActive && item.path !== '#'
                  ? 'bg-primary-50 text-primary-600 font-medium'
                  : 'text-neutral-600 hover:bg-hover hover:text-primary-500'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-divider">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 font-bold">
            JD
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-neutral-900 truncate">John Doe</p>
            <p className="text-xs text-neutral-500 truncate">Administrator</p>
          </div>
        </div>
        <NavLink
          to="/login"
          className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-md border border-border text-neutral-600 hover:text-error hover:bg-red-50 hover:border-red-100 transition-colors text-sm font-medium"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </NavLink>
      </div>
    </aside>
  );
}
