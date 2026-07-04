import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function StudentAttendance() {
  const subjects = [
    { name: 'Operating Systems', total: 40, attended: 36, percentage: 90 },
    { name: 'Database Systems', total: 35, attended: 33, percentage: 94 },
    { name: 'Computer Networks', total: 38, attended: 28, percentage: 73 },
    { name: 'Software Engineering', total: 42, attended: 40, percentage: 95 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <CheckCircleIcon className="w-6 h-6 text-secondary-600" />
            Attendance Overview
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Track your subject-wise attendance.</p>
        </div>
        <div className="p-3 bg-secondary-50 border border-secondary-200 rounded-lg">
           <p className="text-sm font-bold text-secondary-700">Overall: 88%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((sub, idx) => (
          <div key={idx} className="bg-surface border border-border rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-neutral-900">{sub.name}</h3>
              <span className={`px-2 py-1 rounded text-xs font-bold ${sub.percentage < 75 ? 'bg-red-50 text-error ring-1 ring-inset ring-red-600/10' : 'bg-secondary-50 text-secondary-700 ring-1 ring-inset ring-secondary-700/10'}`}>
                {sub.percentage}%
              </span>
            </div>

            <div className="w-full bg-neutral-100 rounded-full h-2.5 mb-4">
              <div
                className={`h-2.5 rounded-full ${sub.percentage < 75 ? 'bg-error' : 'bg-secondary-500'}`}
                style={{ width: `${sub.percentage}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-sm text-neutral-500">
               <span>Total Classes: {sub.total}</span>
               <span>Attended: {sub.attended}</span>
            </div>

            {sub.percentage < 75 && (
              <div className="mt-4 flex items-center gap-2 text-xs text-error bg-red-50 p-2 rounded">
                 <ExclamationTriangleIcon className="w-4 h-4" />
                 <span>Attendance shortage. Minimum 75% required.</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
