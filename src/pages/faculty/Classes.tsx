
import { UsersIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function FacultyClasses() {
  const classes = [
    { name: 'Operating Systems', code: 'CS301', time: 'Mon, Wed 08:30 - 09:30', room: 'A203', students: 45, type: 'Lecture' },
    { name: 'Database Systems', code: 'CS302', time: 'Tue, Thu 09:30 - 10:30', room: 'B102', students: 50, type: 'Lecture' },
    { name: 'Computer Networks Lab', code: 'CS303L', time: 'Fri 11:30 - 01:30', room: 'Lab 1', students: 25, type: 'Practical' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <UsersIcon className="w-6 h-6 text-primary-600" />
            My Classes
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Overview of courses assigned to you this semester.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls, idx) => (
          <div key={idx} className="bg-surface border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="inline-flex items-center rounded-md bg-neutral-50 px-2 py-1 text-xs font-medium text-neutral-600 ring-1 ring-inset ring-neutral-500/10 mb-2">
                  {cls.code}
                </span>
                <h3 className="font-bold text-neutral-900 text-lg">{cls.name}</h3>
                <p className="text-sm text-neutral-500">{cls.type}</p>
              </div>
              <div className="bg-primary-50 text-primary-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                {cls.students}
              </div>
            </div>

            <div className="space-y-2 text-sm text-neutral-600 mt-6 border-t border-border pt-4">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-neutral-400" />
                <span>{cls.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-neutral-400" />
                <span>{cls.room}</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-md bg-surface px-4 py-2 text-sm font-semibold text-primary-600 shadow-sm ring-1 ring-inset ring-border hover:bg-primary-50">
              View Class Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
