import { useSelector } from "react-redux"
import { TodoListItem } from "./TodoListItem"

export const TodoList = () => {
    const todoListDx = useSelector(state => state);
    console.log("todeoListDx", todoListDx);
    const { data } = todoListDx;
    return <>
        <div>
            <h2>Todo List</h2>
            <ul>
                {data.length > 0 && data.map((item, index) => {
                    return <TodoListItem key={index} todoListItem={item} />
                })}
            </ul>
        </div>
    </>
}