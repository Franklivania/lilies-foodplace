export const initialState = {
    total: 0,
    meals: []
};

type Meal = {
    title: string;
    price: number;
    count: number;
    id: any;
    image: string;
};

type State = {
    total: number;
    meals: Meal[];
};

type Action =
    | { type: 'add'; payload: Meal[] }
    | { type: 'remove'; payload: Meal[] }
    | { type: 'updatePrice'; payload: number };

export default function storeReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'add':
        case 'remove':
            return {
                ...state,
                meals: action.payload
            };
        case 'updatePrice':
            return {
                ...state,
                total: action.payload
            };
        default:
            throw new Error("Unsupported action type");
    }
}
