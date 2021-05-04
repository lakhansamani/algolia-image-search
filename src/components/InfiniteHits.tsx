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
	loading: boolean;
}> = ({ hits, hasPrevious, refinePrevious, hasMore, refineNext, loading }) => (
	<div className="mb-20 w-full lg:max-w-6xl">
		{loading ? (
			<div className="flex flex-col items-center justify-center">
				<div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
				<h2 className="text-center text-gray-700 text-xl font-semibold">
					Loading...
				</h2>
				<p className="w-1/3 text-center text-gray-500">
					This may take a few seconds, please don't close this page.
				</p>
			</div>
		) : (
			<>
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
						Sorry! No Results found
					</h1>
				)}
				{hasMore && (
					<div className="flex justify-center mt-5">
						<button
							disabled={!hasMore}
							onClick={refineNext}
							className="bg-blue-500 px-4 py-2 rounded uppercase text-white hover:bg-blue-400"
						>
							Show more
						</button>
					</div>
				)}
			</>
		)}
	</div>
);

const CustomInfiniteHits = connectInfiniteHits(InfiniteHits);

export default CustomInfiniteHits;
