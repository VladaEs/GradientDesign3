import styles from './FOurthBlock.module.css';
import Title from '../../SecondBlock/TitleAndDetails/Title';
import YearLondon4 from '../YearLondon/YearLondon4';
import InfoBlock from '../infoBlocks/InfoBLock';
import Table from '../TableSections/Table';
const FourthBlock= ()=>{
    return(
        <div className={styles.FourthBlockWrapper}>
            <Title>Help our clients <label>achive</label><br/> their business objectives</Title>
            <div className={styles.gridDisplay}>
                <div className={styles.YearWrapper}>
                    <YearLondon4>2006 London</YearLondon4>
                </div>
                <InfoBlock>
                    Influenzilla is a leading design and marketing agency that offers creative solutions to businesses of all sizes.
                    Our team of experts specializes in creating unique and effective designs that help our clients stand out in a crowded market.<br/><br/>

                    Our mission is to help our clients achieve their business objectives through innovative and effective design solutions. 
                    We believe that great design is more than just aesthetics. It's about creating a seamless user experience that engages and 
                    delights your audience.
                </InfoBlock>
                <InfoBlock>
                    We take pride in our ability to understand the unique needs and goals of each of our clients, and to develop customized solutions that exceed their expectations. Our team of talented designers and marketers work closely with our
                    clients to create a cohesive brand identity, effective marketing strategies, and user-friendly websites and applications.<br/><br/>
                    We offer a wide range of services, including branding, web design, social media marketing, graphic design, and more. Our goal is to help our 
                    clients achieve success by providing them with the tools and resources they need to grow their business.
                </InfoBlock>
            </div>
            <Table/>
            <div className={styles.InfoBlockBottom}>
                <InfoBlock>
                    We specialize in creating unique and innovative designs that not only capture the essence of your business
                     but also help you achieve your goals. We believe that great design is about creating a seamless user experience
                      that engages and delights your audience, and we work hard to ensure that every design we create meets this high
                       standard.
                </InfoBlock>
            </div> 
        </div>
    )
}

export default FourthBlock;