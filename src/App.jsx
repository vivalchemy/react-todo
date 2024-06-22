import './App.css'
import TodoWrapper from '../components/TodoWrapper'
import TodoHeader from '../components/TodoHeader'

function App() {
  return (
    <div className="min-h-screen w-screen dark:bg-slate-950 grid place-items-center dark:text-white">
      <TodoHeader heading="Todo App" />
      <TodoWrapper />
    </div>
  )
}

export default App
