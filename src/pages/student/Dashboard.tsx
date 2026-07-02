
import { BookOpen, Calendar, Clock, Award, ChevronRight } from 'lucide-react';

export default function StudentDashboard() {
  const stats = [
    { label: 'Enrolled Courses', value: '6', icon: BookOpen, color: 'text-white', bg: 'bg-white/20', textClass: 'text-white' },
    { label: 'Upcoming Assignments', value: '3', icon: Calendar, color: 'text-secondary-500', bg: 'bg-secondary-50' },
    { label: 'Attendance', value: '92%', icon: Clock, color: 'text-tertiary-600', bg: 'bg-tertiary-50' },
    { label: 'CGPA', value: '3.8', icon: Award, color: 'text-information', bg: 'bg-blue-50' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Student Dashboard</h1>
          <p className="text-neutral-500 text-sm mt-1">Welcome back! Here's your academic overview.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`rounded-lg p-6 shadow-sm border flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer ${index === 0 ? 'bg-gradient-to-r from-secondary-500 to-tertiary-500 border-transparent text-white' : 'bg-card border-border'}`}>
            <div className={`p-4 rounded-lg ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-8 h-8" />
            </div>
            <div>
              <p className={`text-sm font-medium ${stat.textClass || 'text-neutral-500'}`}>{stat.label}</p>
              <h3 className={`text-2xl font-bold mt-1 ${stat.textClass || 'text-neutral-900'}`}>{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Schedule */}
        <div className="lg:col-span-2 bg-card rounded-lg border border-border shadow-sm p-6">
          <h3 className="text-lg font-bold text-neutral-900 mb-6">Today's Schedule</h3>
          <div className="space-y-4">
            {[
              { time: '09:00 AM', course: 'Advanced Mathematics', room: 'Room 302', type: 'Lecture' },
              { time: '11:30 AM', course: 'Computer Architecture', room: 'Lab 1', type: 'Practical' },
              { time: '02:00 PM', course: 'Data Structures', room: 'Room 105', type: 'Seminar' },
            ].map((schedule, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-hover transition-colors">
                 <div className="min-w-[100px] text-primary-600 font-bold text-sm">
                   {schedule.time}
                 </div>
                 <div className="w-1 h-12 bg-secondary-500 rounded-full hidden sm:block"></div>
                 <div className="flex-1">
                   <h4 className="font-bold text-neutral-900">{schedule.course}</h4>
                   <p className="text-sm text-neutral-500">{schedule.room} • {schedule.type}</p>
                 </div>
                 <ChevronRight className="w-5 h-5 text-neutral-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Announcements */}
          <div className="bg-card rounded-lg border border-border shadow-sm p-6">
             <h3 className="text-lg font-bold text-neutral-900 mb-4">Announcements</h3>
             <div className="space-y-4">
               {[
                 { title: 'Mid-term schedule released', date: 'Oct 12' },
                 { title: 'Campus recruitment drive', date: 'Oct 15' },
               ].map((ann, i) => (
                 <div key={i} className="pb-4 border-b border-divider last:border-0 last:pb-0">
                   <h4 className="font-medium text-sm text-neutral-900">{ann.title}</h4>
                   <p className="text-xs text-neutral-500 mt-1">{ann.date}</p>
                 </div>
               ))}
             </div>
          </div>

          {/* Quick Links */}
          <div className="bg-card rounded-lg border border-border shadow-sm p-6">
             <h3 className="text-lg font-bold text-neutral-900 mb-4">Quick Links</h3>
             <div className="flex flex-wrap gap-2">
               {['Library', 'Hostel', 'Fee Payment', 'Helpdesk'].map((link, i) => (
                 <button key={i} className="px-3 py-1.5 text-sm bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-md transition-colors">
                   {link}
                 </button>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
