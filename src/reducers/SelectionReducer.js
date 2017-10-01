export default (state = null, action) => {
	// return null; //we do not have row selected by default
	switch (action.type) {
		case 'select_library':
			return action.payload;
		default: 
			return state;
	}
};
