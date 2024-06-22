import { useState } from "react"

export default function TodoAdd({ addTodo }) {

  let [newTodo, setNewTodo] = useState("")
  return <div className="mt-auto gap-2 flex flex-col">
    <input type="text" placeholder="New Todo" value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} onKeyDown={(e) => { if (e.key === "Enter") { addTodo(newTodo); setNewTodo(""); } }} className="border-blue-500 border-2 rounded-md p-2 text-black  w-full cursor-text" />
    <button type="button" className="w-full p-4 pt-2 pb-2 text-black bg-purple-500 text-xl rounded-md" onClick={() => { addTodo(newTodo); setNewTodo("") }} >Add todo</button>
  </div >
}
