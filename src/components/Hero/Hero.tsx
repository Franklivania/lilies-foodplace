import { HeroMain, Aside, HeadText, HeadSpan, Paragraph, DownloadButton, BtnImage, Image } from './HeroComponents'
import hero from '../../assets/heroimg.svg'
import google from '../../assets/googleplay.svg'
import ios from '../../assets/applestore.svg'


const styles = {
    span:{
        display: 'flex',
        gap: '1em'
    }
}

export default function Hero() {
    return(
        <HeroMain>
            <Aside>
                <HeadText>
                    Order <HeadSpan>food</HeadSpan>&nbsp;
                    anytime, anywhere
                </HeadText>

                <Paragraph>
                    Browse from our list of specials to place your order and have
                    food delivered to you in no time. Affordable, tasty and fast
                </Paragraph>

                <HeadSpan style={styles.span}>
                    <DownloadButton>
                        <BtnImage src={google} alt='googleplay store' />
                    </DownloadButton>
                    <DownloadButton>
                        <BtnImage src={ios} alt='apple store'/>
                    </DownloadButton>
                </HeadSpan>
            </Aside>

            <Image src={hero} title='Garnished Noddles' alt='garnished vegetable noodles with black chopsicks' />
        </HeroMain>
    )
}