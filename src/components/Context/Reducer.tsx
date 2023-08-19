export const initalState = {
    total: 0,
    meals: []
}

type ReducerTypes = {
    state: any
    action: any
}

export default function storeReducer({state, action}: ReducerTypes) {
    
    switch (action.type) {
        case "add":
            return {
                ...state,
                meals: action.payload
            }
        case "remove":
            return {
                ...state,
                meals: action.payload
            }
        case "updatePrice":
            return {
                ...state,
                total: action.payload
            }
        
        default: throw Error("The function cannot be carried")
    }
}