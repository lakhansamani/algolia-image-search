import React from 'react';
import { SearchBox } from 'react-instantsearch-dom';
import Logo from './Icons/Logo';
import FileTypeFilter from './FileTypeFilter';

const NavBar: React.FC = () => {
	return (
		<>
			<div className="flex justify-between w-full px-3 py-5	 fixed z-50 items-center flex-wrap bg-blue-500">
				<div className="w-full pb-5 lg:py-0 lg:w-auto">
					<a
						href="/"
						className="text-2xl lg:text-xl cursor-pointer font-bold flex items-center text-gray-900 justify-center"
					>
						<span className="-mt-1 text-white">
							<Logo height={25} width={25} />
						</span>
						<span className="ml-2 text-white">
							<span className="font-extralight">Image</span>Search
						</span>
					</a>
				</div>
				<div className="flex-1 pl-0 lg:pl-14 flex items-center justify-between">
					<div className="flex-1">
						<SearchBox
							autoFocus
							translations={{
								placeholder: 'Search content / name',
							}}
						/>
					</div>
					<div>
						<FileTypeFilter />
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
