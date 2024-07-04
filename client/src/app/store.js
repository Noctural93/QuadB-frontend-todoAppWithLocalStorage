import {configureStore} from '@reduxjs/toolkit'
import todosReducer from '../features/todo/todoSlice'
import { saveState } from '../localStorage'

const store = configureStore({
    reducer: {
        todo: todosReducer
    },
});

store.subscribe(() => {
    saveState({
        todos: store.getState().todo
    });
});

export default store;