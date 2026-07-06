import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function FacultyAttendance() {
  const [selectedClass, setSelectedClass] = useState('Operating Systems (CS301)');

  const students = [
    { id: 'STU001', name: 'Alice Johnson', status: 'Present' },
    { id: 'STU002', name: 'Bob Smith', status: 'Present' },
    { id: 'STU003', name: 'Charlie Brown', status: 'Absent' },
    { id: 'STU004', name: 'Diana Prince', status: 'Present' },
    { id: 'STU005', name: 'Evan Davis', status: 'Late' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <CheckCircleIcon className="w-6 h-6 text-primary-600" />
            Mark Attendance
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Record attendance for your current or previous sessions.</p>
        </div>
        <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">
          Save Attendance
        </button>
      </div>

      <div className="bg-surface border border-border rounded-lg p-6 shadow-sm flex flex-wrap gap-4 items-end">
        <div className="w-full md:w-1/3">
          <label htmlFor="class" className="block text-sm/6 font-medium text-neutral-900">Select Class</label>
          <div className="mt-2 grid grid-cols-1">
            <select
              id="class"
              name="class"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
            >
              <option>Operating Systems (CS301)</option>
              <option>Database Systems (CS302)</option>
              <option>Computer Networks Lab (CS303L)</option>
            </select>
            <ChevronDownIcon aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-neutral-500 sm:size-4" />
          </div>
        </div>
        <div className="w-full md:w-1/4">
           <label htmlFor="date" className="block text-sm/6 font-medium text-neutral-900">Date</label>
           <input type="date" id="date" defaultValue={new Date().toISOString().split('T')[0]} className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6" />
        </div>
      </div>

      <div className="bg-surface border border-border rounded-lg shadow-sm overflow-hidden mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-neutral-500">
            <thead className="text-xs text-neutral-700 uppercase bg-neutral-50 border-b border-border">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Student ID</th>
                <th scope="col" className="px-6 py-4 font-semibold">Student Name</th>
                <th scope="col" className="px-6 py-4 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={idx} className="bg-white border-b border-border hover:bg-hover">
                  <td className="px-6 py-4 font-mono text-xs text-neutral-500">{student.id}</td>
                  <td className="px-6 py-4 font-medium text-neutral-900">{student.name}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                      <button type="button" className={`px-4 py-2 text-sm font-medium border border-border rounded-l-lg ${student.status === 'Present' ? 'bg-primary-50 text-primary-700 border-primary-500 z-10 ring-1 ring-primary-500' : 'bg-white text-neutral-700 hover:bg-neutral-50'}`}>
                        Present
                      </button>
                      <button type="button" className={`px-4 py-2 text-sm font-medium border-t border-b border-border ${student.status === 'Late' ? 'bg-yellow-50 text-yellow-700 border-yellow-500 z-10 ring-1 ring-yellow-500' : 'bg-white text-neutral-700 hover:bg-neutral-50'}`}>
                        Late
                      </button>
                      <button type="button" className={`px-4 py-2 text-sm font-medium border border-border rounded-r-lg ${student.status === 'Absent' ? 'bg-red-50 text-error border-red-500 z-10 ring-1 ring-red-500' : 'bg-white text-neutral-700 hover:bg-neutral-50'}`}>
                        Absent
                      </button>
                    </div>
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
