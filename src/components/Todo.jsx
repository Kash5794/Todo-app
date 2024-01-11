import React, {useState} from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';



export const Todo = () => {
const [postContent, setPostContent] = useState('')
const [addedTask, setAddedTask] = useState([])
const [completedTask, setCompletedTask] = useState([])
const [completeButton, setCompleteButton] = useState(false)
const handleAddTask =()=>{
if(postContent.length!=0){
    setAddedTask([...addedTask,postContent])
}    

}
const readTask = (task)=>{
setPostContent(task)
}
const completeTask = (task)=>{

const updatedTask =addedTask.filter((item)=>item!=task)
toast.success('Task completed successfully')
setAddedTask(updatedTask)
setCompletedTask([...completedTask,task])
}

const readCompleteTask = ()=>{
    if(completeButton){
        setCompleteButton(false)
    }
    else{
        setCompleteButton(true)
    }
    
}
console.log(addedTask)
  return (
    <div>
        <h4>TODO APP</h4>
        <div className='container'>
        
        <div className='taskbutton'>
    <button onClick={handleAddTask}>Add New Task</button><br/>
    <button onClick={readCompleteTask} >Completed Tasks</button>
    
        </div>
       

        <div className='taskcontent'>
            <textarea value={postContent} placeholder='Enter your task here'  onChange={e => setPostContent(e.target.value)}></textarea><hr></hr>
       

        {completeButton?
        <div>
        <h4>Completed Tasks</h4>
        <ol>
            {completedTask.length>0 && completedTask.map((task)=>{
                return (
                    <div style={{display:'flex'}} onClick={()=>readTask(task)}>
                    
                    <li>{task}</li>
            <span onClick={()=>completeTask(task)}><IoMdCheckmarkCircle size={25} color='white' /></span>
            <div><Toaster/></div>
            
                    </div>
                    
                    
                )
            })}
            
        </ol>
    </div> :
    
    <div>
        <h2>Todo List</h2>
        <ol>
            {addedTask.length>0 && addedTask.map((task)=>{
                return (
                    <div style={{display:'flex'}} onClick={()=>readTask(task)}>
                    
                    <li>{task}</li>
            <span onClick={()=>completeTask(task)}><IoMdCheckmarkCircle size={25} color='white' /></span>
            <div><Toaster/></div>
            
                    </div>
                    
                    
                )
            })}
            
        </ol>
    </div>
        }
        </div>
       
        
        
        
        </div>
    </div>
    
  )
}
