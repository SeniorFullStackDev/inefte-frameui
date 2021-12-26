import React from 'react';
import logo from 'assets/logo.svg';
import './App.css';
import StatusBar from 'components/statusbar';
import AppRouter from 'route';
import store from 'store';
import { Provider } from 'react-redux';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />        
				</header>
				<div className='App-body'>
					<AppRouter />
				</div>
				<footer className='App-footer'>
					<StatusBar />
				</footer>
			</div>
		</Provider>
	);
}

export default App;
