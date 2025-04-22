'use client';

import { useState } from 'react';
import LinearRegressionChart from './components/LinearRegressionChart';
import DatasetSelector from './components/DatasetSelector';
import FunctionDisplay from './components/FunctionDisplay';
import type { DatasetKey } from './data/datasets';
import type { RegressionParameters } from './components/types';

export default function Page() {
  const [parameters, setParameters] = useState<RegressionParameters>({ w: 1, b: 0 });
  const [currentDataset, setCurrentDataset] = useState<DatasetKey>('dataset1');

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-white">
          Linear Regression Visualization
        </h2>
        
        <FunctionDisplay
          parameters={parameters}
          onParametersChange={setParameters}
        />

        <LinearRegressionChart
          currentDataset={currentDataset}
          parameters={parameters}
        />

        <div className="mb-6 sm:mb-8">
          <DatasetSelector
            currentDataset={currentDataset}
            onDatasetChange={setCurrentDataset}
          />
        </div>
      </div>
    </div>
  );
}