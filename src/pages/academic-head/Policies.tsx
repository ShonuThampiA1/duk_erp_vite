
import { ShieldCheckIcon, DocumentTextIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function AcademicHeadPolicies() {
  const policies = [
    { title: 'Academic Integrity Policy v2.1', category: 'Academic', lastUpdated: 'Oct 01, 2023', status: 'Active' },
    { title: 'Attendance & Leave Guidelines', category: 'Student Affairs', lastUpdated: 'Sep 15, 2023', status: 'Active' },
    { title: 'Faculty Grading Rubrics Standard', category: 'Faculty', lastUpdated: 'Aug 20, 2023', status: 'Under Review' },
    { title: 'Examination Conduct Rules', category: 'Academic', lastUpdated: 'Jul 10, 2023', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <ShieldCheckIcon className="w-6 h-6 text-primary-600" />
            Academic Policies
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Manage and distribute university-wide academic policies.</p>
        </div>
        <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">
          Upload Policy
        </button>
      </div>

      <div className="bg-surface rounded-lg border border-border shadow-sm overflow-hidden mt-8">
        <ul className="divide-y divide-border">
          {policies.map((policy, idx) => (
            <li key={idx} className="p-6 hover:bg-hover flex items-center justify-between transition-colors">
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-100 rounded-lg text-neutral-600">
                     <DocumentTextIcon className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-neutral-900 flex items-center gap-2">
                        {policy.title}
                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${policy.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                           {policy.status}
                        </span>
                     </h3>
                     <div className="flex items-center gap-3 mt-1 text-sm text-neutral-500">
                        <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
                           {policy.category}
                        </span>
                        <span>Last Updated: {policy.lastUpdated}</span>
                     </div>
                  </div>
               </div>
               <div className="flex gap-2">
                  <button className="text-neutral-600 hover:text-neutral-900 font-medium text-sm p-2 rounded hover:bg-neutral-100 transition-colors">
                    Edit
                  </button>
                  <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm p-2 rounded hover:bg-primary-50 transition-colors">
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    <span className="hidden sm:inline">Download</span>
                  </button>
               </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
