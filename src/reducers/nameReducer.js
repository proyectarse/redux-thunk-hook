import { ADD_EXAMPLE, FETCH_EXAMPLE } from '../actions/types';

const INITIAL_STATE = {
	examples: 'primero',
	name: '',
};

const nameReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_EXAMPLE:
			return {
				...state,
				examples: action.payload,
			};
		case FETCH_EXAMPLE:
			return {
				...state,
				name: action.payload,
			};
		default:
			return state;
	}
};

export default nameReducer;
