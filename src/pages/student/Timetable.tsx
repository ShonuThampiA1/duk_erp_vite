import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function StudentTimetable() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const periods = [
    { time: '08:30 - 09:30', monday: 'Operating Systems (A203)', tuesday: 'Database Systems (B102)', wednesday: 'Operating Systems (A203)', thursday: 'Database Systems (B102)', friday: 'Software Eng (C301)' },
    { time: '09:30 - 10:30', monday: 'Database Systems (B102)', tuesday: 'Operating Systems (A203)', wednesday: 'Computer Networks (Lab 1)', thursday: 'Software Eng (C301)', friday: 'Computer Networks (Lab 1)' },
    { time: '10:30 - 11:30', monday: 'Break', tuesday: 'Break', wednesday: 'Break', thursday: 'Break', friday: 'Break' },
    { time: '11:30 - 12:30', monday: 'Computer Networks (Lab 1)', tuesday: 'Software Eng (C301)', wednesday: 'Database Systems (B102)', thursday: 'Operating Systems (A203)', friday: 'Project Work' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-primary-600" />
            My Timetable
          </h1>
          <p className="text-neutral-500 text-sm mt-1">View your weekly class schedule.</p>
        </div>
      </div>

      <div className="bg-surface rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-neutral-500">
            <thead className="text-xs text-neutral-700 uppercase bg-neutral-50 border-b border-border">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Time / Day</th>
                {days.map(day => (
                  <th key={day} scope="col" className="px-6 py-4 font-semibold">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {periods.map((period, idx) => (
                <tr key={idx} className="bg-white border-b border-border hover:bg-hover">
                  <td className="px-6 py-4 font-medium text-neutral-900 flex items-center gap-2 whitespace-nowrap">
                    <ClockIcon className="w-4 h-4 text-neutral-400" />
                    {period.time}
                  </td>
                  <td className={`px-6 py-4 ${period.monday === 'Break' ? 'bg-neutral-50 text-neutral-400 font-medium text-center' : ''}`}>{period.monday}</td>
                  <td className={`px-6 py-4 ${period.tuesday === 'Break' ? 'bg-neutral-50 text-neutral-400 font-medium text-center' : ''}`}>{period.tuesday}</td>
                  <td className={`px-6 py-4 ${period.wednesday === 'Break' ? 'bg-neutral-50 text-neutral-400 font-medium text-center' : ''}`}>{period.wednesday}</td>
                  <td className={`px-6 py-4 ${period.thursday === 'Break' ? 'bg-neutral-50 text-neutral-400 font-medium text-center' : ''}`}>{period.thursday}</td>
                  <td className={`px-6 py-4 ${period.friday === 'Break' ? 'bg-neutral-50 text-neutral-400 font-medium text-center' : ''}`}>{period.friday}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
