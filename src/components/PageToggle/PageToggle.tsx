import { styled } from 'styled-components'
import { useLocation } from 'react-router-dom'
import { constants } from '../../styledqueries/styledqueries'

const PageButton = styled.button`
    width: max-content;
    border: none;
    outline: none;
    background: transparent;
    font-size: 1em;
    color: ${constants.white};
    cursor: pointer;
`

type PageTypes = {
    className?: string
    title?: string
    link: string
}

export default function PageToggle({className, title, link}: PageTypes) {
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
            {title}
        </PageButton>
    )
}