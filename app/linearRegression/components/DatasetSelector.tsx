import { DATASETS } from '../data/datasets';
import type { DatasetKey } from '../data/datasets';

interface Props {
  currentDataset: DatasetKey;
  onDatasetChange: (dataset: DatasetKey) => void;
}

export default function DatasetSelector({ currentDataset, onDatasetChange }: Props) {
  return (
    <div className="flex gap-4 mb-6">
      {Object.entries(DATASETS).map(([key, value]) => (
        <button
          key={key}
          onClick={() => onDatasetChange(key as DatasetKey)}
          className={`px-4 py-2 rounded ${
            currentDataset === key
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {value.name}
        </button>
      ))}
    </div>
  );
} 