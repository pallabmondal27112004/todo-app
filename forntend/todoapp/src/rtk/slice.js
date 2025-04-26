import { createSlice, createAsyncThunk, Tuple } from "@reduxjs/toolkit";
import axios from "axios";

const api="http://localhost:8000/todos/"
// const api="https://todoapp-backen-3.onrender.com/todos/"
export const createTodo=createAsyncThunk('todos/createTodo', async(data)=>{
    console.log(data)
    const response = await axios.post(api,data)
    console.log(response.data)
    return response.data
})
export const getTodo=createAsyncThunk('todos/getTodo', async()=>{
    console.log("sdfgdfgfdbs")
    const response = await axios.get(api)
    console.log(response.data)
    return response.data
})
export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  console.log("delete todos")
    await axios.delete(`${api}/${id}/`);
    return { id };  
});

export const tougleCheckBox=createAsyncThunk('todos/tougleCheckBox', async(e)=>{
    const box =!e.complected
  console.log("update todos")

    console.log(box)
    const response = await axios.put(`${api}/${e.id}/`,{"complected":box,"name":e.name})
    console.log(response.data)
    return response.data
})

const todosSlice = createSlice({
    name: "todos",
    initialState:{
        todos:[],
        loading: false,
        searchQuery :""
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(createTodo.pending, (state) => {
            state.loading=true
          })
          .addCase(createTodo.fulfilled, (state, action) => {
            state.loading=false
            state.todos.push(action.payload) ;
          })
          .addCase(createTodo.rejected, (state, action) => {
            state.loading=false
            state.error = action.error.message;
          })
    
          .addCase(getTodo.pending, (state) => {
            state.loading=true
          })
          .addCase(getTodo.fulfilled, (state, action) => {
            state.loading=false
            state.todos=action.payload;
          })
          .addCase(getTodo.rejected, (state, action) => {
            state.loading=false
            state.error = action.error.message;
          })
      
          .addCase(deleteTodo.pending, (state) => {
            state.loading=true
          })
          .addCase(deleteTodo.fulfilled, (state, action) => {
            state.loading=false
            console.log("delete")
            state.todos=state.todos.filter((e)=>e.id!==action.payload.id)
            console.log(action.payload.id)
          })
          .addCase(deleteTodo.rejected, (state, action) => {
            state.loading=false
            state.error = action.error.message;
          })
          .addCase(tougleCheckBox.pending, (state) => {
            state.loading=true
          })
          .addCase(tougleCheckBox.fulfilled, (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
                if (index !== -1) {
                    state.todos[index] = action.payload;
                }
          })
          .addCase(tougleCheckBox.rejected, (state, action) => {
            state.loading=false
            state.error = action.error.message;
          });
      },

});
// export const { setLoding, addTodo, deleteTodo,setTodos, clearTodos } = todosSlice.actions;
export const {setsearch}=todosSlice.reducer
export default todosSlice.reducer;
