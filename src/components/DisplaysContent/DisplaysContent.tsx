import { useState } from 'react'
import data from '../../data/Meals.json'
import MealsDisplay from '../MealsDisplay/MealsDisplay'
import FoodInfo from '../FoodInfo/FoodInfo'
import './DisplaysContent.scss'

export default function DisplaysContent() {
    const [activeIndex, setActiveIndex] = useState(null)

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
                className={activeIndex ? 'active' : ''}
            />
        )}
    </main>
  )
}
