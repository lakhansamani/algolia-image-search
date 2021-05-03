import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';

const LoadingIndicator: React.FC<{
	isSearchStalled: boolean;
	children: any;
}> = ({ isSearchStalled, children }) => {
	return <>{children({ loading: isSearchStalled })}</>;
};

export default connectStateResults(LoadingIndicator);
