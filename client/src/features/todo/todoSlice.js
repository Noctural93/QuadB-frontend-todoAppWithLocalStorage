import {createSlice, nanoid} from '@reduxjs/toolkit'
import { loadState } from '../../localStorage';

const savedData = loadState().todos.todos;

console.log(savedData)

const initialState = {
    todos: savedData
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((item) => item.id === action.payload.id ? {...item, text: action.payload.text} : item)
        },
        toggleCompleted: (state, action) => {
            state.todos = state.todos.map((item) => item.id === action.payload ? {...item, completed: !item.completed} : item)
        }
    }
});

export const {addTodo, removeTodo, updateTodo, toggleCompleted} = todoSlice.actions

export default todoSlice.reducer