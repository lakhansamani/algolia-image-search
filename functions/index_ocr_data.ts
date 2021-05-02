import { Handler } from '@netlify/functions';
import algoliasearch from 'algoliasearch';

const handler: Handler = async (event, context) => {
	const client = algoliasearch(
		process.env.ALGOLIA_USER_ID,
		process.env.ALGOLIA_KEY,
	);
	const index = client.initIndex('ocr_search');
	const encoded = event.headers.authorization.split(' ')[1];
	// decode it using base64
	const decoded = new Buffer(encoded, 'base64').toString();
	const username = decoded.split(':')[0];
	const password = decoded.split(':')[1];

	if (username !== process.env.USERNAME || password !== process.env.password) {
		return {
			statusCode: 401,
			body: JSON.stringify({
				message: 'Unauthorized',
			}),
		};
	}

	const data = JSON.parse(event.body);

	if (!data.text || !data.fileName || !data.fileType) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				message: 'Invalid data',
			}),
		};
	}

	await index.saveObjects(
		{
			...data,
			createdAt: new Date(),
		},
		{ autoGenerateObjectIDIfNotExist: true },
	);

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Data indexed successfully',
		}),
	};
};

export { handler };
