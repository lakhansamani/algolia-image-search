import React from 'react';
import { RefinementList } from 'react-instantsearch-dom';

const FileTypeFilter: React.FC = () => {
	const [isVisible, setIsVisible] = React.useState(false);
	const toggleState = () => {
		setIsVisible(!isVisible);
	};
	return (
		<>
			<div className="flex items-center justify-center ml-3">
				<div className="relative inline-block text-left dropdown">
					<div className="rounded-md shadow-sm">
						<button
							className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 py-3"
							type="button"
							aria-haspopup="true"
							aria-expanded="true"
							aria-controls="headlessui-menu-items-117"
							onClick={toggleState}
						>
							<span>Select File Type</span>
							<svg
								className="w-5 h-5 ml-2 -mr-1"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</div>
					<div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
						<div
							className={`absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
							aria-labelledby="headlessui-menu-button-1 ${isVisible ? 'block' : 'hidden'}`}
							id="headlessui-menu-items-117"
							role="menu"
						>
							<div className="px-5 py-3">
								<RefinementList attribute="fileType" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FileTypeFilter;
