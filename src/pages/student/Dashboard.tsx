
import { useState } from 'react';
import { BookOpen, Calendar, Clock, Award, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';

export default function StudentDashboard() {
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);

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
        <div className="lg:col-span-2 space-y-6">
          {/* Current and Next Period */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Period */}
            <div className="bg-card rounded-lg border border-primary-200 shadow-sm p-6 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-primary-500"></div>
               <div className="flex justify-between items-start mb-4">
                 <span className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10">Current Period</span>
                 <span className="text-sm font-semibold text-neutral-700">09:00 AM - 10:30 AM</span>
               </div>
               <h4 className="text-xl font-bold text-neutral-900">Advanced Mathematics</h4>
               <p className="text-sm text-neutral-500 mt-1">B.Tech Computer Science</p>

               <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-600">
                 <div className="flex items-center gap-2">
                   <Clock className="w-4 h-4 text-neutral-400" />
                   <span>Room 302</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <Award className="w-4 h-4 text-neutral-400" />
                   <span>Prof. Alan Turing</span>
                 </div>
               </div>

               <button
                 onClick={() => setIsAttendanceModalOpen(true)}
                 className="mt-6 w-full bg-primary-600 text-white rounded-md py-2 text-sm font-semibold hover:bg-primary-500 transition-colors shadow-sm"
               >
                 Join Class
               </button>
            </div>

            {/* Next Period */}
            <div className="bg-card rounded-lg border border-border shadow-sm p-6">
               <div className="flex justify-between items-start mb-4">
                 <span className="inline-flex items-center rounded-md bg-neutral-50 px-2 py-1 text-xs font-medium text-neutral-600 ring-1 ring-inset ring-neutral-500/10">Next Period</span>
                 <span className="text-sm font-semibold text-neutral-700">11:30 AM - 01:00 PM</span>
               </div>
               <h4 className="text-xl font-bold text-neutral-900">Computer Architecture</h4>
               <p className="text-sm text-neutral-500 mt-1">B.Tech Computer Science</p>

               <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-600">
                 <div className="flex items-center gap-2">
                   <Clock className="w-4 h-4 text-neutral-400" />
                   <span>Lab 1</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <Award className="w-4 h-4 text-neutral-400" />
                   <span>Prof. Grace Hopper</span>
                 </div>
               </div>

               <button className="mt-6 w-full bg-surface border border-border text-neutral-700 rounded-md py-2 text-sm font-semibold hover:bg-hover transition-colors shadow-sm" disabled>
                 Join Class (Starts later)
               </button>
            </div>
          </div>

          {/* Course Schedule */}
          <div className="bg-card rounded-lg border border-border shadow-sm p-6">
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

      {/* Attendance Modal */}
      <Transition appear show={isAttendanceModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsAttendanceModalOpen(false)}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-surface p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-bold leading-6 text-neutral-900 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    Mark Attendance
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-neutral-500">
                      You are joining <strong>Advanced Mathematics</strong>. Please confirm to mark your attendance for this session.
                    </p>
                  </div>

                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                      onClick={() => setIsAttendanceModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 shadow-sm"
                      onClick={() => setIsAttendanceModalOpen(false)}
                    >
                      Confirm Attendance
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
