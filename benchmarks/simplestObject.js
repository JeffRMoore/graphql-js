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

const simplestObjectQuery = 
  `
  {
    A
  }
  `;

const rootValue = {
  'A': 'A'
};

let documentAST; 

export const simplestObject = [
{
  name: 'Simplest object query: parse',
  run: () => {
    return parse(new Source(simplestObjectQuery));
  }
},
{
  name: 'Simplest object query: validate',
  setUp: () => {
    documentAST = parse(new Source(simplestObjectQuery));
  },
  tearDown: () => {
    documentAST = null;
  },
  startRunning: () => {
    return validate(schema, documentAST);
  }
},
{
  name: 'Simplest object query: execute',
  setUp: () => {
    documentAST = parse(new Source(simplestObjectQuery));
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
