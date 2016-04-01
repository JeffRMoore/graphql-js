import { startBenchmarking } from 'async-benchmark-runner';

import { simplestObject } from './simplestObject.js';
import { simplestList } from './simplestList.js';


export const NoOpAsync = {
  name: 'NO-OP Asynchronous',
  startRunning: () => {
    return Promise.resolve(false);
  }
};

export const NoOpSync = {
  name: 'NO-OP Synchronous',
  run: () => {
    return false;
  }
};

const benchmarks = [
  NoOpSync,
  NoOpAsync,
  simplestObject,
  simplestList
];

startBenchmarking('My Suite', benchmarks, {}).then( results => {
  console.log(JSON.stringify(results));
}).catch( error => {
  console.log(error);
});