import React, { useState } from "react";
import './TodoForm.css';
import { useDispatch, useSelector } from "react-redux";
import { TodoActionType } from "./ActionType";
import axios from "axios";

const TodoForm = () => {
    const dispatch = useDispatch()
    const [taskInput, setTaskInput] = useState({ taskTitle: "", taskDesc: "", startDate: "", targetDate: "" })

    const onTaskInputHandler = (e) => {
        setTaskInput({ ...taskInput, [e.target.name]: e.target.value })
        console.log("input data", e.target.value);
    }
    const onTaskSubmitHandler = (e) => {
        e.preventDefault();
        TodoActionType.AddTodoInput(dispatch, taskInput)
        console.log("input ", taskInput);
        async function fetchdta() {
            const res = await axios.get("https://silver-space-telegram-46xvjqwg76gh7qqp-4000.app.github.dev/",{headers:{
                "Accept": "application/json, text/plain, */*",
                "Access-Control-Allow-Origin": "*" }})
            const sor = await res.json();

            console.log("response", sor);

            // const res=fetch("http://localhost:3050/todoData").then(res=>res.json()).then(res=>console.log("success",res)).catch(e=>console.log("Failt=ure",e))
            // const res=fetch("http://localhost:3050/todoData",{method:"POST",body:JSON.stringify(taskInput),headers:{"Context-type":"application/json"}}).then(res=>res.json()).then(res=>console.log("success",res)).catch(e=>console.log("Failt=ure",e))
        }
        fetchdta()
    }
    return <>
        <div className="todoForm-containe">
            <h1>My Todo</h1>
            <form onSubmit={onTaskSubmitHandler}>
                <div>
                    <label htmlFor="taskId">Task</label>
                    <input type="text" id="taskId" name="taskTitle" value={taskInput.taskTitle} placeholder="Enter your task here..." className="" onChange={onTaskInputHandler} />
                </div>
                <div>
                    <label htmlFor="taskDesc">Description</label>
                    <textarea id="taskDesc" name="taskDesc" value={taskInput.taskDesc} placeholder="Task description" cols={20} rows={5} className="" onChange={onTaskInputHandler} />
                </div>
                <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id="startDate" name="startDate" className="" value={taskInput.startDate} onChange={onTaskInputHandler} />
                </div>
                <div>
                    <label htmlFor="targetDate">Target Date</label>
                    <input type="date" id="targetDate" name="targetDate" className="" value={taskInput.targetDate} onChange={onTaskInputHandler} />
                </div>
                <div>
                    <button id="addTask" type="submit">Add Task</button>
                </div>
            </form >
        </div >
    </>
}


export default TodoForm;