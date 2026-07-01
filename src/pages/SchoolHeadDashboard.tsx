
import { Briefcase, Users, TrendingUp, AlertCircle } from 'lucide-react';

export default function SchoolHeadDashboard() {
  const stats = [
    { label: 'Total Programs', value: '8', icon: Briefcase, color: 'text-primary-500', bg: 'bg-primary-50' },
    { label: 'Active Faculty', value: '45', icon: Users, color: 'text-secondary-500', bg: 'bg-secondary-50' },
    { label: 'Overall Performance', value: '85%', icon: TrendingUp, color: 'text-tertiary-600', bg: 'bg-tertiary-50' },
    { label: 'Pending Approvals', value: '12', icon: AlertCircle, color: 'text-warning', bg: 'bg-yellow-50' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">School Head Dashboard</h1>
          <p className="text-neutral-500 text-sm mt-1">Overview of school performance and administration.</p>
        </div>
        <button className="px-4 py-2 bg-surface border border-border text-neutral-700 rounded-md text-sm font-medium hover:bg-hover transition-colors shadow-sm">
          Generate Reports
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card rounded-lg p-6 border border-border shadow-sm flex items-center gap-4">
            <div className={`p-4 rounded-lg ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-neutral-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-neutral-900 mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Overview */}
        <div className="lg:col-span-2 bg-card rounded-lg border border-border shadow-sm p-6 min-h-[300px]">
          <h3 className="text-lg font-bold text-neutral-900 mb-6">Program Performance Overview</h3>
          <div className="flex-1 h-64 bg-surface border border-dashed border-divider rounded flex items-center justify-center text-neutral-400">
            Performance Chart Placeholder
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-card rounded-lg border border-border shadow-sm p-6">
          <h3 className="text-lg font-bold text-neutral-900 mb-4">Pending Approvals</h3>
          <div className="space-y-4">
            {[
              { type: 'Curriculum Change', program: 'MSc Computer Science', date: 'Oct 20' },
              { type: 'Faculty Leave Request', program: 'Dr. Smith', date: 'Oct 21' },
              { type: 'Budget Approval', program: 'Lab Equipment', date: 'Oct 22' },
            ].map((approval, i) => (
              <div key={i} className="p-4 rounded-lg border border-border bg-background">
                 <h4 className="font-medium text-sm text-neutral-900">{approval.type}</h4>
                 <p className="text-xs text-neutral-500 mt-1">{approval.program} • {approval.date}</p>
                 <div className="flex gap-2 mt-3">
                   <button className="flex-1 py-1.5 bg-primary-50 text-primary-600 text-xs font-medium rounded hover:bg-primary-100 transition-colors">Review</button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
