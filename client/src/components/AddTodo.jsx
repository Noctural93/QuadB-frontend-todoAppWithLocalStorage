import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

const AddTodo = () => {
  const [todoText, setTodoText] = useState('')

  const dispatch = useDispatch()

  const onsubmitTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText('');
  }

  return (
    <form onSubmit={onsubmitTodo}>
      <input 
        type='text'
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo
