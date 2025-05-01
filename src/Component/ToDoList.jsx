import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList(props){
    console.log(props)

    const taskList = localStorage.getItem('taskList')?JSON.parse(localStorage.getItem('taskList')):[];
    
     
   
    return (
        <section className="flex flex-col h-[70vh] overflow-auto gap-2 m-2 lg:w-[50%] bg-gradient-to-br from-blue-700 to-blue-50 rounded-2xl p-5 ">
           {taskList.map((task)=>{
           
                return (
                    <> 
                    <ToDoItem task={task} deleteTask = {props.deleteTask} editTask = {props.editTask} mark = {props.mark} key={props.id}/>
                    </>
                )
           })}
           
        </section>
    )
}