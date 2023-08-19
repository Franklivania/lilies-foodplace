import { useContext, useState } from 'react'
import { MealsContext } from '../Context/Context'
import ToggleButton from '../ToggleButton/ToggleButton'
import './FoodInfo.scss'

type CartTypes = {
  closeInfo: any
  className?: string
  items: any
}

export default function FoodInfo({closeInfo, className, items}: CartTypes) {

  const {addToCart} :any = useContext(MealsContext)
  const [itemCount, setItemCount] = useState(0)

  function handleAdd(){
    addToCart({ ...items, count: itemCount })
  }

  function handleCount(action: 'increment' | 'decrement') {
    if (action === 'increment') {
      setItemCount(itemCount + 1);
    } else if (action === 'decrement' && itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  }

  return (
    <section id="food-info" className={closeInfo ? 'closed' : ''}>
      
      <main>
        <ToggleButton
            onClick={closeInfo}
            icon='fa-solid fa-x fa-2x'
            className='close-btn'
        />

        <img src={items.image} alt="" />
        <h2>{items.title}</h2>
        <p>{items.text}</p>

        <span id='process'>
          <p>NGN: {items.price}</p>
          <p>{items.time}</p>
        </span>

        <aside>
          <span>
            <ToggleButton
              onClick={() => handleCount("decrement")}
              icon='fa-solid fa-minus'
              className="count-btn"
            />
            <p>{itemCount}</p>
            <ToggleButton
              onClick={() => handleCount("increment")}
              icon='fa-solid fa-plus'
              className="count-btn"
            />
          </span>

          <ToggleButton
            onClick={handleAdd}
            text='Add to Cart'
            className='fi-add'
          />
        </aside>
      </main>

    </section>
  )
}
