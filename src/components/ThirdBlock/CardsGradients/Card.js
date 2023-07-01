import styles from './Card.module.css'

const Card=(props)=>{

    return(
        <div className={styles.CardWrapper}>
            <img src={`/images/Card${props.ind}.jpg`} className={styles.CardImage}/>
            <div className={styles.TextOnImage}>
                <span className={styles.NumberImage}>{props.Num}</span>
                <span className={styles.DescriptionCard}>{props.Descr}</span>
            </div>
        </div>
    )

}
export default Card;