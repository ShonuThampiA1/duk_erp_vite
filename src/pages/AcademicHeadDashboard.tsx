
import { Building2, Users, GraduationCap, BarChart } from 'lucide-react';

export default function AcademicHeadDashboard() {
  const stats = [
    { label: 'Total Schools', value: '5', icon: Building2, color: 'text-primary-500', bg: 'bg-primary-50' },
    { label: 'Total Enrolled', value: '4,521', icon: Users, color: 'text-secondary-500', bg: 'bg-secondary-50' },
    { label: 'Programs Offered', value: '48', icon: GraduationCap, color: 'text-tertiary-600', bg: 'bg-tertiary-50' },
    { label: 'University Rank', value: '#12', icon: BarChart, color: 'text-information', bg: 'bg-blue-50' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Academic Head Dashboard</h1>
          <p className="text-neutral-500 text-sm mt-1">University-wide academic metrics and planning.</p>
        </div>
        <button className="px-4 py-2 bg-primary-500 text-white rounded-md text-sm font-medium hover:bg-primary-600 transition-colors shadow-sm">
          Strategic Planning
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* School Comparison */}
        <div className="bg-card rounded-lg border border-border shadow-sm p-6">
          <h3 className="text-lg font-bold text-neutral-900 mb-6">School Performance Comparison</h3>
          <div className="space-y-4">
            {[
              { school: 'School of Computer Science', score: 92 },
              { school: 'School of Electronics', score: 88 },
              { school: 'School of Digital Humanities', score: 85 },
              { school: 'School of Digital Sciences', score: 90 },
            ].map((school, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-neutral-700">{school.school}</span>
                  <span className="text-neutral-500">{school.score}%</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${school.score}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-card rounded-lg border border-border shadow-sm p-6">
          <h3 className="text-lg font-bold text-neutral-900 mb-6">University Key Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-surface border border-border rounded-lg text-center">
               <p className="text-sm text-neutral-500 mb-1">Student Satisfaction</p>
               <p className="text-2xl font-bold text-secondary-600">4.2/5</p>
             </div>
             <div className="p-4 bg-surface border border-border rounded-lg text-center">
               <p className="text-sm text-neutral-500 mb-1">Placement Rate</p>
               <p className="text-2xl font-bold text-primary-600">94%</p>
             </div>
             <div className="p-4 bg-surface border border-border rounded-lg text-center">
               <p className="text-sm text-neutral-500 mb-1">Research Papers</p>
               <p className="text-2xl font-bold text-tertiary-700">1,240</p>
             </div>
             <div className="p-4 bg-surface border border-border rounded-lg text-center">
               <p className="text-sm text-neutral-500 mb-1">Global Partners</p>
               <p className="text-2xl font-bold text-information">32</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
