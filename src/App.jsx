import { useEffect, useState } from 'react'
import './App.css'
import Header from './Component/Header'
import ToDoList from './Component/ToDoList'

function App() {
  const [taskList,setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || [])
  useEffect(()=>{
    localStorage.setItem("taskList",JSON.stringify(taskList));
  },[taskList])


  


  function addTask(newTask,status){
    const newTaskList = [...taskList,{id:taskList.length,task:newTask,status:status}];
     setTaskList(newTaskList);   
     alert("New task Added")
  }




  function editStatus(id,status){
     const newTaskList = taskList.map((item)=>{
       if(item.id == id){
          item.status = status;
       }
       return item
     })
     setTaskList(newTaskList)
  }






  function editTask(id,task){
      const newTaskList = taskList.map((item)=>{
        if(item.id == id){
          item.task = task;
        }
        return item;
      })
      setTaskList(newTaskList)
  }





 function deleteTask(id){
      const newTaskList = taskList.filter((task)=>{
        console.log(task.id,"==",id)
        return task.id != id
      }).filter((task,index)=>{
         task.id = index;
         return task;
      })
      console.log(newTaskList)
      setTaskList(newTaskList)
      alert("deleted")
 }





  return (
    <>
     <center>
     <Header addTask = {addTask}  />
     <ToDoList taskList = {taskList} deleteTask= {deleteTask} editTask = {editTask} editStatus={editStatus}/>
     </center>
      
    </>
  )
}

export default App
