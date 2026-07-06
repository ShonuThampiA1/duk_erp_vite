
import { ChartBarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

export default function AcademicHeadAnalytics() {
  const kpis = [
    { label: 'Overall University Attendance', value: '88.5%', trend: '+2.1%', status: 'positive' },
    { label: 'Average CGPA', value: '7.8', trend: '+0.2', status: 'positive' },
    { label: 'Research Publications (YTD)', value: '1,240', trend: '+150', status: 'positive' },
    { label: 'Faculty Attrition Rate', value: '3.2%', trend: '-0.5%', status: 'negative' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <ChartBarIcon className="w-6 h-6 text-primary-600" />
            University Analytics
          </h1>
          <p className="text-neutral-500 text-sm mt-1">High-level KPIs and performance metrics.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-surface border border-border rounded-lg p-6 shadow-sm">
            <p className="text-sm font-medium text-neutral-500 mb-2">{kpi.label}</p>
            <div className="flex items-end justify-between">
               <p className="text-3xl font-bold text-neutral-900">{kpi.value}</p>
               <div className={`flex items-center gap-1 text-sm font-medium ${kpi.status === 'positive' ? 'text-success' : 'text-error'}`}>
                  <ArrowTrendingUpIcon className={`w-4 h-4 ${kpi.status === 'negative' ? 'rotate-180' : ''}`} />
                  <span>{kpi.trend}</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
         <div className="bg-surface border border-border rounded-lg p-6 h-96 flex flex-col shadow-sm">
            <h3 className="font-bold text-neutral-900 mb-4">Enrollment Year-over-Year</h3>
            <div className="flex-1 border border-dashed border-border rounded flex items-center justify-center bg-neutral-50 text-neutral-400">
               Line Chart Placeholder
            </div>
         </div>
         <div className="bg-surface border border-border rounded-lg p-6 h-96 flex flex-col shadow-sm">
            <h3 className="font-bold text-neutral-900 mb-4">School-wise Performance</h3>
            <div className="flex-1 border border-dashed border-border rounded flex items-center justify-center bg-neutral-50 text-neutral-400">
               Bar Chart Placeholder
            </div>
         </div>
      </div>
    </div>
  );
}
