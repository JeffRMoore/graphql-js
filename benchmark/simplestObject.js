import {
  Source,
  parse,
  validate,
  execute,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from '../dist/index';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      A: { type: GraphQLString }
    }
  })
});

export const simplestObjectQuerySource =
  `
  {
    A
  }
  `;

const rootValue = {
  A: 'A'
};

let documentAST;

export const simplestObjectBenchmarks = [
  {
    name: 'Simplest object query: parse',
    run: () => {
      return parse(new Source(simplestObjectQuerySource));
    }
  },
  {
    name: 'Simplest object query: validate',
    setUp: () => {
      documentAST = parse(new Source(simplestObjectQuerySource));
    },
    tearDown: () => {
      documentAST = null;
    },
    run: () => {
      return validate(schema, documentAST);
    }
  },
  {
    name: 'Simplest object query: execute',
    setUp: () => {
      documentAST = parse(new Source(simplestObjectQuerySource));
    },
    tearDown: () => {
      documentAST = null;
    },
    startRunning: () => {
      return execute(
        schema,
        documentAST,
        rootValue
      );
    }
  }
];
