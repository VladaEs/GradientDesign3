import styles from './SecondBlock.module.css'
import TextInfoTop from '../TextInfo2Blocks/TextTopInfo';
import TextBottomInfo from '../TextInfo2Blocks/TextBottomInfo';
import Title from '../TitleAndDetails/Title';
import YearLondon from '../TitleAndDetails/YearLondon';
import ImagesThree from '../DetailsImages/ImagesThree';
import Card from '../CardBlock/Card';
const SecondBlock= ()=>{

    return(
        <div className={styles.SecondBlockWrapper}>
            <TextInfoTop>Our creative design bureau is based in the heart of London and 
                specializes in digital branding, website design, and influence marketing.
                <br/><br/>
                We believe in the power of digital media to transform businesses and connect them with their 
                audiences in meaningful ways.
            </TextInfoTop>
            <Title>We turn your digital <br/><span className={styles.underline}>dream</span> into reality</Title>
            <YearLondon>2006 London</YearLondon>
            <TextBottomInfo>Our team of experienced designers and marketing professionals work closely with 
                    each client to understand their unique vision and develop tailored solutions that align with their goals.<br/><br/>
                    From designing eye-catching logos and brand identities, to building custom websites that engage and convert 
                    isitors, to crafting effective influencer marketing campaigns, we are dedicated to helping our clients 
                    succeed in the digital space.
            </TextBottomInfo>
            <ImagesThree/>
            <Card/>
        </div>

    )
}

export default SecondBlock;