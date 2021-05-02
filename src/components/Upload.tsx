import React from 'react';
import Tesseract from 'tesseract.js';
import { useToasts } from 'react-toast-notifications';

const Upload: React.FC = () => {
	const [showModal, setShowModal] = React.useState(false);
	const [file, setFile] = React.useState<File | null>(null);
	const [loading, setLoading] = React.useState(false);

	const { addToast } = useToasts();

	const handleSubmit = async () => {
		if (!file) {
			addToast(`Please select file`, {
				appearance: 'error',
				autoDismiss: true,
			});
			return;
		}

		console.log(file.type.includes('image'));

		if (!file.type.includes('image') && !file.type.includes('pdf')) {
			addToast(`Invalid file type`, {
				appearance: 'error',
				autoDismiss: true,
			});
			return;
		}

		setLoading(true);

		try {
			const worker = Tesseract.createWorker({
				// logger: function (m) {
				// 	console.log(m);
				// },
				/*
				 * As there is no indexedDB in earlier version
				 * of Edge, here we disable cache.
				 */
				cacheMethod: 'none',
			});
			await worker.load();
			await worker.loadLanguage('eng');
			await worker.initialize('eng');
			const data = await worker.recognize(file);
			await worker.terminate();

			const header = `Basic UGdxdE0zMFNqZTpiYjU0MmNjYS1hYjc5LTExZWItYmNiYy0wMjQyYWMxMzAwMDI=`;
			const url = `https://algolia-image-search.netlify.app/.netlify/functions/index_ocr_data`;
			const res = await fetch(url, {
				body: JSON.stringify({
					body: data.data.text,
					fileName: file.name,
					fileType: file.type,
				}),
				headers: {
					'Content-Type': 'application/json',
					Authorization: header,
				},
				method: 'POST',
			});

			const json = await res.json();
			addToast(json.message, {
				appearance: 'info',
				autoDismiss: true,
			});
			setLoading(false);
			setFile(null);
			setShowModal(false);
		} catch (err) {
			setLoading(false);
			addToast(`Something went wrong please try again`, {
				appearance: 'error',
				autoDismiss: true,
			});
		}
	};

	return (
		<>
			<button
				className="bg-white hover:bg-gray-200 font-bold text-gray-800 text-xs px-6 py-3 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
				type="button"
				onClick={() => setShowModal(true)}
			>
				Upload File
			</button>
			{showModal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
						style={{
							background: 'rgba(0,0,0,0.6)',
						}}
					>
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-gray-800">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-xl font-semibold">
										Upload and process file
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-gray-900 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-gray-900 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}

								<div className="relative p-6 flex-auto">
									<div className="py-5 h-full bg-white px-2">
										<div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
											<div className="md:flex">
												<div className="w-full p-3">
													<div className="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
														<div className="absolute">
															<div className="flex flex-col items-center">
																{' '}
																<i className="fa fa-folder-open fa-4x text-blue-700"></i>{' '}
																<span className="block text-gray-400 font-normal">
																	{file ? file.name : 'Attach you files here'}
																</span>{' '}
															</div>
														</div>{' '}
														<input
															type="file"
															className="h-full w-full opacity-0"
															name="file input"
															accept="image/*,.pdf"
															onChange={(e) => {
																if (e.target.files && e.target.files.length) {
																	setFile(e.target.files[0]);
																}
															}}
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:opacity-50"
										type="button"
										disabled={!file || loading}
										onClick={handleSubmit}
									>
										{loading ? `Processing file...` : `Save Changes`}
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};

export default Upload;
