export const DATASETS = {
  dataset1: {
    points: [[1, 2], [2, 4], [3, 6], [4, 8]],
    name: "Dataset 1"
  },
  dataset2: {
    points: [[1, 1], [2, 3], [3, 4], [4, 5]],
    name: "Dataset 2"
  },
  dataset3: {
    points: [[1, 3], [2, 5], [3, 4], [4, 7]],
    name: "Dataset 3"
  }
} as const;

export type DatasetKey = keyof typeof DATASETS; 