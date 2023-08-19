import { styled } from 'styled-components'
import { constants } from '../../styledqueries/styledqueries'

const TouchButton = styled.button`
    width: max-content;
    border: none;
    outline: none;
    font-size: ${constants.text};
    background: transparent;
    cursor: pointer;
`

type ToggleTypes = {
    title?: string
    text?: string
    onClick: () => void
    className?:string
    image?: string
    isActive: boolean
}

export default function ToggleButton({title, text, onClick, className, image, isActive}:ToggleTypes) {
    return(
        <TouchButton onClick={onClick} className={`${className} ${isActive ? 'activated' : ''}`}>
            {text}
            <img src={image} alt={title} title={title} />
        </TouchButton>
    )
}