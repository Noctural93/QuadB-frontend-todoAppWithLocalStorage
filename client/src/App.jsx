import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className='todo-container'>
      <h1>Todo</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
