import React from 'react';
import { Highlight } from 'react-instantsearch-dom';

const ResultItem: React.FC<{ hit: any }> = ({ hit }) => {
	return (
		<article className="bg-white p-5 rounded m-5 border-gray-500 border-2 resultItem">
			<h1 className="text-gray-800 text-bold text-2xl uppercase">
				<Highlight attribute="fileName" hit={hit} />
			</h1>
			<p className="text-gray-600 text-bold py-3">
				<Highlight attribute="text" hit={hit} />
			</p>
		</article>
	);
};

export default ResultItem;
