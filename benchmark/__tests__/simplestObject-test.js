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

import { simplestObject, simplestObjectQuerySource } from '../simplestObject';

import { runBenchmarkTest, startBenchmarkTest } from 'async-benchmark-runner';

// 80+ char lines are useful in describe/it, so ignore in this file.
/* eslint-disable max-len */

describe('Benchmark Simplest object query Tests', () => {
  describe('Simplest object query: parse', () => {
    it('returns AST', () => {
      const ast = runBenchmarkTest(simplestObject, 'Simplest object query: parse');
      expect(ast).to.deep.equal({
        kind: 'Document',
        definitions:
          [ { kind: 'OperationDefinition',
              operation: 'query',
              name: null,
              selectionSet: {
                kind: 'SelectionSet',
                loc: {
                  end: 14,
                  source: {
                    body: simplestObjectQuerySource,
                    name: 'GraphQL'
                  },
                  start: 3
                },
                selections: [
                  {
                    alias: null,
                    arguments: [],
                    directives: [],
                    kind: 'Field',
                    loc: {
                      end: 10,
                      source: {
                        body: simplestObjectQuerySource,
                        name: 'GraphQL'
                      },
                      start: 9
                    },
                    name: {
                      kind: 'Name',
                      loc: {
                        end: 10,
                        source: {
                          body: simplestObjectQuerySource,
                          name: 'GraphQL'
                        },
                        start: 9
                      },
                      value: 'A'
                    },
                    selectionSet: null
                  }
                ]
              },
              variableDefinitions: null,
              directives: [],
              loc: {
                end: 14,
                source: {
                  body: simplestObjectQuerySource,
                  name: 'GraphQL'
                },
                start: 3
              } } ],
        loc: {
          start: 3,
          end: 17,
          source: {
            body: simplestObjectQuerySource,
            name: 'GraphQL'
          } } });
    });
  });

  describe('Simplest object query: validate', () => {
    it('returns no errors', () => {
      const errors = runBenchmarkTest(simplestObject, 'Simplest object query: validate');
      expect(errors).to.deep.equal([], 'Should validate');
    });
  });

  describe('Simplest object query: execute', () => {
    it('returns expected value', async () => {
      const result = await startBenchmarkTest(simplestObject, 'Simplest object query: execute');
      expect(result).to.deep.equal({data: {A: 'A'}});
    });
  });
});
