import React, { useEffect, useState } from 'react'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

function Todo() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [error , setErrors] = useState('');
    const [loading, setLoading] = useState(false);
    console.log(todos)

    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:4000/api/v1/todo/get-all-todos")
        .then(response => response.json())
        .then(data => {
            setLoading(false)
            setTodos(data.data)
        })
        .catch(error => {
            setLoading(false)
            setErrors(error)
            console.log(error)
        })
    },[])

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
    <div className="w-full max-w-md p-6 rounded-lg shadow-lg glassmorphic">
      <h1 className="mb-6 text-2xl font-bold text-center text-white">Todo List</h1>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 p-2 text-black rounded-lg outline-none focus:ring-2 focus:ring-purple-300 bg-white/70"
        />
        <button
          
          className="p-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          <FaPlus />
        </button>
      </div>
      <ul className="space-y-3">
        {todos && todos.map(({_id , content}) => (
          <li
            key={_id}
            className="flex items-center justify-between p-3 rounded-lg shadow-sm bg-white/70 hover:shadow-md"
          >
            <span className="text-black break-words">{content}</span>
            <div className="flex items-center gap-2">
              <button
                
                className="text-blue-500 hover:text-blue-700"
              >
                <AiOutlineEdit size={20} />
              </button>
              <button
                
                className="text-red-500 hover:text-red-700"
              >
                <AiOutlineDelete size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Todo
