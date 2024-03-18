import React from "react";
import {createStore} from "redux"
import { TodoFormReducer } from "../Components/TodoForm/Reducer";

export const Store=createStore(TodoFormReducer);