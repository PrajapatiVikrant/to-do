import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import ToDoList from './Component/ToDoList'

function App() {
  const [taskList,setTaskList] = useState(localStorage.getItem('taskList')?JSON.parse(localStorage.getItem('taskList')):[]);

  function addTask(task,status){
      const newTask = {
        id:taskList.length,
        task:task,
        status:status
      }
      const newList = [...taskList,newTask]
      setTaskList([...taskList,newTask]) 
      
      localStorage.setItem("taskList",JSON.stringify(newList))
      console.log(localStorage.getItem('taskList'))
  }


  function editTask(id,updatedTask){
       const updatedList = taskList.map((task)=>{
           if(task.id == id){
            task.task = updatedTask;
           }
           return task;
       })
       setTaskList(updatedList)
       localStorage.setItem('taskList',JSON.stringify(updatedList));
  }
  
  

  function mark(id,status){
    console.log(status)
    const updatedList =  taskList.map((task)=>{
         if(task.id == id){
            task.status = status;
         }
         return task;
      })
      console.log(updatedList)
      localStorage.setItem('taskList',JSON.stringify(updatedList));
      console.log(localStorage.getItem('taskList'))
      
      
    }
    
     function deleteTask(id){
      const updatedList = taskList.filter((task)=>task.id != id)
      const sequenceId =   updatedList.map((item,index)=>{
        item.id = index;
        return item
      })
     
      localStorage.setItem('taskList',JSON.stringify(sequenceId));
      setTaskList(()=>JSON.parse(localStorage.getItem('taskList')))
     
     }
 

  return (
    <>
     <center>
     <Header addTask={addTask}/>
     <ToDoList taskList ={taskList} deleteTask = {deleteTask} editTask = {editTask} mark = {mark} />
     </center>
      
    </>
  )
}

export default App
