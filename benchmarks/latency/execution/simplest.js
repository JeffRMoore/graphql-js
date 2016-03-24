import {
  graphql,
  Source,
  parse,
  validate,
  execute,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from '../../../dist/index';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      result: { type: GraphQLString }
    }
  })
});

const rootValue = {
  result: true
};

/*
export const Simplest = {
  name: 'Simplest Possible query, End to End',
  startRunning: () => {
    return graphql(
      schema,
      `
      {
        result
      }
      `,
      rootValue
    );
  }
};
*/

let documentAST; 

export const Simplest = {
  name: 'Simplest Possible query, Execution only',
  setUp: () => {
    const requestString = 
      `
      {
        result
      }
      `;
    const source = new Source(requestString);
    documentAST = parse(source);

    const validationErrors = validate(schema, documentAST);
    if (validationErrors > 0) {
      // how do we even stop?
    }
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
    )
  }
};
