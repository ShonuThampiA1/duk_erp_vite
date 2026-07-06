
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function SchoolHeadDepartments() {
  const departments = [
    { name: 'Computer Science & Engineering', code: 'CSE', hod: 'Dr. Sarah Wilson', facultyCount: 45, studentCount: 1200 },
    { name: 'Electronics & Communication', code: 'ECE', hod: 'Dr. James Clark', facultyCount: 38, studentCount: 850 },
    { name: 'Mechanical Engineering', code: 'ME', hod: 'Dr. Robert Fox', facultyCount: 42, studentCount: 950 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <BuildingOfficeIcon className="w-6 h-6 text-primary-600" />
            Departments Overview
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Manage and monitor academic departments within the school.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept, idx) => (
          <div key={idx} className="bg-surface border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 mb-2">
                {dept.code}
              </span>
            </div>
            <h3 className="font-bold text-neutral-900 text-xl mb-1">{dept.name}</h3>
            <p className="text-sm text-neutral-600 mb-6">HOD: {dept.hod}</p>

            <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
               <div>
                  <p className="text-xs text-neutral-500">Faculty</p>
                  <p className="font-bold text-neutral-900">{dept.facultyCount}</p>
               </div>
               <div>
                  <p className="text-xs text-neutral-500">Students</p>
                  <p className="font-bold text-neutral-900">{dept.studentCount}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
