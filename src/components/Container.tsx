import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import InfiniteHits from './InfiniteHits';
import NavBar from './NavBar';

const searchClient = algoliasearch(
	'59NBO13TUB',
	'2964db31941ed2fe1a07efbca335dd21',
);

const Container: React.FC = () => {
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
					<NavBar setShouldRefresh={setShouldRefresh} />
					<div className="flex justify-center mt-20">
						<InfiniteHits />
					</div>
				</InstantSearch>
			</div>
		</>
	);
};

export default Container;
