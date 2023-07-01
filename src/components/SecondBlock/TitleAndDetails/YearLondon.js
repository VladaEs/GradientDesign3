import styles from "./YearLondon.module.css";

const YearLondon=(props)=>{

    return(
        <div className={styles.YearLondon}>
            {props.children}
        </div>
    )
}

export default YearLondon;