import { useEffect, useState } from 'react'
import logo from '../../assets/icon.svg'
import PageToggle from '../PageToggle/PageToggle'
import './Navbar.scss'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        function handleScroll() {
            if(window.scrollY > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

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
        <header className={scrolled ? 'scrolled' : ''}>
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