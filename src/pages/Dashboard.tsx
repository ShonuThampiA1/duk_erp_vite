import { ArrowUpRight, Users, BookOpen, GraduationCap, Calendar } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Total Students', value: '4,521', icon: Users, color: 'text-primary-500', bg: 'bg-primary-50', trend: '+12%' },
    { label: 'Active Faculty', value: '312', icon: BookOpen, color: 'text-secondary-500', bg: 'bg-secondary-50', trend: '+2%' },
    { label: 'Programs', value: '48', icon: GraduationCap, color: 'text-tertiary-600', bg: 'bg-tertiary-50', trend: '0%' },
    { label: 'Upcoming Events', value: '14', icon: Calendar, color: 'text-information', bg: 'bg-blue-50', trend: '+5%' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
          <p className="text-neutral-500 text-sm mt-1">Welcome back to the DUK ERP Portal.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-surface border border-border text-neutral-700 rounded-md text-sm font-medium hover:bg-hover transition-colors">
            Export Report
          </button>
          <button className="px-4 py-2 bg-primary-500 text-white rounded-md text-sm font-medium hover:bg-primary-600 transition-colors shadow-sm">
            Add New Record
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card rounded-lg p-6 border border-border shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-neutral-500 text-sm font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold text-neutral-900 mt-2">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-success flex items-center font-medium">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                {stat.trend}
              </span>
              <span className="text-neutral-400 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card rounded-lg border border-border shadow-sm p-6 h-96 flex flex-col">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Enrollment Trends</h3>
            <div className="flex-1 bg-surface border border-dashed border-divider rounded flex items-center justify-center text-neutral-400">
              Chart Placeholder (Uses Primary: #0366B0 and Secondary: #00B394)
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="bg-card rounded-lg border border-border shadow-sm p-6">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-secondary-500"></div>
                  <div>
                    <p className="text-sm text-neutral-800 font-medium">New admission processed</p>
                    <p className="text-xs text-neutral-500 mt-1">2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm text-primary-600 font-medium hover:bg-primary-50 rounded-md transition-colors">
              View All Activity
            </button>
          </div>

          {/* System Status */}
          <div className="bg-card rounded-lg border border-border shadow-sm p-6">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600">Database</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Operational
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-neutral-600">Storage</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500">78%</span>
                  <div className="w-16 h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary-500 w-[78%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
