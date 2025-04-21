import { useEffect, useState } from "react";
import axios from 'axios'
import { MdDeleteSweep } from "react-icons/md";
function Todos(){
    const [value,setvalue]=useState("");
    const [todo,settodo]=useState([])
    const [gettask,setgettask]=useState([])
    // settask([455])
    useEffect(()=>{

        fetchData();
       

    },[value])
    
    const fetchData = async()=>{
        try{

            const respons=await axios.get('http://localhost:8000/todos')
            const data=respons.data
            
            // data.map((e)=>{
            //     console.log(e);
              
            // })
            // console.log(data)
            // settask([data])
            // console.log(settask)
            settodo([data])
            // console.log(todo)
        }catch{
            console.log(error)
        }
    }
    const addTask = async()=>{
        const response= await axios.post('http://localhost:8000/todos/',{
            
            "name":value,
            "time":"2025-02-23T05:14:18.332105Z"
        })
        console.log(response)
        setvalue("")
    }
    console.log("mytodos ",todo)
    const deleteTodo = async(id)=>{
        const response= await axios.delete(`http://localhost:8000/todos/${id}/`)
        console.log(response)
        setvalue(prev=>prev+" ")
    }
    const checkBox =async (e)=>{
        const response= await axios.put(`http://localhost:8000/todos/${e.id}/`,{
            "name":e.name,
            "complected":!e.complected,

        
    },{
            headers: { "Content-Type": "application/json" } // Ensure correct headers
          })
        console.log(response)
        setvalue(prev=>prev+" ")
    }
    const searchElement = async (value) =>{
        const respons=await axios.get(`http://localhost:8000/get/${value}/`)
        const data=respons.data
        setgettask(data)
        
        console.log(data)
        
    }
    console.log("get tastk", gettask)
 return (
        <>
          
     
        
      
  <div className="todo-container">
    <h1>My To-Do List</h1>
    <div className="searchinput">

    <input type="text" className="todo-input" placeholder="Add a new task..." value={value}  onChange={(e)=>{setvalue(e.target.value)}} />
    <button className="button-29" role="button" onClick={()=>{searchElement(value)}}>search</button>

    </div>
    <button  type='submit' className="add-btn"  onClick={addTask}>Add Task</button>
{/* <button className="btn" onClick={addTask}>Submit</button> */}
    
    <ul className="todo-list">
     {gettask?.length == 0 ? todo[0]?.map((e) => {

        return (
        <div key={e.id}>
        <li><input type="checkbox" checked={e.complected}  onClick={()=>{checkBox(e)}}/>{e.complected ? <del>{e.name} </del>: <span>{e.name}</span>  }<button className="delete-btn " onClick={()=>{deleteTodo(e.id)}}><MdDeleteSweep />
        </button></li>

</div>
);
}):
gettask?.map((e) => {

    return (
    <div key={e.id}>
    <li><input type="checkbox" checked={e.complected}  onClick={()=>{checkBox(e)}}/>{e.complected ? <del>{e.name} </del>: <span>{e.name}</span>  }<button className="delete-btn" onClick={()=>{deleteTodo(e.id)}}><MdDeleteSweep />
    </button></li>

</div>
);
})
     }
    </ul>
  </div>

        </>

    );
}
export default Todos;


{/* <input type="text" placeholder="Enter your todo" classNameName="maindiv" value={value}  onChange={(e)=>{setvalue(e.target.value)}}/>
<button classNameName="btn" onClick={addTask}>Submit</button>
<div classNameName="text-red">
{todo[0]?.map((e) => {
return (
<div key={e.id}>
<li classNameName="list">{e.name}</li>
</div>
);
})}

 {/* {{todo}} 
  
</div>
<div>
    
</div> */}