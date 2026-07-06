
import { BuildingLibraryIcon, BookOpenIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function StudentLibrary() {
  const books = [
    { id: 'B-10492', title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', issueDate: 'Oct 10, 2023', dueDate: 'Oct 24, 2023', status: 'Borrowed' },
    { id: 'B-29183', title: 'Clean Code', author: 'Robert C. Martin', issueDate: 'Sep 15, 2023', dueDate: 'Sep 29, 2023', status: 'Returned' },
    { id: 'B-09281', title: 'Design Patterns', author: 'Erich Gamma', issueDate: 'Oct 01, 2023', dueDate: 'Oct 15, 2023', status: 'Overdue' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <BuildingLibraryIcon className="w-6 h-6 text-primary-600" />
            Library Status
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Track your borrowed materials and due dates.</p>
        </div>
        <button className="rounded-md bg-surface border border-border px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm hover:bg-hover">
          Search Catalog
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-primary-50 rounded-lg text-primary-600">
               <BookOpenIcon className="w-6 h-6" />
            </div>
            <div>
               <p className="text-sm font-medium text-neutral-500">Currently Borrowed</p>
               <p className="text-2xl font-bold text-neutral-900">2</p>
            </div>
         </div>
         <div className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-red-50 rounded-lg text-error">
               <ClockIcon className="w-6 h-6" />
            </div>
            <div>
               <p className="text-sm font-medium text-neutral-500">Overdue Books</p>
               <p className="text-2xl font-bold text-error">1</p>
            </div>
         </div>
         <div className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-secondary-50 rounded-lg text-secondary-600">
               <BuildingLibraryIcon className="w-6 h-6" />
            </div>
            <div>
               <p className="text-sm font-medium text-neutral-500">Fine Due</p>
               <p className="text-2xl font-bold text-neutral-900">$5.00</p>
            </div>
         </div>
      </div>

      <div className="bg-surface rounded-lg border border-border shadow-sm overflow-hidden mt-8">
        <div className="px-6 py-4 border-b border-border bg-neutral-50">
          <h3 className="font-semibold text-neutral-900">Borrowing History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-neutral-500">
            <thead className="text-xs text-neutral-700 uppercase border-b border-border">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Book ID</th>
                <th scope="col" className="px-6 py-4 font-semibold">Title & Author</th>
                <th scope="col" className="px-6 py-4 font-semibold">Issue Date</th>
                <th scope="col" className="px-6 py-4 font-semibold">Due Date</th>
                <th scope="col" className="px-6 py-4 font-semibold">Status</th>
                <th scope="col" className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, idx) => (
                <tr key={idx} className="bg-white border-b border-border hover:bg-hover last:border-0">
                  <td className="px-6 py-4 font-mono text-xs text-neutral-500">{book.id}</td>
                  <td className="px-6 py-4">
                     <p className="font-medium text-neutral-900">{book.title}</p>
                     <p className="text-xs text-neutral-500 mt-0.5">{book.author}</p>
                  </td>
                  <td className="px-6 py-4">{book.issueDate}</td>
                  <td className="px-6 py-4">{book.dueDate}</td>
                  <td className="px-6 py-4">
                     <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                        book.status === 'Borrowed' ? 'bg-blue-50 text-information ring-blue-600/20' :
                        book.status === 'Returned' ? 'bg-neutral-50 text-neutral-600 ring-neutral-500/10' :
                        'bg-red-50 text-error ring-red-600/10'
                     }`}>
                        {book.status}
                     </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {book.status === 'Borrowed' && (
                       <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                         Renew
                       </button>
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
