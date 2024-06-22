import { useState } from "react"

const Todo = ({ text, status, id, removeTodo }) => {
  const [todoStatus, setTodoStatus] = useState(status)
  return (
    <div className="flex gap-2 bg-blue-100 rounded-lg pt-2 pb-2 pl-4 pr-4 cursor-pointer mb-4 items-center" onClick={() => setTodoStatus(!todoStatus)}>
      <div className={`aspect-square p-3  border-4 rounded-lg ${todoStatus ? "bg-green-500 border-green-500" : "bg-white border-blue-500"}`}>
      </div>
      <div className={`text-black text-xl ${todoStatus ? "line-through" : ""}`} >
        {text} {id}
      </div >
      <svg className="rounded-md bg-white ml-auto" onClick={() => { removeTodo(id) }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" ><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
    </div>
  )
}

export default Todo
