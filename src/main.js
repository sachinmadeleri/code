import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import thunk from 'redux-thunk';
import reducer from './reducers';

const customMiddleWare = (store) => (next) => (action) => {
	console.log('Logging Middleware triggered:', action);
	next(action);
};
const store = createStore(reducer, applyMiddleware(customMiddleWare, thunk));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
