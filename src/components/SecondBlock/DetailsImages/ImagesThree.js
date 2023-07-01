import styles from './ImagesThree.module.css';

const ImagesThree= ()=>{
    let countImages=3;
    const tempArray = Array.from({ length: countImages });
    
    return(
        <div className={styles.ImagesThree}>
        {tempArray.map((item,index) =>{return<img src="/images/subtitleStar.png" key={index}/>})}
        </div>
    )
}
export default ImagesThree;