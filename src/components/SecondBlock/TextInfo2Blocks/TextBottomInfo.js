import styles from './TextBottomInfo.module.css'

const TextBottomInfo=(props)=>{
    return(
        <div className={styles.TextBottomInfo}>
            {props.children}
        </div>

    )
}
export default TextBottomInfo;