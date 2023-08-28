import { styled } from 'styled-components'
import { constants } from '../../styledqueries/styledqueries'
import SideNav from '../../components/SideNav/SideNav'
import TopNav from '../../components/TopNav/TopNav'
import DisplaysContent from '../../components/DisplaysContent/DisplaysContent'
import { useState } from 'react'

const DashboardContainer = styled.main`
    width: ${constants.width};
    height: ${constants.height};
    overflow: hidden;
    display: flex;
    align-items: flex-start;
`

const DashBoardContent = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1em 2em;
`

export default function DashBoard() {
    const [openContent, setOpenContent] = useState(0)
  return (
    <DashboardContainer>
        <SideNav openContent={openContent} setOpenContent={setOpenContent} />
        <DashBoardContent>
            <TopNav />
            <DisplaysContent openContent={openContent} setOpenContent={setOpenContent}/>
        </DashBoardContent>
    </DashboardContainer>
  )
}
