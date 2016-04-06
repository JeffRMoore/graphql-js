import { startBenchmarking } from 'async-benchmark-runner';

import {
  benchmarkSuiteName,
  benchmarks
} from './suite';

startBenchmarking(benchmarkSuiteName, benchmarks, {}).then( results => {
  console.log(JSON.stringify(results));
}).catch( error => {
  console.log(error);
});