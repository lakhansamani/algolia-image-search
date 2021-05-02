import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import SideBar from './components/SideBar';
import Content from './components/Content';

const App: React.FC = () => {
	return (
		<ToastProvider>
			<div className="h-screen overflow-hidden w-screen bg-gray-800 flex">
				<SideBar />
				<div className="flex flex-col items-center  min-h-screen relative lg:ml-80 w-full sm:w-screen text-white">
					<Content />
				</div>
			</div>
		</ToastProvider>
	);
};

export default App;
