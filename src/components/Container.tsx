import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
	InstantSearch,
	CurrentRefinements,
	Stats,
} from 'react-instantsearch-dom';
import InfiniteHits from './InfiniteHits';
import NavBar from './NavBar';
import LoadingIndicator from './LoadingIndicator';
import Upload from './Upload';

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
					<NavBar />
					<div className="flex justify-center mt-40 lg:mt-28 flex-col items-center">
						<div className="flex">
							<CurrentRefinements clearsQuery />
							<Stats />
						</div>
						<LoadingIndicator>
							{({ loading }: { loading: boolean }) => (
								<InfiniteHits loading={loading} />
							)}
						</LoadingIndicator>
					</div>
				</InstantSearch>
				<Upload onSubmit={() => setShouldRefresh(true)} />
			</div>
		</>
	);
};

export default Container;
