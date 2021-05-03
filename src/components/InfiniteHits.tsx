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
	<div className="mb-24">
		{hasPrevious && (
			<button
				disabled={!hasPrevious}
				onClick={refinePrevious}
				className="bg-green-500 px-4 py-2 rounded uppercase text-white text-sm hover:bg-green-400 ml-5"
			>
				Show previous
			</button>
		)}
		{hits.map((hit) => (
			<ResultItem hit={hit} key={hit.objectID} />
		))}
		{hasMore && (
			<button
				disabled={!hasMore}
				onClick={refineNext}
				className="bg-green-500 px-4 py-2 rounded uppercase text-white text-sm hover:bg-green-400 ml-5"
			>
				Show more
			</button>
		)}
	</div>
);

const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);

export default CustomInfiniteHits;
