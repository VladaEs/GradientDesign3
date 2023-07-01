import Header2 from '../Header2/Header2';
import styles from './FifthBlock.module.css';
import Title from '../../SecondBlock/TitleAndDetails/Title';
import InfoBlock from '../../FourthBlock/infoBlocks/InfoBLock';
const FifthBlock=()=>{
    return(
        <div className={styles.MainImage2}>
            <Header2/>
            <div className={styles.TitleMargin} >
                <Title>Expertise <label>and</label> <br/> experience</Title>
                <div className={styles.InfoBlockWrapper}>
                    <InfoBlock>
                        We believe that building long-lasting relationships with our clients is key to achieving success. We are 
                        passionate about what we do, and we are committed to delivering exceptional results for every client we work with.
                    </InfoBlock>
                </div>
            </div>
        </div>
    )
} 

export default FifthBlock;