import './Footer.scss'
import data from '../../data/Footer.json'
import ToggleButton from '../ToggleButton/ToggleButton'
import google from '../../assets/googleplay.svg'
import apple from '../../assets/applestore.svg'

export default function Footer() {
  return (
    <footer>
        <main>
            <span>
                <h3>Company</h3>
                {data.Company.map(((items, index) => (
                    <ul key={index}>
                        <li>{items}</li>
                    </ul>
                )))}
            </span>
            <span>
                <h3>Support</h3>
                {data.Support.map(((items, index) => (
                    <ul key={index}>
                        <li>{items}</li>
                    </ul>
                )))}
            </span>
            <span>
                <h3>Legal</h3>
                {data.Legal.map(((items, index) => (
                    <ul key={index}>
                        <li>{items}</li>
                    </ul>
                )))}
            </span>
            <span>
                <h3>Install App</h3>
                <ToggleButton image={google} title='google play store'/>
                <ToggleButton image={apple} title='ios store' />
            </span>
        </main>
        <section>
            <p>© 2021 LILLIES, All Rights Reserved.</p>
            <p>Developed by <a rel='noopener' href="https://github.com/Franklivania" target='_blank'>Franklivania</a></p>
            <span>
                <a href=""><i className='fa-brands fa-instagram'></i></a>
                <a href=""><i className='fa-brands fa-twitter'></i></a>
                <a href=""><i className='fa-brands fa-youtube'></i></a>
            </span>
        </section>
    </footer>
  )
}
