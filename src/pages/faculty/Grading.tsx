import { useState } from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function FacultyGrading() {
  const [selectedAssignment, setSelectedAssignment] = useState('OS Process Scheduling');

  const students = [
    { id: 'STU001', name: 'Alice Johnson', submitted: 'Oct 23', grade: '95' },
    { id: 'STU002', name: 'Bob Smith', submitted: 'Oct 24', grade: '88' },
    { id: 'STU003', name: 'Charlie Brown', submitted: 'Late (Oct 25)', grade: '75' },
    { id: 'STU004', name: 'Diana Prince', submitted: '-', grade: '' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <AcademicCapIcon className="w-6 h-6 text-primary-600" />
            Grading
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Review student submissions and assign grades.</p>
        </div>
        <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">
          Publish Grades
        </button>
      </div>

      <div className="bg-surface border border-border rounded-lg p-6 shadow-sm flex flex-wrap gap-4 items-end">
        <div className="w-full md:w-1/3">
          <label htmlFor="assignment" className="block text-sm/6 font-medium text-neutral-900">Select Assignment / Exam</label>
          <div className="mt-2 grid grid-cols-1">
            <select
              id="assignment"
              name="assignment"
              value={selectedAssignment}
              onChange={(e) => setSelectedAssignment(e.target.value)}
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
            >
              <option>OS Process Scheduling (CS301)</option>
              <option>ER Diagram Creation (CS302)</option>
              <option>Mid-Term Exam (CS301)</option>
            </select>
            <ChevronDownIcon aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-neutral-500 sm:size-4" />
          </div>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-lg shadow-sm overflow-hidden mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-neutral-500">
            <thead className="text-xs text-neutral-700 uppercase bg-neutral-50 border-b border-border">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Student ID</th>
                <th scope="col" className="px-6 py-4 font-semibold">Student Name</th>
                <th scope="col" className="px-6 py-4 font-semibold">Submitted On</th>
                <th scope="col" className="px-6 py-4 font-semibold w-32">Grade / Score</th>
                <th scope="col" className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={idx} className="bg-white border-b border-border hover:bg-hover">
                  <td className="px-6 py-4 font-mono text-xs text-neutral-500">{student.id}</td>
                  <td className="px-6 py-4 font-medium text-neutral-900">{student.name}</td>
                  <td className="px-6 py-4">
                     <span className={`${student.submitted.includes('Late') ? 'text-error' : ''}`}>{student.submitted}</span>
                  </td>
                  <td className="px-6 py-4">
                     <input
                        type="text"
                        defaultValue={student.grade}
                        className="block w-full rounded-md bg-white px-3 py-1 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                        placeholder="--"
                        disabled={student.submitted === '-'}
                     />
                  </td>
                  <td className="px-6 py-4 text-right">
                     <button className="text-primary-600 hover:text-primary-700 font-medium text-sm disabled:opacity-50" disabled={student.submitted === '-'}>
                        View Submission
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
