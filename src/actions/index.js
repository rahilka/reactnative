export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};	// action !
}; // the action is wrapped into a function called Action Creator
