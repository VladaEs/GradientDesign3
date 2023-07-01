import styles from './Header2.module.css'

const Header2= ()=>{

    return(
        <div className={styles.Header2Wrapper}>
            <div className={styles.elemHeaderLeft}>Let`s get <br/>started</div>
            <div className={styles.elemHeaderRight}>
                <div className={styles.elemInsideLeft}>Let`s get <br/>started</div>
                <div>Let`s get <br/>started</div>
            </div>
        </div>
    )
}

export default Header2;