
import { ClipboardDocumentCheckIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function FacultyAssignments() {
  const assignments = [
    { title: 'OS Process Scheduling', class: 'CS301', submissions: '42/45', dueDate: 'Tomorrow', status: 'Active' },
    { title: 'ER Diagram Creation', class: 'CS302', submissions: '50/50', dueDate: 'Oct 25', status: 'Grading Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <ClipboardDocumentCheckIcon className="w-6 h-6 text-primary-600" />
            Manage Assignments
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Create new assignments and track student submissions.</p>
        </div>
        <button className="flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">
          <PlusIcon className="w-4 h-4" />
          Create Assignment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment, idx) => (
           <div key={idx} className="bg-surface border border-border rounded-lg p-6 shadow-sm flex flex-col justify-between">
              <div>
                 <div className="flex justify-between items-start mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${assignment.status === 'Active' ? 'bg-primary-50 text-primary-700' : 'bg-yellow-50 text-warning'}`}>
                       {assignment.status}
                    </span>
                    <span className="text-sm font-bold text-neutral-400">{assignment.class}</span>
                 </div>
                 <h3 className="font-bold text-lg text-neutral-900">{assignment.title}</h3>
                 <p className="text-sm text-neutral-500 mt-1">Due: {assignment.dueDate}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-neutral-600">Submissions</span>
                    <span className="text-sm font-bold text-neutral-900">{assignment.submissions}</span>
                 </div>
                 <div className="w-full bg-neutral-100 rounded-full h-2">
                    <div className="bg-secondary-500 h-2 rounded-full" style={{ width: `${(parseInt(assignment.submissions.split('/')[0]) / parseInt(assignment.submissions.split('/')[1])) * 100}%` }}></div>
                 </div>
                 <button className="mt-4 w-full rounded-md bg-surface px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-inset ring-border hover:bg-hover">
                   Review Submissions
                 </button>
              </div>
           </div>
        ))}
      </div>
    </div>
  );
}
