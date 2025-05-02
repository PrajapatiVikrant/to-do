import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({taskList, deleteTask,editTask,editStatus}){
   

    
    return (
        <main className="mt-[40px]">
            {taskList.map((item)=>{
                 return <ToDoItem id={item.id} task={item.task} status = {item.status} deleteTask={deleteTask} editTask={editTask} editStatus={editStatus} key={item.id}/>
            })}
        </main>
    )
}