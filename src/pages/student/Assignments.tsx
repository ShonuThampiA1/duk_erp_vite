import { ClipboardDocumentCheckIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline';

export default function StudentAssignments() {
  const assignments = [
    { title: 'OS Process Scheduling', subject: 'Operating Systems', dueDate: 'Tomorrow, 11:59 PM', status: 'Pending' },
    { title: 'ER Diagram Creation', subject: 'Database Systems', dueDate: 'Oct 25, 2023', status: 'Submitted' },
    { title: 'Network Topologies Essay', subject: 'Computer Networks', dueDate: 'Oct 15, 2023', status: 'Graded', grade: 'A' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <ClipboardDocumentCheckIcon className="w-6 h-6 text-primary-600" />
            Assignments
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Manage and submit your coursework.</p>
        </div>
      </div>

      <div className="space-y-4">
        {assignments.map((assignment, idx) => (
          <div key={idx} className="bg-surface border border-border rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-bold text-neutral-900 text-lg">{assignment.title}</h3>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                  assignment.status === 'Pending' ? 'bg-yellow-50 text-warning ring-1 ring-inset ring-yellow-600/20' :
                  assignment.status === 'Submitted' ? 'bg-blue-50 text-information ring-1 ring-inset ring-blue-700/10' :
                  'bg-secondary-50 text-secondary-700 ring-1 ring-inset ring-secondary-700/10'
                }`}>
                  {assignment.status}
                </span>
              </div>
              <p className="text-sm text-neutral-500">{assignment.subject} • Due: {assignment.dueDate}</p>
            </div>

            <div className="flex items-center gap-4">
              {assignment.grade && (
                <div className="text-center px-4 border-r border-border">
                  <p className="text-xs text-neutral-500">Grade</p>
                  <p className="font-bold text-lg text-primary-600">{assignment.grade}</p>
                </div>
              )}
              {assignment.status === 'Pending' ? (
                <button className="flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                  <DocumentArrowUpIcon className="w-4 h-4" />
                  Submit
                </button>
              ) : (
                <button className="rounded-md bg-surface px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-inset ring-border hover:bg-hover">
                  View Details
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
