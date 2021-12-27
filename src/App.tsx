import React from 'react';
import logo from 'assets/logo.svg';
import './App.css';
import AppRouter from 'route';
import store from 'store';
import { Provider } from 'react-redux';
import AuthProvider from 'auth';

function App() {
	return (
		<Provider store={store}>
			<AuthProvider>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />        
					</header>
					<div className='App-body'>
						<AppRouter />
					</div>
				</div>
			</AuthProvider>
		</Provider>
	);
}

export default App;
