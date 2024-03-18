
const initialState = { data: [] }
export const TodoFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add-form-data": {
            console.log("reducer input", action);

            const newData = state.data;
            newData.push(action.payload);
            console.log("new data", newData);
            return { data: newData };
        }
        default:
            return state;
    }

}