import React from 'react';
import Tesseract from 'tesseract.js';
import { useToasts } from 'react-toast-notifications';
import UploadIcon from './Icons/UploadIcon';

const Upload: React.FC<{ onSubmit?: () => void }> = ({ onSubmit }) => {
	const [showModal, setShowModal] = React.useState(false);
	const [file, setFile] = React.useState<File | null>(null);
	const [loading, setLoading] = React.useState(false);

	const { addToast } = useToasts();

	const handleClose = () => {
		setLoading(false);
		setFile(null);
		setShowModal(false);
	};

	const handleSubmit = async () => {
		if (!file) {
			addToast(`Please select file`, {
				appearance: 'error',
				autoDismiss: true,
			});
			return;
		}

		if (!file.type.includes('image')) {
			addToast(`Invalid file type`, {
				appearance: 'error',
				autoDismiss: true,
			});
			return;
		}

		setLoading(true);

		try {
			const worker = Tesseract.createWorker({
				logger: (m) => {
					console.log(m);
				},
				cacheMethod: 'none',
			});
			await worker.load();
			await worker.loadLanguage('eng');
			await worker.initialize('eng');
			const data = await worker.recognize(file);
			await worker.terminate();

			if (!data.data.text.trim()) {
				addToast(`Image does not include text`, {
					appearance: 'error',
					autoDismiss: true,
				});
				return;
			}

			const header = `Basic UGdxdE0zMFNqZTpiYjU0MmNjYS1hYjc5LTExZWItYmNiYy0wMjQyYWMxMzAwMDI=`;
			const url = `https://algolia-image-search.netlify.app/.netlify/functions/index_ocr_data`;
			const res = await fetch(url, {
				body: JSON.stringify({
					text: data.data.text,
					fileName: file.name,
					fileType: file.type,
				}),
				headers: {
					'Content-Type': 'application/json',
					Authorization: header,
				},
				method: 'POST',
			});

			const json: Record<string, string> = await res.json();
			if (res.status !== 200) {
				throw new Error(json.message);
			}

			addToast(json.message, {
				appearance: 'success',
				autoDismiss: true,
			});
			setTimeout(() => {
				handleClose();

				if (onSubmit) {
					onSubmit();
				}
			}, 3000);
		} catch (err) {
			handleClose();
			addToast(`Something went wrong please try again.`, {
				appearance: 'error',
				autoDismiss: true,
			});
		}
	};

	return (
		<>
			<button
				className="fixed bottom-2 right-2 rounded-full bg-blue-500 p-5 flex items-center hover:bg-blue-400 hover:shadow-sm text-white uppercase font-bold lg:rounded-full"
				type="button"
				onClick={() => setShowModal(true)}
			>
				<span>
					<UploadIcon height={20} width={20} />
				</span>
				<span className="hidden lg:block lg:ml-2">Upload file</span>
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
															accept="image/*"
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
										onClick={handleClose}
									>
										Close
									</button>
									<button
										className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:opacity-50"
										type="button"
										disabled={loading}
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
