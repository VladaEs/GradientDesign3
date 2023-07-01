import styles from './InfoBlock.module.css';

const InfoBlock=(props)=>{


    return(
        <div className={styles.InfoBlock}>
            {props.children}
        </div>
    )
}
export default InfoBlock;