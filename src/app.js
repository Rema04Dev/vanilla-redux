import { createStore } from 'redux';
export default () => {
    const initialState = {
        todos: [],
        currentTask: '',
    }

    const todoReducer = (state = initialState, action) => {
        switch(action.type) {
            case 'ADD_TODO': {
                const { todo } = action.payload;
                return {
                    ...state,
                    todos: [...state.todos, todo],
                }
            }

            default: return state;
        }
    }

    const store = createStore(todoReducer);
    console.log(store.getState());
};