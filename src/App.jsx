import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import ToDoList from './Component/ToDoList'

function App() {
  const [taskList,setTaskList] = useState([]);

  function addTask(task){
    
  }
 

  return (
    <>
     <center>
     <Header/>
     <ToDoList/>
     </center>
      
    </>
  )
}

export default App
