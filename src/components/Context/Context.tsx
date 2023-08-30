import { createContext, useReducer, useState } from 'react'
import storeReducer, { initialState } from './Reducer'

type ContextTypes = {
    children: React.ReactNode
}

type Meal = {
    title?: string
    price: number
    count: number
    id?: any
    image?: string
}

type ContextValue = {
    total: number
    meals: Meal[]
    orderedItems: number
    addToCart: (meal: Meal) => void
    removeFromCart: (meal: Meal) => void
    addToOrderedItems: (count: number) => void
}

export const MealsContext = createContext<ContextValue>({
    total: 0,
    meals: [],
    orderedItems: 0,
    addToCart: () => {},
    removeFromCart: () => {},
    addToOrderedItems: () => {}
})

export default function ContextProvider({ children }: ContextTypes) {
    const [state, dispatch] = useReducer(storeReducer, initialState)
    const [orderedItems, setOrderedItems] = useState(0)

    const addToOrderedItems = (count: number) => {
        setOrderedItems(count);
    }

    const addToCart = (meal: Meal) => {
        const updatedCart = [...state.meals, meal]
        updatedPrice(updatedCart)

        localStorage.setItem('cart', JSON.stringify(updatedCart))

        dispatch({
            type: 'add',
            payload: updatedCart
        })
    }

    const removeFromCart = (meal: Meal) => {
        const updatedCart = state.meals.filter(
            currentMeal => currentMeal.id !== meal.id
        )
        updatedPrice(updatedCart)

        localStorage.setItem('cart', JSON.stringify(updatedCart))
    
        dispatch({
            type: 'remove',
            payload: updatedCart
        })
    }

    const updatedPrice = (meals: Meal[]) => {
        let total = 0
        meals.forEach(meal => {
            total += meal.price * meal.count
        })

        dispatch({
            type: 'updatePrice',
            payload: total
        })
    }

    const contextValue: ContextValue = {
        total: state.total,
        meals: state.meals,
        orderedItems,
        addToCart,
        removeFromCart,
        addToOrderedItems
    }

    return (
        <MealsContext.Provider value={contextValue}>
            {children}
        </MealsContext.Provider>
    )
}
