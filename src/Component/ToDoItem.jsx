import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

export default function ToDoItem(props){
    const [editStatus,setEditStatus] = useState(false)
    const [taskStatus,setTaskStatus] = useState(props.task.status);
    const [task,setTask] = useState(props.task.task);
   
    function handleEdit(){
        setEditStatus(false);
        props.editTask(props.task.id,task) 
    }


  function handleTaskStatus(){
        const status = taskStatus?false:true
        setTaskStatus(taskStatus?false:true);
        props.mark(props.task.id,status);
    }


  function handleDelete(){
    props.deleteTask(props.task.id)
    setTask(props.task.task);
    location.reload()
   
    
   
  }

    return (
        <div>
         {editStatus?(
             <article className="flex shadow-xl shadow-blue-400   items-center rounded-2xl bg-white p-3 text-2xl">
             
              <input className="border p-1 w-[90%] outline-none" value={task} type="text" placeholder="Enter new value"  onChange={(e)=>setTask(e.target.value)}/>
             <button className="border p-1 hover:border-none hover:bg-red-700  hover:text-white hover:font-bold" onClick={handleEdit}>Save</button>
            
         </article>
         ):(

        <article className="flex shadow-xl shadow-blue-400  justify-between items-center rounded-2xl bg-white p-3 text-2xl">
            <section className="flex items-center gap-3">
            <input className="w-[25px] h-[25px]" checked={taskStatus} onChange={handleTaskStatus}  type="checkbox" />
            <p>{task}</p>
            </section>
            <section className="flex gap-3">
            <button className="p-1 border border-white hover:border-black cursor-pointer transition-all duration-500 ease-linear" onClick={()=>setEditStatus(true)}>
                <MdEdit/>
            </button>
            <button className="p-1 border border-white hover:border-black cursor-pointer transition-all duration-500 ease-linear" onClick={handleDelete}>
                <FaTrash/>
            </button>
            </section>
        </article>
         )}
        </div>
    )
}