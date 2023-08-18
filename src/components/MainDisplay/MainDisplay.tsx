import './MainDisplay.scss'
import content from '../../data/Meals.json'

export default function MainDisplay() {
  return (
    <section id='main-display'>
        <aside>
            <h2>Special Meals of the day!</h2>
            <p>Check our sepecials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.</p>
        </aside>

        <main>
            {content.slice(0, 3).map((items => (
                <div id="container" key={items.id}>
                    <img src={items.image} alt={items.title} title={items.title}/>
                    <h3>{items.title}</h3>
                    <p>{items.info}</p>
                </div>
            )))}
        </main>
    </section>
  )
}
