/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import { expect } from 'chai';
import { describe, it } from 'mocha';

import { benchmarks } from '../suite';

import { runBenchmarkTest, startBenchmarkTest } from 'async-benchmark-runner';

// 80+ char lines are useful in describe/it, so ignore in this file.
/* eslint-disable max-len */

describe('Benchmark Calibration Tests', () => {
  describe('NO-OP Synchronous', () => {
    it('returns false', () => {
      const result = runBenchmarkTest(benchmarks, 'NO-OP Synchronous');
      expect(result).to.equal(false);
    });
  });

  describe('NO-OP Asynchronous', () => {
    it('returns false', async () => {
      const result = await startBenchmarkTest(benchmarks, 'NO-OP Asynchronous');
      expect(result).to.equal(false);
    });
  });
});
