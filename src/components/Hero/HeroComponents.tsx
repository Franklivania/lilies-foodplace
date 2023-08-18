import { styled } from 'styled-components'
import { devices, constants } from '../../styledqueries/styledqueries'

export const HeroMain = styled.main`
    width: ${constants.width};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15em;
    margin: 8em 0;

    @media screen and ${devices.mobile}{
        flex-direction: column;
        gap: 1em;
    }
`

export const Aside = styled.aside`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 2em;
`

export const HeadText = styled.h1`
    font-size: ${constants.largeText};
    color: ${constants.white};
    font-weight: 400;
`

export const HeadSpan = styled.span`
    color: ${constants.cream};
    gap: 1em;
`

export const Paragraph = styled.p`
    font-size: ${constants.text};
    color: ${constants.white};
`

export const Image = styled.img`
    width: calc(${constants.width} * 0.3);
    @media screen and ${devices.mobile}{
        width: ${constants.width};
    }
`

export const BtnImage = styled.img`
    width: max-content;
`

export const DownloadButton = styled.a`
    width: max-content;
    text-decoration: none;
    cursor: pointer;
`