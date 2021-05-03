import React from 'react';
import Upload from './Upload';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';
import InfiniteHits from './InfiniteHits';
import Logo from './Logo';

const searchClient = algoliasearch(
	'59NBO13TUB',
	'2964db31941ed2fe1a07efbca335dd21',
);

const Content: React.FC = () => {
	return (
		<>
			<div className="overflow-y-auto overflow-x-hidden w-screen h-screen">
				<InstantSearch indexName="ocr_search" searchClient={searchClient}>
					<div className="flex justify-between w-full p-3 fixed bg-indigo-500 z-50 shadow-md">
						<div className="text-sm font-bold flex items-center text-white">
							<Logo height={25} width={25} />{' '}
							<div className="ml-3">
								<span className="font-light">Image</span>Search
							</div>
						</div>
						<SearchBox
							autoFocus
							translations={{
								placeholder: 'Search image content / image name',
							}}
						/>
						<Upload />
					</div>
					<div
						className="flex justify-center mt-20"
						style={{ height: 'calc(100vh - 30px)' }}
					>
						<div style={{ flex: '0.7' }}>
							<InfiniteHits />
						</div>
					</div>
				</InstantSearch>
			</div>
		</>
	);
};

export default Content;
