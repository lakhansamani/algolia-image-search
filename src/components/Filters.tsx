import React from 'react';
import { RefinementList } from 'react-instantsearch-dom';
import FilterIcon from './Icons/FilterIcon';

const Filters: React.FC = () => {
	const [showModal, setShowModal] = React.useState(false);

	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<>
			<button
				className="fixed bottom-2 left-2 rounded-full bg-blue-500 p-5 flex items-center hover:bg-blue-400 hover:shadow-sm text-white uppercase font-bold lg:static lg:rounded lg:p-3 lg:mx-1"
				type="button"
				onClick={() => setShowModal(true)}
			>
				<span>
					<FilterIcon height={20} width={20} />
				</span>
				<span className="hidden lg:block lg:ml-2">Apply Filters</span>
			</button>
			<div className={showModal ? 'block' : 'hidden'}>
				<div
					className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					style={{
						background: 'rgba(0,0,0,0.6)',
					}}
				>
					<div
						className="relative w-auto my-6 mx-auto max-w-3xl"
						style={{ minWidth: '400px' }}
					>
						{/*content*/}
						<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-gray-800">
							{/*header*/}
							<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
								<h3 className="text-xl font-semibold">Filter By File Type</h3>
								<span
									className=" text-gray-800 h-6 w-6 text-2xl cursor-pointer"
									onClick={handleClose}
								>
									&times;
								</span>
							</div>
							{/*body*/}

							<div className="relative p-6 flex-auto">
								<div className="py-5 h-full bg-white px-2">
									<div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
										<div className="md:flex">
											<div className="w-full p-3">
												<RefinementList attribute="fileType" />
											</div>
										</div>
									</div>
								</div>
							</div>

							{/*footer*/}
							<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
								<button
									className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:opacity-50"
									type="button"
									onClick={handleClose}
								>
									{`Apply Filters`}
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
			</div>
		</>
	);
};

export default Filters;
