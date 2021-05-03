import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Content from './components/Content';

const App: React.FC = () => {
	return (
		<ToastProvider>
			<div className="h-screen w-screen flex">
				<Content />
			</div>
		</ToastProvider>
	);
};

export default App;
