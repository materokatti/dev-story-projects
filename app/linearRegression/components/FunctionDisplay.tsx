import { RegressionParameters } from './types';

interface Props {
  parameters: RegressionParameters;
  onParametersChange: (params: RegressionParameters) => void;
}

export default function FunctionDisplay({ parameters, onParametersChange }: Props) {
  const { w, b } = parameters;

  return (
    <div className="mb-6 sm:mb-8 flex flex-col items-center">
      <div className="text-xl sm:text-2xl font-mono text-gray-200">
        f(x) = 
        <div className="inline-flex flex-col items-center">
          <input
            type="number"
            value={w}
            onChange={(e) => onParametersChange({ ...parameters, w: Number(e.target.value) })}
            className="w-16 sm:w-20 mx-2 text-center bg-gray-700 border border-gray-600 rounded text-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            step="0.1"
          />
          <span className="text-sm text-indigo-400 mt-1">weight</span>
        </div>
        x + 
        <div className="inline-flex flex-col items-center">
          <input
            type="number"
            value={b}
            onChange={(e) => onParametersChange({ ...parameters, b: Number(e.target.value) })}
            className="w-16 sm:w-20 mx-2 text-center bg-gray-700 border border-gray-600 rounded text-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            step="0.1"
          />
          <span className="text-sm text-indigo-400 mt-1">bias</span>
        </div>
      </div>
    </div>
  );
} 