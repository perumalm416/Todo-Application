
const initialState = { data: [] }
export const TodoFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add-form-data": {
            const newData = state.data;
            newData.push(action.payload);
            return { data: newData };
        }        
        default:
            return state;
    }

}