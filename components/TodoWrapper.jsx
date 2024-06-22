import { useState } from "react"
import Todo from "./Todo"
import TodoAdd from "./TodoAdd"

const TodoWrapper = () => {
  let [listOfTodos, setListOfTodos] = useState([
    {
      "text": "Pick up dry cleaning",
      "status": false,
      "id": 1
    },
    {
      "text": "Schedule dentist appointment (cleaning)",
      "status": false,
      "id": 2
    },
    {
      "text": "Reply to Sarah's email about meeting",
      "status": true,
      "id": 3
    },
    {
      "text": "Water the plants",
      "status": true,
      "id": 4
    }
  ])

  function removeTodo(id) {
    setListOfTodos(listOfTodos.filter((todo) => todo.id != id))
  }

  function addTodo(text) {
    if (text === "") return
    setListOfTodos([...listOfTodos, { "text": text, "status": false, "id": listOfTodos.length ? listOfTodos[listOfTodos.length - 1].id + 1 : 1 }])
  }

  return (
    <div className="bg-white p-4 shadow-amber shadow-xl min-h-[500px] max-h-screen overflow-y-auto min-w-[400px] max-w-[500px] rounded-lg flex flex-col">
      {listOfTodos.map((todo) =>

        <Todo text={todo.text} status={todo.status} id={todo.id} removeTodo={removeTodo} key={todo.id} />
      )}
      <TodoAdd addTodo={addTodo} />
    </div>
  )
}

export default TodoWrapper
