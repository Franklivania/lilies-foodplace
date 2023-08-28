import { useContext, useRef, useState, useEffect } from 'react'
import { MealsContext } from '../Context/Context'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ToggleButton from '../ToggleButton/ToggleButton'
import './FoodInfo.scss'

type FoodInfoTypes = {
  closeInfo: any
  className?: string
  items: any
}

export default function FoodInfo({closeInfo, className, items}: FoodInfoTypes) {

  const {addToCart} = useContext(MealsContext)
  const [itemCount, setItemCount] = useState(1)
  const modalRef:any = useRef(null)

  function handleAdd() {
    if (!items.title) {
      // No meal title provided, show error toast
      toast.error(`Please pick a meal`, {
          position: toast.POSITION.TOP_RIGHT
      });
    } else {
        addToCart({ ...items, count: itemCount });
        // Show success toast for adding the meal to the cart
        toast.success(`Your ${items.title} x ${itemCount}  has been added to the cart`, {
          position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  function handleCount(action: 'increment' | 'decrement') {
    if (action === 'increment') {
      setItemCount(itemCount + 1);
    } else if (action === 'decrement' && itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  }

  useEffect(() => {
    const handleOutsideClick = ({event}:any) => {
      if (!modalRef.current.contains(event.target)) {
        closeInfo();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };

}, [closeInfo]);

  return (
    <div id="food-info" className={`food-info ${closeInfo ? 'closed' : ''} ${className}`}>
      <ToastContainer />
      <main ref={modalRef}>
        <ToggleButton
          onClick={closeInfo}
          icon='fa-solid fa-x fa-2x'
          className={`close-btn ${closeInfo ? 'closed' : ''} `}
        />

        <img src={items.image} alt={items.title} title={items.title} />
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
    </div>
  )
}
