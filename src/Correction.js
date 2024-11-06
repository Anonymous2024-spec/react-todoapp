import React,{useState,useEffect} from "react"

export default function Correction(){
    const [tasks,setTasks] =useState([])
    const [input, setInput] = useState('')

    useEffect(() =>{
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
        setTasks(savedTasks)
    }, [])

    useEffect(() =>{
     localStorage.setItem('tasks',JSON.stringify(tasks))
    }, [tasks])

    function addTask(){
      if (input !== '') {
        setTasks([...tasks,{id:Date.now(),name:input,completed:false}])
      }
    }

    function deleteTask(id){
       setTasks(tasks.filter(task => task.id !== id))
      }

    function checkTaskStatus(id){
        setTasks(tasks.map((task) => task.id === id ? {...tasks,completed:!task.completed}:task))
    }

 return(
   <div>
    <h2>ToDo List</h2>
    <div className="flex">
    <input placeholder="New Task" type="text" value={input} onChange={(event) => {
        setInput(event.target.value)
    }}/>
    <button className="btn btn-secondary" onClick={addTask}>Add</button>
    </div>
    {tasks.map((task) =>{
        return(
            <div className="flex">
                <input type="checkbox" onClick={() => checkTaskStatus(task.id)}/>
                <p>{task.name}</p>
                <i className="bi bi-trash" onClick={() => deleteTask(task.id)}/>
            </div>
        )
    })}
   </div>
)
}