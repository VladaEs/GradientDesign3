import styles from './header.module.css';
import { useEffect, useState, useRef } from 'react';

const Header=(props)=>{
    // const HeaderRef= useRef(null);
    // const [HeaderHeight, SetHeaderHeight]= useState(0);
    
    // const chechHeight=()=>{
        
    //     SetHeaderHeight(HeaderRef.current.getBoundingClientRect().height);
    //     props.HeightHeaderHandler(HeaderHeight);
    // }
    // useEffect(()=>{
        
    //     window.addEventListener('resize',chechHeight);
    //     window.onload=()=>{
    //         chechHeight();
    //     }
    //     return ()=>{
            
    //         window.removeEventListener('resize', chechHeight);
    //     }
    // }, [HeaderHeight]);

    

    return(
        <header className={styles.HeaderContainer} /*ref={HeaderRef}*/ >
            <div className={styles.LogoName}>
                <img src='/images/Logo.png' className={styles.LogoImage}/>
                <span className={styles.CompanyName}>Influencezilla</span> 
                <span className={styles.CompanyDescription} >Bespoke design and<br/> marketing services</span>
            </div>
            <nav className={styles.NavigationContainer}>
                <div className={`${styles.NavigationRow}`}>
                    <div className={styles.NavigationElem}>About</div>
                    <div className={styles.NavigationElem}>Services</div>
                    <div className={styles.NavigationElem}>Cases</div>
                    <div className={styles.NavigationElem}>Team</div>
                    <div className={styles.NavigationElem}>LogoTranslate</div>
                </div>
                
                <div className={`${styles.NavigationRow} `}>
                    <div className={styles.NavigationElem}>Boost program</div>
                    <div className={styles.NavigationElem}>Products</div>
                    <div className={styles.NavigationElem}>Book</div>
                    <div className={styles.NavigationElem}>Blog</div>
                </div>
            </nav>
        </header>
    )
}
export default Header;

/* 
      <div className={styles.NavigationRow}>
                    <div className={`${styles.NavigationElem} ${styles.About}`}>About</div>
                    <div className={`${styles.NavigationElem} ${styles.Services}`}>Services</div>
                    <div className={`${styles.NavigationElem} ${styles.Cases}`}>Cases</div>
                    <div className={`${styles.NavigationElem} ${styles.Team}`}>Team</div>
                    <div className={`${styles.NavigationElem} ${styles.LogoTranslate}`}>LogoTranslate</div>
                    <div className={`${styles.NavigationElem} ${styles.Boost}`}>Boost program</div>
                    <div className={`${styles.NavigationElem} ${styles.Products}`}>Products</div>
                    <div className={`${styles.NavigationElem} ${styles.Book}`}>Book</div>
                    <div className={`${styles.NavigationElem} ${styles.Blog}`}>Blog</div>
                </div>
*/