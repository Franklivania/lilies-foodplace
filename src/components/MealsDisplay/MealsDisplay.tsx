import { useContext } from 'react'
import { MealsContext } from '../Context/Context'
import ToggleButton from '../ToggleButton/ToggleButton'
import './MealsDisplay.scss'

type MealsDisplayTypes = {
    items: any
    onClick: () => void
}

export default function MealsDisplay({items, onClick}:MealsDisplayTypes) {
    const {addToCart}:any = useContext(MealsContext)

    function handleAdd(){
        addToCart(items)
    }

  return (
    <div id='meals-display' onClick={onClick}>
        <img src={items.image} alt={items.title} title={items.title} />
        <h2>{items.title}</h2>
        <p>{items.info}</p>
        <span>
            <p>NGN: {items.price}</p>
            <ToggleButton onClick={handleAdd} text='Add to cart' className='md-add' children=''/>
        </span>
    </div>
  )
}
