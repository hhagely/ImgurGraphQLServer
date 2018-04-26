const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList } = graphql;
const axios = require('axios');
const config = require('config');

const GalleryType = require('./gallery_type');

const ROOT_URL = 'http://api.imgur.com/3';

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: () => ({
		galleries: {
			type: new GraphQLList(GalleryType),
			resolve() {
				return axios
					.get(
						`${ROOT_URL}/gallery/hot?album_previews=true&client_id=${
							config.clientId
						}`
					)
					.then(res => {
						return res.data;
					});
			}
		}
	})
});

module.exports = RootQuery;
