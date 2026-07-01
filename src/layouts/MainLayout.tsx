
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-background overflow-hidden text-primary">
      {/* Sidebar */}
      <div className="hidden lg:block h-full">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-background">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="py-4 px-6 bg-surface border-t border-border text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Digital University Kerala ERP</p>
        </footer>
      </div>
    </div>
  );
}
