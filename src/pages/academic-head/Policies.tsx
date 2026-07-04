import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function AcademicHeadPolicies() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <ShieldCheckIcon className="w-6 h-6 text-primary-600" />
            Policies
          </h1>
        </div>
      </div>
      <div className="bg-surface border border-border rounded-lg p-8 text-center text-neutral-500">
        <p>Academic policies management interface will go here.</p>
      </div>
    </div>
  );
}
