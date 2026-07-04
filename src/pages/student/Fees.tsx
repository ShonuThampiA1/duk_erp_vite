import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function StudentFees() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <CurrencyDollarIcon className="w-6 h-6 text-primary-600" />
            Fee Management
          </h1>
          <p className="text-neutral-500 text-sm mt-1">View and pay your academic fees.</p>
        </div>
      </div>
      <div className="bg-surface border border-border rounded-lg p-8 text-center text-neutral-500">
        <CurrencyDollarIcon className="w-12 h-12 mx-auto mb-4 text-neutral-300" />
        <p>Fee details will be populated here.</p>
      </div>
    </div>
  );
}
