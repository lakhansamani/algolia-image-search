import React from 'react';
import Logo from './Logo';

const SideBar: React.FC = () => {
	return (
		<div className="fixed lg:w-80 bg-gray-200 px-10 py-5 h-screen z-50 isolate sm:w-screen rounded">
			<div className="text-sm font-bold flex items-center">
				<Logo height={25} width={25} />{' '}
				<div className="ml-3">
					<span className="font-light">Image</span>Search
				</div>
			</div>
		</div>
	);
};

export default SideBar;
