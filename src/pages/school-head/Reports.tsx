
import { DocumentChartBarIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function SchoolHeadReports() {
  const reports = [
    { title: 'End Semester Attendance Report', type: 'Attendance', date: 'Dec 15, 2023', size: '2.4 MB' },
    { title: 'Faculty Workload Analysis', type: 'HR', date: 'Nov 30, 2023', size: '1.1 MB' },
    { title: 'Department Budget Utilization', type: 'Finance', date: 'Nov 01, 2023', size: '3.5 MB' },
    { title: 'Student Placement Statistics', type: 'Placements', date: 'Oct 15, 2023', size: '1.8 MB' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <DocumentChartBarIcon className="w-6 h-6 text-primary-600" />
            School Reports
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Access and download aggregated administrative reports.</p>
        </div>
        <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">
          Generate New Report
        </button>
      </div>

      <div className="bg-surface rounded-lg border border-border shadow-sm overflow-hidden mt-8">
        <ul className="divide-y divide-border">
          {reports.map((report, idx) => (
            <li key={idx} className="p-6 hover:bg-hover flex items-center justify-between transition-colors">
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg text-primary-600">
                     <DocumentChartBarIcon className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="font-bold text-neutral-900">{report.title}</h3>
                     <div className="flex items-center gap-3 mt-1 text-sm text-neutral-500">
                        <span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
                           {report.type}
                        </span>
                        <span>Generated: {report.date}</span>
                        <span>{report.size}</span>
                     </div>
                  </div>
               </div>
               <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm p-2 rounded hover:bg-primary-50 transition-colors">
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  <span className="hidden sm:inline">Download</span>
               </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
