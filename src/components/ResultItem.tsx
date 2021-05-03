import React from 'react';
import { Highlight } from 'react-instantsearch-dom';

const ResultItem: React.FC<{ hit: any }> = ({ hit }) => {
	return (
		<article className="bg-white p-5 rounded-lg m-5 border-gray-200 border-2 resultItem">
			<div className="flex justify-between items-center flex-wrap">
				<h1 className="text-gray-800 text-bold text-2xl uppercase">
					<Highlight attribute="fileName" hit={hit} />
				</h1>
				<span className="text-gray-500">
					<b>Uploaded at: </b>
					{new Date(hit.createdAt * 1000).toDateString()}
				</span>
			</div>
			<p className="text-gray-600 text-bold py-3">
				<Highlight attribute="text" hit={hit} />
			</p>
		</article>
	);
};

export default ResultItem;
