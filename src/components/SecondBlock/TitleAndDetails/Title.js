import styles from './Title.module.css';

const Title= (props)=>{
    

    return(
        <div className={styles.TitleWrapper}>
                {props.children}
        </div>
    )
}

export default Title;