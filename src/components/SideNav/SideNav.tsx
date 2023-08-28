import { useEffect, useState } from 'react'
import logo from '../../assets/icon.svg'
import ToggleButton from '../ToggleButton/ToggleButton'
import PageToggle from '../PageToggle/PageToggle'
import './SideNav.scss'

type SideNavTypes = {
    openContent: number
    setOpenContent: (openContent: number) => void
}

export default function SideNav({openContent, setOpenContent}: SideNavTypes) {
    const [expand, setExpand] = useState(false)

    useEffect(() => {
        const storedExpand = localStorage.getItem('expand');
        if (storedExpand) {
            setExpand(JSON.parse(storedExpand));
        }

        const storedOpenContent = localStorage.getItem('openContent');
        if (storedOpenContent) {
            setOpenContent(Number(storedOpenContent));
        }
    }, [])

    function handleExpand(){
        localStorage.setItem('expand', JSON.stringify(expand))
        setExpand(!expand)
    }
    
    function handleOpen(index: number){
        setOpenContent(index)
        localStorage.setItem('openContent', String(index));
    }

  return (
    <menu id="side-nav" className={!expand ? 'expanded' : ''}>
        <ToggleButton
            icon={`fa-solid fa-${expand ? 'angles-left' : 'angles-right'}`}
            onClick={handleExpand}
            className='expand-btn'
            isActive
        />

        <PageToggle
            image={logo}
            title={expand ? 'Lilies' :  ''}
            link='/'
            className='logo'
        />

        <nav>
            <ToggleButton
                icon='fa-solid fa-home'
                text={expand ? 'DashBoard' : ''}
                onClick={() => handleOpen(0)}
                className='db-btn home'
                isActive={openContent === 0}
            />
            <ToggleButton
                icon='fa-solid fa-user'
                text={expand ? 'Your Profile' : ''}
                onClick={() => handleOpen(1)}
                className='db-btn profile'
                isActive={openContent === 1}
            />
            <ToggleButton
                icon='fa-solid fa-calendar'
                text={expand ? 'Orders' : ''}
                onClick={() => handleOpen(2)}
                className='db-btn orders'
                isActive={openContent === 2}
            />
            <ToggleButton
                icon='fa-solid fa-bookmark'
                text={expand ? 'Cart' : ''}
                onClick={() => handleOpen(3)}
                className='db-btn cart'
                isActive={openContent === 3}
            />
        </nav>
    </menu>
  )
}
