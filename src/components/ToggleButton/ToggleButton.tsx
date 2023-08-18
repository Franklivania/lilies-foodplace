import { styled } from 'styled-components'
import { constants } from '../../styledqueries/styledqueries'

const TouchButton = styled.button`
    width: max-content;
    border: none;
    outline: none;
    font-size: ${constants.text};
    background: transparent;
`

type ToggleTypes = {
    title?: string
    onClick: () => void
    className?:string
    children?: string
    isActive: (onClick: () => void) => boolean
}

export default function ToggleButton({title, onClick, className, children, isActive}:ToggleTypes) {
    return(
        <TouchButton onClick={onClick} className={`${className} ${isActive(onClick) ? 'activated' : ''}`}>
            {title}
            {children}
        </TouchButton>
    )
}