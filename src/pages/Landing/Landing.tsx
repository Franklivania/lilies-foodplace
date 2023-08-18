import { styled } from "styled-components"
import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero/Hero"

const LandingPage = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background: #00302E;
    padding: 0 3em;
`

export default function Landing() {
    return(
        <LandingPage>
            <Navbar />
            <Hero />
        </LandingPage>
    )
}