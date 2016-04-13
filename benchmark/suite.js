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

export const name = 'GraphQL Benchmark Suite';

export const benchmarks = [
  NoOpSync,
  NoOpAsync,
  simplestObject,
  simplestList
];
