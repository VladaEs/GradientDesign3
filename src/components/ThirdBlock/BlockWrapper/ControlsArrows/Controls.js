import styles from './Controls.module.css';

const Controls= (props)=>{

    const ArrowBackHandler=()=>{
        props.clickHandler(false);
    }
    const ArrowForwardHandler=()=>{
        props.clickHandler(true);
    }


    return(
    <div className={styles.Controls}>
        <div className={`${styles.arrowBack} ${styles.Arrows}`} onClick={ArrowBackHandler}></div>
        <div className={`${styles.arrowForward} ${styles.Arrows}`} onClick={ArrowForwardHandler}></div>
    </div>
    )
}
export default Controls;