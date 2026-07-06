
import { ChartBarIcon, StarIcon } from '@heroicons/react/24/outline';

export default function SchoolHeadFaculty() {
  const facultyList = [
    { name: 'Dr. Alan Turing', department: 'CSE', courses: 3, feedbackScore: 4.8, publications: 2 },
    { name: 'Dr. Grace Hopper', department: 'CSE', courses: 2, feedbackScore: 4.9, publications: 5 },
    { name: 'Prof. John Doe', department: 'ECE', courses: 4, feedbackScore: 4.2, publications: 0 },
    { name: 'Dr. Jane Smith', department: 'ME', courses: 3, feedbackScore: 4.5, publications: 1 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <ChartBarIcon className="w-6 h-6 text-primary-600" />
            Faculty Performance
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Review faculty KPIs, student feedback, and research output.</p>
        </div>
      </div>

      <div className="bg-surface rounded-lg border border-border shadow-sm overflow-hidden mt-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-neutral-500">
            <thead className="text-xs text-neutral-700 uppercase bg-neutral-50 border-b border-border">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Faculty Name</th>
                <th scope="col" className="px-6 py-4 font-semibold">Department</th>
                <th scope="col" className="px-6 py-4 font-semibold text-center">Courses Taught</th>
                <th scope="col" className="px-6 py-4 font-semibold text-center">Student Feedback</th>
                <th scope="col" className="px-6 py-4 font-semibold text-center">Publications (YTD)</th>
                <th scope="col" className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {facultyList.map((faculty, idx) => (
                <tr key={idx} className="bg-white border-b border-border hover:bg-hover last:border-0">
                  <td className="px-6 py-4 font-medium text-neutral-900">{faculty.name}</td>
                  <td className="px-6 py-4">{faculty.department}</td>
                  <td className="px-6 py-4 text-center">{faculty.courses}</td>
                  <td className="px-6 py-4">
                     <div className="flex items-center justify-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-bold text-neutral-900">{faculty.feedbackScore}</span>
                        <span className="text-neutral-400">/ 5.0</span>
                     </div>
                  </td>
                  <td className="px-6 py-4 text-center font-medium">{faculty.publications}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
