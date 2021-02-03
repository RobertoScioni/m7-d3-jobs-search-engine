export default function (state = {}, action) {
	switch (action.type) {
		case "ADD_JOB_TO_FAVS":
			return {
				...state,
				favs: {
					...state.cart,
					jobs: state.favs.jobs.concat(action.payload),
				},
			}
		case "REMOVE_JOB_FROM_FAVS":
			return {
				...state,
				favs: {
					...state.cart,
					jobs: [
						...state.favs.jobs.filter((bookId) => bookId !== action.payload),
					],
				},
			}

		case "SELECT_JOB_TO_VIEW":
			return {
				...state,
				selected: {
					...state.job,
					job: action.payload,
				},
			}
		default:
			return state
	}
}
