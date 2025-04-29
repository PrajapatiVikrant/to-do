import React from "react"
import { IoIosAdd } from "react-icons/io";
export default function Header(){

    return (
        <header className="flex flex-col justify-between items-center   p-4 "> 
            <h1 className="text-3xl font-bold ">
               Task (To-Do)
            </h1>
            <section className="flex   my-2 w-fit border rounded-l-xl">
                <input className="outline-none p-1 w-[300px] text-2xl " type="text" placeholder="Enter new task" />
                <button className="border p-1 text-3xl hover:text-white hover:bg-black hover:border-none transition-all duration-500 ease-linear cursor-pointer"><IoIosAdd /></button>
            </section>
        </header>
    )
}