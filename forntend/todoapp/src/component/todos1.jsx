    import { useEffect, useState } from "react";
    import { MdDeleteSweep } from "react-icons/md";
    import { useDispatch, useSelector } from "react-redux";
    import { createTodo,getTodo,deleteTodo,tougleCheckBox,setsearch } from "../rtk/slice";
    // import {addTodo, createtodo, setLoding, setTodos} from '../rtk/slice';
    function Todos1(){
        const [searchValue,setSearchValue]=useState([])
        const [value,setvalue]=useState("");
        // const [todo,settodo]=useState([])
        // const [gettask,setgettask]=useState([])
        const dispatch=useDispatch()
        const {todos,loding,searchQuery}=useSelector((state)=>state.todos)
        // const searchData=todos.filter((todo)=>todo.name?.toLowerCase().includes(searchQuery.toLowerCase()|| " "))
        // console.log("search", searchData)
        // console.log(searchData)
      
        
        const deletedata = (id)=>{
            console.log("delete")
            dispatch(deleteTodo(id)).then(()=>dispatch(getTodo()))

        }
        const checkBox =async (e)=>{
            dispatch(tougleCheckBox(e)).then(()=>dispatch(getTodo()))
        }
        const searchElement =  (value) =>{
            const filteredProducts = todos.filter((todo) =>
                todo.name.toLowerCase().includes(value.toLowerCase())
              );
              setSearchValue(filteredProducts)
              console.log("search value",searchValue)
            
        }
        const addTodo = (value)=>{
            dispatch(createTodo({"name":value})).then(()=>dispatch(getTodo()))
            setvalue("")
        }
    useEffect(()=>{
        
        dispatch(getTodo())
        console.log(todos,"this is rtk")
        // dispatch(setsearch(""))
    

        
      
    },[])
    if(loding){
        <h1>loging</h1>
    }
    return (
            <>
            
        
            
        
    <div className="todo-container">
    <h1>My To-Do List</h1>
        <div className="searchinput">

        <input type="text" className="todo-input" placeholder="Add a new task..." value={value}  
        onChange={(e)=>{setvalue(e.target.value);
        searchElement(value);

        }} />
        <button type="submit" className="button-29" role="button" onClick={()=>{searchElement(value)}}>search</button>

        </div>
        <button  type='submit' className="add-btn" onClick={()=>{addTodo(value)}}  value={value} onChange={(e)=>e.target.value}>Add Task</button>
        
        <ul className="todo-list">
            {/* {todos.map((e) => {

return (
<div key={e.id}>
<li><input type="checkbox" checked={e.complected}  onClick={()=>{checkBox(e)}}/>{e.complected ? <del>{e.name} </del>: <span>{e.name}</span>  }<button className="delete-btn " onClick={()=>{deletedata(e.id)}}><MdDeleteSweep />
</button></li>

</div>
);
})} */}


{/* <h1>search</h1> */}

{/* {searchValue.map((f) => {

return (
<div key={f.id}>
<li><input type="checkbox" checked={f.complected}  onClick={()=>{checkBox(f)}}/>
{f.complected ? <del>{f.name} </del>: <span>{f.name}</span>  }
<button className="delete-btn " onClick={()=>{deletedata(f.id)}}><MdDeleteSweep />
</button></li>

</div>
);
})} */}
        {value.length==0 ? todos.map((e) => {

            return (
            <div key={e.id}>
            <li><input type="checkbox" checked={e.complected}  onClick={()=>{checkBox(e)}}/>{e.complected ? <del>{e.name} </del>: <span>{e.name}</span>  }<button className="delete-btn " onClick={()=>{deletedata(e.id)}}><MdDeleteSweep />
            </button></li>

             </div>
    );
    }):
    searchValue?.map((e) => {

        return (
        <div key={e.id}>
        <li><input type="checkbox" checked={e.complected}  onClick={()=>{checkBox(e)}}/>{e.complected ? <del>{e.name} </del>: <span>{e.name}</span>  }<button className="delete-btn" onClick={()=>{deletedata(e.id)}}><MdDeleteSweep />
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
    export default Todos1;


