
import { CurrencyDollarIcon, DocumentArrowDownIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function StudentFees() {
  const transactions = [
    { id: 'TXN-2023-001', date: 'Aug 15, 2023', description: 'Tuition Fee - Fall 2023', amount: '$4,500.00', status: 'Paid' },
    { id: 'TXN-2023-002', date: 'Aug 15, 2023', description: 'Library Fee - Fall 2023', amount: '$150.00', status: 'Paid' },
    { id: 'TXN-2023-003', date: 'Aug 15, 2023', description: 'Hostel Fee - Fall 2023', amount: '$1,200.00', status: 'Paid' },
    { id: 'TXN-2024-001', date: 'Jan 10, 2024', description: 'Tuition Fee - Spring 2024', amount: '$4,500.00', status: 'Pending' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <CurrencyDollarIcon className="w-6 h-6 text-primary-600" />
            Fee Management
          </h1>
          <p className="text-neutral-500 text-sm mt-1">View and manage your academic financial records.</p>
        </div>
        <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
          Make a Payment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col justify-center">
          <p className="text-sm font-medium text-neutral-500 mb-1">Total Outstanding Balance</p>
          <p className="text-3xl font-bold text-error">$4,500.00</p>
          <div className="mt-2 flex items-center gap-1 text-sm text-error">
             <ExclamationCircleIcon className="w-4 h-4" />
             <span>Due by Jan 31, 2024</span>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col justify-center">
          <p className="text-sm font-medium text-neutral-500 mb-1">Total Paid (This Academic Year)</p>
          <p className="text-3xl font-bold text-neutral-900">$5,850.00</p>
          <div className="mt-2 flex items-center gap-1 text-sm text-success">
             <CheckCircleIcon className="w-4 h-4" />
             <span>All previous dues cleared</span>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm flex flex-col justify-center">
          <p className="text-sm font-medium text-neutral-500 mb-1">Scholarship / Aid Applied</p>
          <p className="text-3xl font-bold text-secondary-600">$0.00</p>
          <p className="mt-2 text-sm text-neutral-400">No active scholarships</p>
        </div>
      </div>

      <div className="bg-surface rounded-lg border border-border shadow-sm overflow-hidden mt-8">
        <div className="px-6 py-4 border-b border-border bg-neutral-50">
          <h3 className="font-semibold text-neutral-900">Transaction History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-neutral-500">
            <thead className="text-xs text-neutral-700 uppercase border-b border-border">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Transaction ID</th>
                <th scope="col" className="px-6 py-4 font-semibold">Date</th>
                <th scope="col" className="px-6 py-4 font-semibold">Description</th>
                <th scope="col" className="px-6 py-4 font-semibold">Amount</th>
                <th scope="col" className="px-6 py-4 font-semibold">Status</th>
                <th scope="col" className="px-6 py-4 font-semibold text-right">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, idx) => (
                <tr key={idx} className="bg-white border-b border-border hover:bg-hover last:border-0">
                  <td className="px-6 py-4 font-medium text-neutral-900">{txn.id}</td>
                  <td className="px-6 py-4">{txn.date}</td>
                  <td className="px-6 py-4">{txn.description}</td>
                  <td className="px-6 py-4 font-medium text-neutral-900">{txn.amount}</td>
                  <td className="px-6 py-4">
                     <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${txn.status === 'Paid' ? 'bg-green-50 text-green-700 ring-green-600/20' : 'bg-red-50 text-red-700 ring-red-600/10'}`}>
                        {txn.status}
                     </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {txn.status === 'Paid' ? (
                       <button className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1">
                         <DocumentArrowDownIcon className="w-4 h-4" /> Download
                       </button>
                    ) : (
                       <span className="text-neutral-400">-</span>
                    )}
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
