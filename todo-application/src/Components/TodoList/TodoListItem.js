export const TodoListItem = ({ todoListItem }) => {
    console.log("data", todoListItem);
    return <li>
        <span>Task :{todoListItem.taskTitle} </span> <span> Start Date :{todoListItem.startDate}</span>
    </li>
}