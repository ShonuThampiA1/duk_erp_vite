
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-primary">
      {/* Header */}
      <header className="h-16 bg-surface border-b border-border shadow-sm px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="DUK ERP Portal" className="h-10 w-auto" />
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-neutral-600 hover:text-primary-500 transition-colors font-medium">
            Home
          </Link>
          <Link to="/login" className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md text-sm font-medium transition-colors">
            Login
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
