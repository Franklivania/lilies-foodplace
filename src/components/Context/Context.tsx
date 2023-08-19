import { createContext, useReducer } from 'react'
import reducer, { initalState } from './Reducer'

type ContextTypes = {
    children: any
}

export const MealsContext = createContext()

export default function ContextProvider( {children}: ContextTypes ) {

    const [state, dispatch] = useReducer( reducer, initalState )

    function addToCart(meal:any) {
        const updatedCart = [...state.meals]
        const existingItem = updatedCart.find((item: any) => item.title === meal.title);

        if (existingItem) {
            existingItem.count += 1;
        } else {
            meal.count = 1;
            updatedCart.push(meal);
        }
        
        updatedPrice(updatedCart)

        dispatch({
            type: "add",
            payload: updatedCart
        })
    }

    function removeFromCart(meal:any) {
        const updatedCart = state.meals.filter(
            (currentMeal:any) => currentMeal.title !== meal.title
        )

        updatedPrice(updatedCart)

        dispatch({
            type:"remove",
            payload: updatedCart
        })
    }

    function updatedPrice(meals:any) {
        let total = 0
        meals.forEach(meal => {
            total += meal.price
        })

        dispatch({
            type:"updatePrice",
            payload: total
        })
    }

    const value = {
        total: state.total,
        meals: state.meals,
        addToCart,
        removeFromCart,
    }

    return<MealsContext.Provider value={value}>
        {children}
    </MealsContext.Provider>
}
