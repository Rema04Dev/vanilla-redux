import { createStore } from 'redux';
import _ from 'lodash';

export default () => {
    const initialState = {
        todos: [],
        currentTask: '',
    }

    const todoReducer = (state = initialState, action) => {
        switch(action.type) {
            case 'ADD_TODO': {
                const todo = action.payload;
                return {
                    ...state,
                    todos: [...state.todos, todo],
                }
            }

            default: return state;
        }
    }

    const store = createStore(todoReducer);

    const elements = {
        formTodo: document.querySelector('#todo-form'),
        inputTodo: document.querySelector('#todo-input'),
        btnSubmit: document.querySelector('#todo-submit'),
        listTodo: document.querySelector('#todo-list'),
    };

    const todoItemEl = `
    <li class="list-group-item">
        <button type="button" id="todo-remove" class="btn-close"></button>
    </li>`;

    elements.formTodo.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const todoName = new FormData(evt.target).get('todo-name')
        const formattedTodo = {
            id: _.uniqueId(),
            title: todoName.trim(),
            priority: 'medium' // low, medium, high
        }
        store.dispatch({type: 'ADD_TODO', payload: formattedTodo})
        console.log(store.getState());

    })
};