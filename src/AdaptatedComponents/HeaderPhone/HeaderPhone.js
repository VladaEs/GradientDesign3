import styles from './HeaderPhone.module.css';
import { useState,useEffect } from 'react';
const HeaderPhone=(props)=>{
    const  [MenuActive, SetMenuActive]=useState(false);
    useEffect(()=>{
        props.Active(MenuActive);
        
    },[MenuActive])
    
    return(
       <nav className={styles.HeaderBurger}>
        <div className={styles.burgerBtn} onClick={()=>SetMenuActive(!MenuActive)}>
            <span/>
        </div>
       </nav>
    )
}

export default HeaderPhone;