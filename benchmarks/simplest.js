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
      result: { type: GraphQLString }
    }
  })
});

const simplestPossibleQuery = 
  `
  {
    result
  }
  `;

let documentAST; 

export const Simplest = [
{
  name: 'Execute: Simplest Possible query',
  setUp: () => {
    documentAST = parse(new Source(simplestPossibleQuery));
  },
  tearDown: () => {
    documentAST = null;
  },
  startRunning: () => {
    const rootValue = {};
    return execute(
      schema,
      documentAST,
      rootValue
    );
  }
},
{
  name: 'Validate: Simplest Possible query',
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
  name: 'Parse: Simplest Possible query',
  run: () => {
    return parse(new Source(simplestPossibleQuery));
  }
}
];
