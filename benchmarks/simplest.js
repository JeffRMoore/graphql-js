import {
  graphql,
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

const simplestPossibleQuery = 
  `
  {
    A
  }
  `;

const rootValue = {
  'A': 'A'
};

let documentAST; 

export const Simplest = [
{
  name: 'Simplest possible query: parse',
  run: () => {
    return parse(new Source(simplestPossibleQuery));
  }
},
{
  name: 'Simplest possible query: validate',
  setUp: () => {
    documentAST = parse(new Source(simplestPossibleQuery));
  },
  tearDown: () => {
    documentAST = null;
  },
  startRunning: () => {
    return validate(schema, documentAST);
  }
},
{
  name: 'Simplest possible query: execute',
  setUp: () => {
    documentAST = parse(new Source(simplestPossibleQuery));
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
