import React, { useState } from "react"
import { IoIosAdd } from "react-icons/io";
export default function Header({addTask}){
    const [taskInput,setTaskInput] = useState('');
    
   function handleAdd(){
    addTask(taskInput,false)
    setTaskInput('')
   }


    return (
        <header className="mt-5">
            <h1 className="font-bold text-3xl border-b-2 p-2 w-fit">TASK TODO LIST</h1>
            <section className="flex border w-[80%] p-3 m-2">
            <input className=" outline-none  text-xl  w-[100%] "  type="text" value={taskInput} onChange={((e)=>setTaskInput(e.target.value))} placeholder="Write new task here...." />
            <button className="flex items-center shadow-md hover:shadow-lg transition-shadow duration-300 bg-green-500 p-1.5 pr-2.5 rounded cursor-pointer text-white text-xl" onClick={handleAdd}><IoIosAdd className="text-2xl" /> ADD</button>
            </section>
        </header>
    )
}