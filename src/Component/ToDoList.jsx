import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList(){
    return (
        <section className="flex flex-col h-[70vh] overflow-auto gap-2 m-2 lg:w-[50%] bg-gradient-to-br from-blue-700 to-blue-50 rounded-2xl p-5 ">
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
           
        </section>
    )
}