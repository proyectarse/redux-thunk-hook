import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

// para habilitar el debug the redux
let composeEnhancers = compose;

if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// al store le paso el reducerpersistido, en lugar del reducer
const store = createStore(
	reducers,
	{},
	composeEnhancers(applyMiddleware(thunk))
);

export { store };
