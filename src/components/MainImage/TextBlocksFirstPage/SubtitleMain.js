import styles from './SubtitleMain.module.css';

const SubtitleMain=(props)=>{

    return(
        <div className={styles.SubtitleWrapper}>
            <span className={styles.SubtitleText}>
                {props.children}
            </span>
        </div>
    )
}
export default SubtitleMain;