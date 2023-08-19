import { useContext } from 'react'
import { MealsContext } from '../Context/Context'
import ToggleButton from '../ToggleButton/ToggleButton'
import './MealsDisplay.scss'

type MealsDisplayTypes = {
    items: any
}

export default function MealsDisplay({items}:MealsDisplayTypes) {
    const addToCart:any = useContext(MealsContext)

    function handleAdd(){
        addToCart(items)
    }

  return (
    <div id='meals-display'>
        <img src={items.image} alt="" />
        <h2>{items.title}</h2>
        <p>{items.info}</p>
        <span>
            <p>{items.price}</p>
            <ToggleButton onClick={handleAdd} text='Add to cart' className='md-add'/>
        </span>
    </div>
  )
}
