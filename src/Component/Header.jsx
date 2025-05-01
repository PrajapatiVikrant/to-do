import React, { useState } from "react"
import { IoIosAdd } from "react-icons/io";
export default function Header(props){
     const [task,setTask] = useState('');

    function handleAddTask(){
       
       props.addTask(task,false);
       setTask('')
       alert("Task added successfully")
    }
    return (
        <header className="flex flex-col justify-between items-center   p-4 "> 
            <h1 className="text-3xl font-bold ">
               Task (To-Do)
            </h1>
            <section className="flex   my-2 w-fit border rounded-l-xl">
                <input className="outline-none p-1 w-[300px] text-2xl " type="text" value={task} placeholder="Enter new task" onChange={(e)=>setTask(e.target.value)} />
                <button className="border p-1 text-3xl hover:text-white hover:bg-black hover:border-none transition-all duration-500 ease-linear cursor-pointer" onClick={handleAddTask}><IoIosAdd /></button>
            </section>
        </header>
    )
}