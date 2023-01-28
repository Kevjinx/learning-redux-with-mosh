const { produce } = require('immer');
const { BUG_ADDED, BUG_REMOVED } = require('./actionTypes');

let lastId = 0;

//pure function = no side effects
const reducer = (state = [], action) =>  {
	switch (action.type) {
		case BUG_ADDED:
			return [
				...state,
				{
					id: ++lastId,
					description: action.payload.description,
					resolved: false
				}
			];
		case BUG_REMOVED:
			return state.filter(bug => bug.id !== action.payload.id);
		default:
			return state;
	}
}

// const reducerImmer = (state = [], action) => {
// 	switch (action.type) {
// 		case 'bugAdded':
// 			return produce(state, draftState => {
// 				draftState.push({
// 					id: ++lastId,
// 					description: action.payload.description,
// 					resolved: false
// 				})
// 			})
// 		case 'bugRemoved':
// 			return produce(state, draftState => {
// 				const index = draftState.findIndex(bug => bug.id === action.payload.id);
// 				draftState.splice(index, 1);
// 			})
// 	}
// }

module.exports = reducer;