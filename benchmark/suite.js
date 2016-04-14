import { simplestObjectBenchmarks } from './simplestObject';
import { simplestListBenchmarks } from './simplestList';
import { calibrationBenchmarks } from './calibration';

export const name = 'GraphQL Benchmark Suite';

export const benchmarks = [
  calibrationBenchmarks,
  simplestObjectBenchmarks,
  simplestListBenchmarks
];
