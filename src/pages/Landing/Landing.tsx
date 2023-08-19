import { styled } from "styled-components"
import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"
import MainDisplay from "../../components/MainDisplay/MainDisplay"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import Footer from "../../components/Footer/Footer"

const LandingPage = styled.div`
    width: 100%;
    background: #00302E;
    // padding: 0 3em;
`

export default function Landing() {
    return(
        <LandingPage>
            <Navbar />
            <Hero />
            <MainDisplay />
            <NewsLetter />
            <Footer />
        </LandingPage>
    )
}