
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

export const calibrationBenchmarks = [
  NoOpSync,
  NoOpAsync
];
