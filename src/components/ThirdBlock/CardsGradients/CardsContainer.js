import styles from './CardsContainer.module.css'
import Card from './Card';
import { useState} from 'react';
const CardsContainer= (props)=>{




    let arrayInfo= [
        [
        {num:"01", info:"Crafting distinctive brand identities for impactful market presence."},
        {num:'02', info:'Creating visually captivating, user-friendly, and SEO-optimized websites.'},
        {num:'03', info:'Driving audience expansion, brand recognition, and conversion through impactful influencer campaigns.'},
        {num:"04", info:'Delivering engaging, trustworthy, and on-brand content of exceptional quality.'},
    ],
    [
        {num:"05", info:"Tailoring expertly-crafted social media strategies to amplify engagement and boost brand visibility"},
        {num:"06", info:"Specializing in captivating packaging designs that embody your brand essencea and grab attention"},
        {num:"07", info:"Leveraging data-driven insights, we create targeted ad campaigns to maximize ROI and boost."},
        {num:"08", info:"reating captivating brand narratives through strategic storytelling and stunning videos."},
    ],
    ];

    return(
        <div className={styles.CardContainer}>
            {!props.press? 
            arrayInfo[0].map( (item, index)=> <Card ind={index+1} key={index} Num={item.num} Descr={item.info}></Card>): 
            arrayInfo[1].map( (item, index)=> <Card ind={index+5} key={index} Num={item.num} Descr={item.info}></Card>)}
            
        </div>
    )



}

export default CardsContainer;