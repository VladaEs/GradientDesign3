import styles from './Year.module.css';

const YearMain =(props)=>{
    let date = new Date();

    return(
        <div className={styles.YearWrapper}>
            <div className={styles.Year}>{date.getFullYear()}</div>
            <div className={styles.YearDescription}>{props.children}</div>
        </div>
    )
}

export default YearMain;