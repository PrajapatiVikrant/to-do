import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

export default function ToDoItem({ id, task, status, deleteTask,editTask, editStatus }) {
    const [editOpen, setEditOpen] = useState(false)
    const [editValue,setEditValue] = useState(task)
    const [statusValue,setStatusValue] = useState(status)
     

   function handleStatus(){
       const value = statusValue?false:true;
       setStatusValue(value)
       editStatus(id,value)
   }

    function handleEdit(){
        editTask(id,editValue);
        setEditOpen(false)
    }

    return (
        <article className="flex w-[80%] justify-between bg-green-50 text-2xl p-2 m-3">



            {editOpen ? (
                <>
                    <section className="flex">
                       <input className="outline-none border-b-2" type="text" value={editValue} onChange={(e)=>setEditValue(e.target.value)} />
                    </section>
                    <section>
                        <button onClick={handleEdit} className="text-xl text-white bg-green-500 p-1 rounded cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">Save</button>
                       
                    </section>
                </>
            ) : (
                <>
                    <section className="flex items-center justify-center">
                        <input className="mx-2 h-[20px] w-[20px] cursor-pointer" type="checkbox" checked={statusValue} onChange={handleStatus} />
                        <p>{task}</p>
                    </section>
                    <section>
                        <button className="bg-blue-500 cursor-pointer text-white p-1 mx-2 rounded shadow-md hover:shadow-xl transition-shadow duration-300" onClick={()=>setEditOpen(true)}><MdEdit /></button>
                        <button className="bg-red-500 cursor-pointer text-white p-1 mx-2 rounded shadow-md hover:shadow-xl transition-shadow duration-300" onClick={() => deleteTask(id)}><FaTrash /></button>
                    </section>
                </>
            )}

        </article>
    )

    return
}