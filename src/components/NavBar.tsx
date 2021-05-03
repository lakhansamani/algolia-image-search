import React from 'react';
import { SearchBox } from 'react-instantsearch-dom';
import Upload from './Upload';
import Filters from './Filters';
import Logo from './Icons/Logo';

const NavBar: React.FC<{ setShouldRefresh: (arg: boolean) => void }> = ({
	setShouldRefresh,
}) => {
	return (
		<div className="flex justify-between w-full p-3 fixed bg-blue-500 z-50 shadow-md items-center">
			<a
				href="/"
				className="text-lg cursor-pointer font-bold flex items-center text-white"
			>
				<span className="-mt-1">
					<Logo height={25} width={25} />
				</span>
				<span className="ml-2">
					<span className="font-light">Image</span>Search
				</span>
			</a>
			<div className="mx-0 lg:mx-5 flex-1 pl-14">
				<SearchBox
					autoFocus
					translations={{
						placeholder: 'Search content / name',
					}}
				/>
			</div>
			<div className="flex items-center box-border lg:ml-2">
				<Filters />
				<Upload
					onSubmit={() => {
						setShouldRefresh(true);
					}}
				/>
			</div>
		</div>
	);
};

export default NavBar;
