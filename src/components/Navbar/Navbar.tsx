import logo from '../../assets/icon.svg'
import PageToggle from '../PageToggle/PageToggle'
import './Navbar.scss'

export default function Navbar() {

    const navitems = [
        {
            id: "home",
            title: "Home",
            link: "/"
        },
        {
            id: "login",
            title: "Login",
            link: "/login"
        },
        {
            id: "signup",
            title: "Sign Up",
            link: "/signup"
        }
    ]

    return(
        <header>
            <span>
                <img src={logo} alt="logo" title='Lillies Foodplace' />
                <h3>Lillies</h3>
            </span>
            <nav>
                {navitems.map((items => (
                    <PageToggle
                        key={items.id}
                        className={items.id}
                        {...items}
                    />
                )))}
            </nav>
        </header>
    )
}