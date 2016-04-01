import {
  graphql,
  Source,
  parse,
  validate,
  execute,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} from '../dist/index';

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    A: { type: GraphQLString },
  }
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      users: {
        type: new GraphQLList(userType),
        args: {
          id: { type: GraphQLString }
        },
        resolve: (source, args, context, info) => {
          return data;
        }
      }
    }
  })
});

const simplestListQuery = 
  `
  {
    A
  }
  `;

const rootValue = {
};

const record = {
    A: 'A',
};
  
let data;
let documentAST;

export const simplestList = [
{
  name: 'Simplest list query: parse',
  run: () => {
    return parse(new Source(simplestListQuery));
  }
},
{
  name: 'Simplest list query: validate',
  setUp: () => {
    documentAST = parse(new Source(simplestListQuery));
  },
  tearDown: () => {
    documentAST = null;
  },
  startRunning: () => {
    return validate(schema, documentAST);
  }
},
{
  name: 'Simplest list query: execute, n=1',
  setUp: () => {
    documentAST = parse(new Source(simplestListQuery));
    data = [];

    for(let i=0; i < 1; i++) {
      data.push(record);
    }
  },
  tearDown: () => {
    documentAST = null;
    data = [];
  },
  startRunning: () => {
    return execute(
      schema,
      documentAST,
      rootValue
    );
  }
},
{
  name: 'Simplest list query: execute, n=10',
  setUp: () => {
    documentAST = parse(new Source(simplestListQuery));
    data = [];

    for(let i=0; i < 10; i++) {
      data.push(record);
    }
  },
  tearDown: () => {
    documentAST = null;
    data = [];
  },
  startRunning: () => {
    return execute(
      schema,
      documentAST,
      rootValue
    );
  }
},
{
  name: 'Simplest list query: execute, n=100',
  setUp: () => {
    documentAST = parse(new Source(simplestListQuery));
    data = [];

    for(let i=0; i < 100; i++) {
      data.push(record);
    }
  },
  tearDown: () => {
    documentAST = null;
    data = [];
  },
  startRunning: () => {
    return execute(
      schema,
      documentAST,
      rootValue
    );
  }
},
{
  name: 'Simplest list query: execute, n=1000',
  setUp: () => {
    documentAST = parse(new Source(simplestListQuery));
    data = [];

    for(let i=0; i < 1000; i++) {
      data.push(record);
    }
  },
  tearDown: () => {
    documentAST = null;
    data = [];
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
