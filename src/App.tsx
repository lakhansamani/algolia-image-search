import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Container from './components/Container';

const App: React.FC = () => {
	return (
		<ToastProvider>
			<div className="h-screen w-screen flex">
				<Container />
			</div>
		</ToastProvider>
	);
};

export default App;
