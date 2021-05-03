import { Handler } from '@netlify/functions';
import algoliasearch from 'algoliasearch';

const handler: Handler = async (event, context) => {
	if (event.httpMethod === 'OPTIONS') {
		const headers = {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
		};
		return {
			statusCode: 200, // <-- Must be 200 otherwise pre-flight call fails
			headers,
			body: 'This was a preflight call!',
		};
	}

	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: JSON.stringify({
				message: `${event.httpMethod} Method not allowed`,
			}),
		};
	}

	try {
		const client = algoliasearch(
			process.env.ALGOLIA_USER_ID,
			process.env.ALGOLIA_KEY,
		);
		const index = client.initIndex('ocr_search');
		const encoded = event.headers.authorization.split(' ')[1];
		// decode it using base64
		const decoded = Buffer.from(encoded, 'base64').toString().split(':');
		const username = decoded[0];
		const password = decoded[1];

		if (
			username !== process.env.USERNAME ||
			password !== process.env.PASSWORD
		) {
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
				statusCode: 400,
				body: JSON.stringify({
					message: 'Invalid data',
				}),
			};
		}

		const res = await index.saveObject(
			{
				...data,
				createdAt: parseInt((new Date().getTime() / 1000).toString(), 10),
			},
			{ autoGenerateObjectIDIfNotExist: true },
		);

		return {
			statusCode: 200,
			body: JSON.stringify({
				message: 'Data indexed successfully',
				...res,
			}),
		};
	} catch (err) {
		console.error(err);

		return {
			statusCode: 500,
			body: JSON.stringify({
				message: `Internal server error`,
				error: err,
			}),
		};
	}
};

export { handler };
