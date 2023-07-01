import styles from './HeaderPhoneMenu.module.css'

const HeaderPhoneMenu=(props)=>{
    
    return(
        <div className={`${styles.Menu} ${props.Active? styles.active:''}`}>
            <div className={styles.MenuContent}>
                <div className={styles.MenuHeader}>
                    <img src='/images/Logo.png' className={styles.LogoImage}/>
                    <span className={styles.CompanyName}>Influencezilla</span> 
                </div>
            
            <div className={styles.ElementsMenu}>
                <ul>
                    <li>About</li>
                    <li>Services </li>
                    <li>Cases</li>
                    <li>Team</li>
                    <li>LogoTranslate</li>
                    <li>Boost program</li>
                    <li>Products</li>
                    <li>Book</li>
                    <li>Blog</li>
                </ul>
            </div>
            </div>
        </div>

    )
}
export default HeaderPhoneMenu;