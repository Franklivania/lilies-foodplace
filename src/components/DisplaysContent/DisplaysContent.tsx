import { useContext, useState } from 'react'
import { MealsContext } from '../Context/Context'
import data from '../../data/Meals.json'
import MealsDisplay from '../MealsDisplay/MealsDisplay'
import FoodInfo from '../FoodInfo/FoodInfo'
import Cart from '../Cart/Cart'
import './DisplaysContent.scss'
import Checkout from '../Checkout/Checkout'

type DisplaysContentType = {
    openContent: number
    setOpenContent: (openContent: number) => void
}

export default function DisplaysContent({openContent, setOpenContent}: DisplaysContentType) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [openCheckout, setOpenCheckout] = useState(false)
    const {meals}:any = useContext(MealsContext)

    function handleActive(index: any){
        setActiveIndex(index)
    }

    function handleActiveClose(){
        setActiveIndex(null)
    }

  return (
    <main id="display-content">
        {data.map(((content, index) => (
            <MealsDisplay
                key={content.id}
                items={content}
                onClick={() => handleActive(index)}
            />
        )))}

        {activeIndex !== null && (
            <FoodInfo
                closeInfo={handleActiveClose}
                items={data[activeIndex]}
                className={activeIndex !== null ? 'active' : ''}
            />
        )}

        {openContent === 3 && (
            <Cart
                items={meals.map((item:any) => item.meal)}
                closeCart={() =>  setOpenContent(0)}
                setOpenCheckout={setOpenCheckout}
            />
        )}

        <Checkout
            closeCheck={() => setOpenCheckout(!openCheckout)}
            className={openCheckout ? 'active-checkout' : ''}
        />
    </main>
  )
}
