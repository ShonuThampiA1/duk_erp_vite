import { BuildingLibraryIcon } from '@heroicons/react/24/outline';

export default function StudentLibrary() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <BuildingLibraryIcon className="w-6 h-6 text-primary-600" />
            Library Status
          </h1>
          <p className="text-neutral-500 text-sm mt-1">Manage your borrowed books.</p>
        </div>
      </div>
      <div className="bg-surface border border-border rounded-lg p-8 text-center text-neutral-500">
        <BuildingLibraryIcon className="w-12 h-12 mx-auto mb-4 text-neutral-300" />
        <p>No books currently borrowed.</p>
      </div>
    </div>
  );
}
