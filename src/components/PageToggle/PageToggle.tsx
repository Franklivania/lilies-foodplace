import { styled } from 'styled-components'
import { useLocation } from 'react-router-dom'

const PageButton = styled.button`
    width: max-content;
    border: none;
    outline: none;
    background: transparent;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

type PageTypes = {
    className?: string
    title?: string
    link: string
    image: string
}

export default function PageToggle({className, title, image, link}: PageTypes) {
    const location = useLocation()
    const isActive:boolean = location.pathname === link 

    function handleClick() {
        window.location.href = link
    }
    return(
        <PageButton
            type='button'
            className={`${className} ${isActive ? 'active' : ''}`}
            onClick={handleClick}
        >
            {image && <img src={image} alt="" />}
            {title}
        </PageButton>
    )
}