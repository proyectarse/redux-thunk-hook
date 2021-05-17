import { ADD_EXAMPLE, FETCH_EXAMPLE } from './types';

export const addExample = () => ({
	type: ADD_EXAMPLE,
	payload: 'agrega la data sync',
});

// formato con Thunk, Async y dispatch
export const fetchExample = (id) => {
	return async (dispatch) => {
		try {
			const res = await fetch(
				`http://jsonplaceholder.typicode.com/users/${id}`
			);
			const { name } = await res.json();

			dispatch({
				type: FETCH_EXAMPLE,
				payload: name,
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	};
};
