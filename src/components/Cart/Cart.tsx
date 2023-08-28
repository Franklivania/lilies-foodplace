import { useContext } from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import './Cart.scss'
import { MealsContext } from '../Context/Context'

type CartTypes = {
    closeCart: () => void
    className?: string
    items: any[]
}

export default function Cart({items, closeCart, className}: CartTypes) {
    const {meals, removeFromCart, total}: any = useContext(MealsContext)

    function handleRemove(meal: any){
        removeFromCart(meal);
    }

  return (
    <div id="cart">
        <main>
            <h2>Your Cart</h2>
            <ToggleButton
                onClick={closeCart}
                icon='fa-solid fa-x fa-2x'
                className='close-btn'
            />

            <table>
                <tr>
                    <th className='items'>Item</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Sub Total</th>
                </tr>
            
                {items.map((items) => (
                    <tr>
                        <td className='items'>
                            <img src={items.image} alt={items.title} />
                            <span>
                                <h3>{items.title}</h3>
                                <ToggleButton
                                    text='Remove'
                                    className='remove'
                                    onClick={() => handleRemove(items)}
                                />
                            </span>
                        </td>
                        <td>{items.count}</td>
                        <td>{items.price}</td>
                        <td>{items.count * items.price}</td>
                    </tr>
                ))}
                
            </table>

            <p>Total: <span>N {total}</span></p>
            
            <ToggleButton
                text='Checkout'
                className='checkout'
            />
        </main>
    </div>
  )
}
