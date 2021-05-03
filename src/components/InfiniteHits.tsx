import React from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import ResultItem from './ResultItem';

const InfiniteHits: React.FC<{
	hits: {
		text: string;
		fileType: string;
		fileName: string;
		objectID: string;
	}[];
	hasPrevious: boolean;
	refinePrevious: () => void;
	hasMore: boolean;
	refineNext: () => void;
}> = ({ hits, hasPrevious, refinePrevious, hasMore, refineNext }) => (
	<div className="mb-24 mt-5 w-full lg:max-w-6xl">
		{hasPrevious && (
			<div className="flex justify-center">
				<button
					disabled={!hasPrevious}
					onClick={refinePrevious}
					className="uppercase text-blue-500 text-sm font-extrabold"
				>
					Show previous
				</button>
			</div>
		)}
		{Boolean(hits.length) ? (
			hits.map((hit) => <ResultItem hit={hit} key={hit.objectID} />)
		) : (
			<h1 className="text-center text-2xl font-bold text-gray-600">
				:( No Results found
			</h1>
		)}
		{hasMore && (
			<div className="flex justify-center">
				<button
					disabled={!hasMore}
					onClick={refineNext}
					className="bg-blue-500 px-4 py-2 rounded uppercase text-white hover:bg-blue-400"
				>
					Show more
				</button>
			</div>
		)}
	</div>
);

const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);

export default CustomInfiniteHits;
