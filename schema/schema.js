const graphql = require('graphql');
const axios = require('axios');

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull,
	GraphQLSchema
} = graphql;

const RootQuery = require('./root_query_type');

module.exports = new GraphQLSchema({
	query: RootQuery
	// mutation
});
