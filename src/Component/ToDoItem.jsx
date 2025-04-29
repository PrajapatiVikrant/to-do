import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

export default function ToDoItem(){
    const [editStatus,setEditStatus] = useState(false)
    return (
        <div>
         {editStatus?(
             <article className="flex shadow-xl shadow-blue-400   items-center rounded-2xl bg-white p-3 text-2xl">
             
              <input className="border p-1 w-[90%] outline-none" type="text" placeholder="Enter new value" />
             <button className="border p-1 hover:border-none hover:bg-red-700  hover:text-white hover:font-bold" onClick={()=>setEditStatus(false)}>Save</button>
            
         </article>
         ):(

        <article className="flex shadow-xl shadow-blue-400  justify-between items-center rounded-2xl bg-white p-3 text-2xl">
            <section className="flex items-center gap-3">
            <input className="w-[20px] h-[20px]"  type="checkbox" />
            <p>Play foot ball</p>
            </section>
            <section className="flex gap-3">
            <button className="p-1 border border-white hover:border-black cursor-pointer transition-all duration-500 ease-linear" onClick={()=>setEditStatus(true)}>
                <MdEdit/>
            </button>
            <button className="p-1 border border-white hover:border-black cursor-pointer transition-all duration-500 ease-linear">
                <FaTrash/>
            </button>
            </section>
        </article>
         )}
        </div>
    )
}