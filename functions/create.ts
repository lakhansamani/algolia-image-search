import { Handler } from '@netlify/functions';
// import algoliasearch from 'algoliasearch';

const handler: Handler = async (event, context) => {
	// const client = algoliasearch(
	// 	'59NBO13TUB',
	// 	'2afaf2a0db47cce2e75c1b2aca61e61f',
	// );
	// const index = client.initIndex('your_index_name');
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Hello World',
			key: process.env.ALGOLIA_KEY,
		}),
	};
};

export { handler };
