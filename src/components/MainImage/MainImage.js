import styles from './MainImage.module.css';
import Header from './header/header'; 
import { useState} from 'react';

import MainText from './TextBlocksFirstPage/MainText';
import YearMain from './TextBlocksFirstPage/Year';
import SubtitleMain from './TextBlocksFirstPage/SubtitleMain';
import RightArticle from './TextBlocksFirstPage/RightArticle';
import WorkDirections from './TextBlocksFirstPage/WorkDirections';

import HeaderPhone from '../../AdaptatedComponents/HeaderPhone/HeaderPhone';
import HeaderPhoneMenu from '../../AdaptatedComponents/HeaderPhone/HeaderPhoneMenu'
const MainImage=(props)=>{
    const pullData=(data)=>{
        SetIsActive(data);
        
    }
    const [IsActive,SetIsActive ]=useState(false);
    return(
        <div className={styles.wrapperMainImage}>
            {props.isMobile? <HeaderPhone Active={pullData}/>:<Header />}
            <img src='GradientDesign2/images/MainImage.jpg' alt="MainImage Should be here" className={styles.MainImage} draggable="false"  /*ref={ImageRef}*/ />
            <WorkDirections/>
            <YearMain>No time, let`s <br/> get started</YearMain>
            <MainText/>
            <SubtitleMain>Boost your brand with our<br/>marketing expertise</SubtitleMain>
            <RightArticle>We believe in the power of digital media to transform businesses and connect them with their audience in meaningful ways</RightArticle>
            <HeaderPhoneMenu Active={IsActive}/>
        </div>
    )

}
export default MainImage;