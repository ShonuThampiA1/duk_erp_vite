
import { Users, FileText, CheckSquare, MessageSquare } from 'lucide-react';

export default function FacultyDashboard() {
  const stats = [
    { label: 'Total Students', value: '145', icon: Users, color: 'text-primary-500', bg: 'bg-primary-50' },
    { label: 'Pending Assignments', value: '28', icon: FileText, color: 'text-secondary-500', bg: 'bg-secondary-50' },
    { label: 'Classes Today', value: '4', icon: CheckSquare, color: 'text-tertiary-600', bg: 'bg-tertiary-50' },
    { label: 'Messages', value: '12', icon: MessageSquare, color: 'text-information', bg: 'bg-blue-50' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Faculty Dashboard</h1>
          <p className="text-neutral-500 text-sm mt-1">Manage your courses and students efficiently.</p>
        </div>
        <button className="px-4 py-2 bg-primary-500 text-white rounded-md text-sm font-medium hover:bg-primary-600 transition-colors shadow-sm">
          Create Assignment
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
        {/* Classes To Teach */}
        <div className="bg-card rounded-lg border border-border shadow-sm p-6">
          <h3 className="text-lg font-bold text-neutral-900 mb-6">Today's Classes</h3>
          <div className="space-y-4">
            {[
              { time: '10:00 AM', course: 'Software Engineering', room: 'Hall A', students: 45 },
              { time: '01:00 PM', course: 'Database Systems', room: 'Lab 3', students: 30 },
            ].map((cls, i) => (
              <div key={i} className="flex justify-between items-center p-4 border border-divider rounded-lg hover:bg-hover transition-colors">
                <div>
                  <h4 className="font-bold text-primary-700">{cls.course}</h4>
                  <p className="text-sm text-neutral-500">{cls.time} | {cls.room}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-neutral-600">{cls.students} Students</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-card rounded-lg border border-border shadow-sm p-6">
          <h3 className="text-lg font-bold text-neutral-900 mb-6">Action Items</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-secondary-50 border border-secondary-100 rounded-lg">
               <input type="checkbox" className="mt-1 rounded text-secondary-500 focus:ring-secondary-500" />
               <div>
                 <p className="text-sm font-medium text-neutral-900">Grade Mid-term papers for Database Systems</p>
                 <p className="text-xs text-secondary-600 mt-1">Due today</p>
               </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-neutral-50 border border-divider rounded-lg">
               <input type="checkbox" className="mt-1 rounded text-primary-500 focus:ring-primary-500" />
               <div>
                 <p className="text-sm font-medium text-neutral-900">Approve leave requests for 3 students</p>
                 <p className="text-xs text-neutral-500 mt-1">Due tomorrow</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
