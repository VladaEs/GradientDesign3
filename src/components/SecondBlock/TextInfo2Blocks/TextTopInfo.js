import styles from './TextTopInfo.module.css'

const TextInfoTop=(props)=>{
    return(
        <div className={styles.TextTopInfo}>
            {props.children}
        </div>

    )
}
export default TextInfoTop;