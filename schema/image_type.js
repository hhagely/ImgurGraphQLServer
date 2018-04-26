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

const TagType = require('./tag_type');

const ImageType = new GraphQLObjectType({
	name: 'Image',
	fields: {
		id: {
			type: GraphQLID
		},
		title: {
			type: GraphQLString
		},
		description: {
			type: GraphQLString
		},
		datetime: {
			type: GraphQLInt
		},
		type: {
			type: GraphQLString
		},
		animated: {
			type: GraphQLBoolean
		},
		width: {
			type: GraphQLInt
		},
		height: {
			type: GraphQLInt
		},
		size: {
			type: GraphQLInt
		},
		views: {
			type: GraphQLInt
		},
		bandwidth: {
			type: GraphQLInt
		},
		account_url: {
			type: GraphQLString
		},
		account_id: {
			type: GraphQLInt
		},
		tags: {
			type: new GraphQLList(TagType)
		},
		link: {
			type: GraphQLString
		},
		comment_count: {
			type: GraphQLInt
		},
		ups: {
			type: GraphQLInt
		},
		downs: {
			type: GraphQLInt
		},
		points: {
			type: GraphQLInt
		},
		score: {
			type: GraphQLInt
		}
	}
});

module.exports = ImageType;
