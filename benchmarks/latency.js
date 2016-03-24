import { startBenchmarking } from 'async-benchmark-runner';

import { Simplest } from './latency/execution/simplest.js';


export const NoOpAsync = {
  name: 'Simplest possible async benchmark',
  startRunning: () => {
    return Promise.resolve(false);
  }
};

export const NoOpSync = {
  name: 'Simplest possible sync benchmark',
  run: () => {
    return false;
  }
};

const benchmarks = [
  NoOpAsync,
  NoOpSync,
  Simplest
];

startBenchmarking('My Suite', benchmarks, {}).then( results => {
  console.log(JSON.stringify(results));
}).catch( error => {
  console.log(error);
});