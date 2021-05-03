import React from 'react';
import Upload from './Upload';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';
import InfiniteHits from './InfiniteHits';
import Logo from './Logo';
import Filters from './Filters';

const searchClient = algoliasearch(
	'59NBO13TUB',
	'2964db31941ed2fe1a07efbca335dd21',
);

const Content: React.FC = () => {
	const [shouldRefresh, setShouldRefresh] = React.useState(false);
	React.useEffect(() => {
		const refresh = setTimeout(() => {
			if (shouldRefresh) {
				console.log('boom algolia cached refreshed');

				setShouldRefresh(false);
			}
		}, 1000);

		return () => clearTimeout(refresh);
	}, [shouldRefresh]);
	return (
		<>
			<div className="overflow-y-auto overflow-x-hidden w-screen h-screen">
				<InstantSearch
					indexName="ocr_search"
					searchClient={searchClient}
					refresh={shouldRefresh}
				>
					<div className="flex justify-between w-full p-3 fixed bg-indigo-500 z-50 shadow-md">
						<a
							href="/"
							className="text-lg cursor-pointer font-bold flex items-center text-white"
						>
							<Logo height={25} width={25} />{' '}
							<span className="ml-3">
								<span className="font-light">Image</span>Search
							</span>
						</a>
						<SearchBox
							autoFocus
							translations={{
								placeholder: 'Search image content / image name',
							}}
						/>
						<div className="flex">
							<Filters />
							<Upload
								onSubmit={() => {
									setShouldRefresh(true);
								}}
							/>
						</div>
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
