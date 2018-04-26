const graphql = require('graphql');

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean
} = graphql;

const TagType = new GraphQLObjectType({
	name: 'Tag',
	fields: {
		name: {
			type: GraphQLString
		},
		display_name: {
			type: GraphQLString
		},
		followers: {
			type: GraphQLInt
		},
		total_items: {
			type: GraphQLInt
		},
		background_hash: {
			type: GraphQLString
		},
		accent: {
			type: GraphQLString
		},
		description: {
			type: GraphQLString
		}
	}
});

module.exports = TagType;
