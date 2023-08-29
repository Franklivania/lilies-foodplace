import { styled } from 'styled-components'
import { constants } from '../../styledqueries/styledqueries'

const TouchButton = styled.button`
    width: max-content;
    border: none;
    outline: none;
    font-size: ${constants.text};
    background: transparent;
    cursor: pointer;
    display: flex;
`

type ToggleTypes = {
    title?: string
    text?: string
    icon?: string
    onClick?: () => void
    className?:string
    image?: string
    isActive?: boolean
    children?: any
}

export default function ToggleButton({title, text, icon, onClick, className, children, image, isActive}:ToggleTypes) {
    return(
        <TouchButton onClick={onClick} className={`${className} ${isActive ? 'activated' : ''}`}>
            {icon && <i className={icon}></i>}
            {text}
            {image && <img src={image} alt={title} title={title} />}
            {children}
        </TouchButton>
    )
}