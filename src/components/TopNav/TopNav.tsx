import { styled } from 'styled-components'
import { constants } from '../../styledqueries/styledqueries'

const Navigation = styled.nav`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Image = styled.img`
    height: calc(${constants.wkHeight} * 0.05);
    width: calc(${constants.wkWidth} * 0.05);
    border-radius: ${constants.radius};
`

const styles = {
    lgText:{
        color: "#00302E",
    },
    smText:{
        color: "#B2B2B2",
    }
}

export default function TopNav() {
  return (
    <Navigation>
        <span>
            <h2 style={styles.lgText}>Good day, User</h2>
            <p style={styles.smText}>What delicious meal are you craving today?</p>
        </span>

        <Image src="https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg" alt="image placeholder" />
    </Navigation>
  )
}
