import styles from './RigthArticle.module.css'

const RightArticle= (props)=>{

    return(
        <div className={styles.RightArticleWrapper}>
            <img src='/images/subtitleStar.png' className={styles.RightImage}/>
            <span className={styles.RightArticleText}>{props.children}</span>
        </div>
    )
}
export default RightArticle;