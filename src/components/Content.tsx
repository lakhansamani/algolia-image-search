import React from 'react';
import Upload from './Upload';

const Content: React.FC = () => {
	return (
		<div className="flex justify-between w-full p-3">
			<input
				type="text"
				placeholder="Search..."
				className="focus:outline-none focus:ring focus:border-blue-300 p-2 border border-gray-300 rounded w-full mr-3"
			/>
			<Upload />
		</div>
	);
};

export default Content;
