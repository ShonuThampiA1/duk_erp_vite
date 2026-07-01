
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Users, Monitor } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
              Transforming Education with Digital Excellence
            </h1>
            <p className="text-lg text-neutral-600 max-w-xl leading-relaxed">
              Experience the next generation of university management. The DUK ERP Portal unifies students, faculty, and administration in one seamless platform.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Link to="/login" className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium transition-colors flex items-center gap-2 shadow-sm">
                Access Portal <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="px-6 py-3 bg-surface border border-border hover:bg-hover text-neutral-700 rounded-md font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md md:max-w-none relative">
            <div className="aspect-[4/3] bg-primary-100 rounded-2xl overflow-hidden shadow-lg border border-primary-200 flex items-center justify-center">
               <div className="text-primary-500 text-center p-8">
                  <Monitor className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="font-semibold text-xl">Modern ERP Interface</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900">Unified Academic Ecosystem</h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              A comprehensive suite of tools designed to streamline operations and enhance the learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary-500">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Student Success</h3>
              <p className="text-neutral-600 leading-relaxed">
                Empower students with self-service portals, real-time progress tracking, and seamless communication.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary-50 rounded-lg flex items-center justify-center mb-6 text-secondary-500">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Faculty Excellence</h3>
              <p className="text-neutral-600 leading-relaxed">
                Provide educators with advanced tools for grading, curriculum management, and student engagement.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-tertiary-50 rounded-lg flex items-center justify-center mb-6 text-tertiary-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Administrative Control</h3>
              <p className="text-neutral-600 leading-relaxed">
                Streamline operations with comprehensive reporting, resource management, and automated workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
