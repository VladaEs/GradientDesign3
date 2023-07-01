import styles from './Card.module.css';

const Card=()=>{



    return(
        <div className={styles.CardWrapper}>
            <img src='/images/CardImg2.jpg' className={styles.CardImage} alt='hello'/>
            <span>Since 2006</span>
        </div>
    )

}

export default Card;