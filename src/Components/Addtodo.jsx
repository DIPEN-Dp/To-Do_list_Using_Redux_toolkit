import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/Todo/todoslice'

function Addtodo() {

  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (input.trim() === '') return
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <form onSubmit={addTodoHandler} className="flex gap-3 mb-6 w-full">
      <input
        type="text"
        className="flex-grow bg-slate-800/60 rounded-xl border border-slate-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-base outline-none text-gray-100 py-3 px-5 transition-all duration-300 ease-in-out placeholder-gray-400 shadow-inner"
        placeholder="What needs to be done?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 border-0 py-3 px-8 focus:outline-none hover:scale-105 active:scale-95 rounded-xl text-lg font-semibold shadow-lg shadow-purple-500/30 transition-all duration-300 flex-shrink-0"
      >
        Add
      </button>
    </form>
  )
}

export default Addtodo