import React from 'react';
import { SearchBox } from 'react-instantsearch-dom';
import Logo from './Icons/Logo';
import FileTypeFilter from './FileTypeFilter';

const NavBar: React.FC = () => {
	return (
		<>
			<div className="flex justify-between w-full p-3 fixed bg-blue-500 z-50 shadow-md items-center flex-wrap">
				<div className="w-full py-3 lg:py-0 lg:w-auto">
					<a
						href="/"
						className="text-lg cursor-pointer font-bold flex items-center text-white justify-center"
					>
						<span className="-mt-1">
							<Logo height={25} width={25} />
						</span>
						<span className="ml-2">
							<span className="font-light">Image</span>Search
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
