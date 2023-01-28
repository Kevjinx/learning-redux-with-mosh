const store = require('./store')

const unsubscribe = store.subscribe(() => {
	console.log('Store changed!', store.getState());
})

store.dispatch({
	type: 'bugAdded',
	payload: {
		description: 'Bug1'
	}
})

//prevent memory leak by unsubscribing
unsubscribe();

store.dispatch({
	type: 'bugRemoved',
	payload: {
		id: 1
	}
})
