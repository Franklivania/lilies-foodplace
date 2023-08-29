import { useContext, useRef, useEffect } from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import './Cart.scss'
import { MealsContext } from '../Context/Context'

type CartTypes = {
    closeCart: () => void
    className?: string
    items: any[]
}

export default function Cart({closeCart, className}: CartTypes) {
    const {removeFromCart, total, meals} = useContext(MealsContext)

    function handleRemove(meal: any){
        removeFromCart(meal);
    }
    const cartRef:any = useRef()

    useEffect(() => {
      const handleOutsideClick = (e:MouseEvent) => {
        if(!cartRef.current.contains(e.target)) {
            closeCart()
        }
      }
      document.addEventListener('mousedown', handleOutsideClick)
      return() => {
        document.removeEventListener("mousedown",handleOutsideClick )
      }
    }, [closeCart])
    

  return (
    <div id="cart" className={className}>
        <main ref={cartRef}>
            <h2>Your Cart</h2>
            <ToggleButton
                onClick={closeCart}
                icon='fa-solid fa-x fa-2x'
                className='close-btn'
                children=''
            />

            <table>
                <tr>
                    <th className='items'>Item</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Sub Total</th>
                </tr>
            
                {meals.map((item) => (
                    <tr key={item.id}>
                        <td className="items">
                            <img src={item.image} alt={item.title} />
                            <span>
                                <h3>{item.title}</h3>
                                <ToggleButton
                                    text="Remove"
                                    className="remove"
                                    onClick={() => handleRemove(item)}
                                    children=''
                                />
                            </span>
                        </td>
                        <td>{item.count}</td>
                        <td>{item.price}</td>
                        <td>{item.count * item.price}</td>
                    </tr>
                ))}
            </table>

            <p>Total: <span>N {total}</span></p>
            
            <ToggleButton
                text='Checkout'
                className='checkout'
                children=''
            />
        </main>
    </div>
  )
}
