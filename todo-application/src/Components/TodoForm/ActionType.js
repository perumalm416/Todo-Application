import { Constants } from "../../Common/Constant"

export const TodoActionType={
    AddTodoInput:(dispatch,payload)=>{
        return dispatch({type:Constants.ADDFORMDATA,payload:payload})
    }
}