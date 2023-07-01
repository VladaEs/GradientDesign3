import CardsContainer from '../CardsGradients/CardsContainer';
import Controls from './ControlsArrows/Controls';
import styles from './ThirdBlockWrapper.module.css';
import { useState } from 'react';
const ThirdBlock=(props)=>{
    const [IsPressed, SetIsPressed ]= useState(false);
    const IsActive=(data)=>{
        
        SetIsPressed(data);
    }
    return(
        <div className={styles.ThirdBlockWrapper}>
            <CardsContainer  press={IsPressed}/>
            <Controls clickHandler={IsActive}/>
        </div>

    )
}

export default ThirdBlock;