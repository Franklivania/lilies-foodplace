import { createContext, useReducer } from 'react';
import storeReducer, { initialState } from './Reducer';

type ContextTypes = {
    children: React.ReactNode;
};

type Meal = {
    title: string;
    price: number;
};

type State = {
    total: number;
    meals: Meal[];
};

type Action =
    | { type: 'add'; payload: Meal }
    | { type: 'remove'; payload: Meal }
    | { type: 'updatePrice'; payload: number };

type ContextValue = {
    total: number;
    meals: Meal[];
    addToCart: (meal: Meal) => void;
    removeFromCart: (meal: Meal) => void;
};

export const MealsContext = createContext<ContextValue>({
    total: 0,
    meals: [],
    addToCart: () => {},
    removeFromCart: () => {}
});

export default function ContextProvider({ children }: ContextTypes) {
    const [state, dispatch] = useReducer(storeReducer, initialState);

    const addToCart = (meal: Meal) => {
        const updatedCart = [...state.meals, meal];
        updatedPrice(updatedCart);

        dispatch({
            type: 'add',
            payload: updatedCart
        });
    };

    const removeFromCart = (meal: Meal) => {
        const updatedCart = state.meals.filter(
            currentMeal => currentMeal.title !== meal.title
        );

        updatedPrice(updatedCart);

        dispatch({
            type: 'remove',
            payload: updatedCart
        });
    };

    const updatedPrice = (meals: Meal[]) => {
        let total = 0;
        meals.forEach(meal => {
            total += meal.price;
        });

        dispatch({
            type: 'updatePrice',
            payload: total
        });
    };

    const contextValue: ContextValue = {
        total: state.total,
        meals: state.meals,
        addToCart,
        removeFromCart
    };

    return (
        <MealsContext.Provider value={contextValue}>
            {children}
        </MealsContext.Provider>
    );
}
