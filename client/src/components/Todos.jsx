import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeTodo, toggleCompleted, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {

  const todos = useSelector(state => state.todo.todos);

  console.log(todos)

  const dispatch = useDispatch();
  const [newText, setNewText] = useState('')
  const [focusedTodo, setFocusedTodo] = useState(null)

  const handleSaveClick = (id) => {
    dispatch(updateTodo({ id, text: newText }))
    setFocusedTodo(null)
    setNewText('')
  }

  const handleEditClick = (todo) => {
    setFocusedTodo(todo.id);
    setNewText(todo.text)
  }

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          {focusedTodo === item.id ? (
            <input 
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          ) : (
            <p style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.text}</p>
          )}
          <button 
            onClick={() => dispatch(toggleCompleted(item.id))}
          >
            {item.completed ? 'Undo' : 'Complete'}
          </button>
          <button 
            onClick={() => dispatch(removeTodo(item.id))}
          >
            Delete
          </button>
          {
            focusedTodo === item.id ? (
              <button onClick={() => handleSaveClick(item.id)}>save</button>
            ) : (
              <button onClick={() => handleEditClick(item)}>edit</button>
            )
          }
        </li>
      ))}
    </ul>
  )
}

export default Todos
