import { RegressionParameters } from './types';

interface Props {
  parameters: RegressionParameters;
  onParametersChange: (params: RegressionParameters) => void;
}

export default function ParameterControls({ parameters, onParametersChange }: Props) {
  const { w, b } = parameters;

  return (
    <div className="flex justify-center gap-8">
      <div className="w-48">
        <label className="block text-lg font-medium text-gray-200 mb-2">
          Slope (w)
        </label>
        <input
          type="number"
          value={w}
          onChange={(e) => onParametersChange({ ...parameters, w: Number(e.target.value) })}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2"
          step="0.1"
        />
      </div>
      <div className="w-48">
        <label className="block text-lg font-medium text-gray-200 mb-2">
          Y-Intercept (b)
        </label>
        <input
          type="number"
          value={b}
          onChange={(e) => onParametersChange({ ...parameters, b: Number(e.target.value) })}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2"
          step="0.1"
        />
      </div>
    </div>
  );
} 