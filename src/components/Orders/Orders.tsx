import { useEffect, useRef, useContext, useState } from 'react'
import { MealsContext } from '../Context/Context'
import './Orders.scss'
import ToggleButton from '../ToggleButton/ToggleButton'

interface OrdersProps{
    closeOrders: () => void
    className?: string
    items: any[]
}

export default function Orders({closeOrders, className}: OrdersProps) {

    const orderRef:any = useRef(null)

    useEffect(() => {
        function handleOutsideClick(e:MouseEvent){
            if(!orderRef.current.contains(e.target)){
                closeOrders()
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return() => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    },[closeOrders])

    const {meals, removeFromCart} = useContext(MealsContext)

    function handleRemove(meal:any){
        removeFromCart(meal)
    }

    const [status, setStatus] = useState(meals.map(() => false))

    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus(status.map(() => true))
        }, 2000)
        return () => clearTimeout(timer)
    }, [status])
    
  return (
    <div id='orders' className={className}>
        <main ref={orderRef}>
            <h3>Orders</h3>

            <table>
                <tr>
                    <th className='items'>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
                {meals.map((item) => (
                    <tr key={item.id}>
                        <td className='items'>
                            <img src={item.image} alt={item.title} />
                            <span>
                                <h3>{item.title}</h3>
                                <ToggleButton
                                    text='Remove'
                                    className='remove'
                                    onClick={() => handleRemove(item)}
                                />
                            </span>
                        </td>
                        <td>{item.count}</td>
                        <td>{item.count * item.price}</td>
                        <td id='status'>
                            <span
                                className={`status ${status[item.id] ? 'delivered' : 'cooking'}`}
                            >
                                {status[item.id] ? 'delivered' : 'cooking'}
                            </span>
                        </td>
                    </tr>
                ))}
            </table>
        </main>
    </div>
  )
}
