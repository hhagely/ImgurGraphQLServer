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
const ImageType = require('./image_type');

const GalleryType = new GraphQLObjectType({
	name: 'GalleryType',
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
			type: GraphQLString
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
		section: {
			type: GraphQLString
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
		in_gallery: {
			type: GraphQLBoolean
		},
		link: {
			type: GraphQLString
		},
		mp4: {
			type: GraphQLString
		},
		gifv: {
			type: GraphQLString
		},
		mp4_size: {
			type: GraphQLInt
		},
		looping: {
			type: GraphQLBoolean
		},
		comment_count: {
			type: GraphQLInt
		},
		favorite_count: {
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
		},
		is_album: {
			type: GraphQLBoolean
		},
		images_count: {
			type: GraphQLInt
		},
		images: {
			type: new GraphQLList(ImageType)
		}
	}
});

module.exports = GalleryType;
