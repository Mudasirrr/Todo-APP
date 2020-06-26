function Reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            if (!action.payload) {
                return state;
            }
            if (state.todos.includes(action.payload)) {
                return state;
            }
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
            case "COMPLETE":
                return {
                    ...state,
                    todos: state.todos.filter(t => t !== action.payload)
                }

                default:
                    return state;

    }
}
export default Reducer;