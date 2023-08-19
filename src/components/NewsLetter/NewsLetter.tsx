import './NewsLetter.scss'
import FormInput from '../FormInput/FormInput'
import ToggleButton from '../ToggleButton/ToggleButton'


export default function NewsLetter() {
  return (
    <section id='newsletter'>
        <aside>
          <h2>Get notified when we update!</h2>
          <p>Get notified when we add new items to our specials menu, update our price list of have promos!</p>
        </aside>

        <form>
          <FormInput type='email' id='email' title='Your email here'/>
          <ToggleButton text='Get Notified' className='news-btn' isActive={false}/>
        </form>
    </section>
  )
}
