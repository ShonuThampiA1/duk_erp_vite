
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function AcademicHeadSchools() {
  const schools = [
    { name: 'School of Computer Science', dean: 'Dr. Emily Chen', programs: 8, students: 3500 },
    { name: 'School of Electronics', dean: 'Dr. Michael Chang', programs: 5, students: 2100 },
    { name: 'School of Digital Humanities', dean: 'Dr. Sarah Johnson', programs: 4, students: 1200 },
    { name: 'School of Digital Sciences', dean: 'Dr. David Smith', programs: 6, students: 1800 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <BuildingOfficeIcon className="w-6 h-6 text-primary-600" />
            University Schools
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Directory of all schools under the university.</p>
        </div>
        <button className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">
          Add New School
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {schools.map((school, idx) => (
          <div key={idx} className="bg-surface border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-neutral-900 text-xl mb-1">{school.name}</h3>
            <p className="text-sm text-neutral-600 mb-6">Dean: <span className="font-medium text-neutral-900">{school.dean}</span></p>

            <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
               <div>
                  <p className="text-xs text-neutral-500">Active Programs</p>
                  <p className="font-bold text-neutral-900">{school.programs}</p>
               </div>
               <div>
                  <p className="text-xs text-neutral-500">Total Enrolled</p>
                  <p className="font-bold text-neutral-900">{school.students}</p>
               </div>
            </div>
            <div className="mt-6">
                <button className="w-full rounded-md bg-surface px-4 py-2 text-sm font-semibold text-primary-600 shadow-sm ring-1 ring-inset ring-border hover:bg-primary-50">
                  Manage School
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
