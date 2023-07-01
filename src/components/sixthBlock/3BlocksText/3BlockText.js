import styles from './3BlockText.module.css';
import ImagesThree from '../../SecondBlock/DetailsImages/ImagesThree';
import InfoBlock from '../../FourthBlock/infoBlocks/InfoBLock';
import YearLondon4 from '../../FourthBlock/YearLondon/YearLondon4';

const BlocksOfText=()=>{

	return(
		<div className={styles.gridDisplay}>
			<div className={styles.YearLondon}>
				<YearLondon4>London 2006</YearLondon4>
			</div>
			<InfoBlock>
			Our team of talented designers and marketers works closely with each
			of our clients, taking the time to understand their unique needs and
			goals, and developing customized solutions that exceed their
			expectations.<br/><br/>

			We take pride in our abilty to create a cohesive brand identity, effective
			marketing strategies, and user-friendly websites and applications that
			help our clients achieve success.
			</InfoBlock>
			<InfoBlock>
			So if you're a start-up looking to create a strong brand identity, or an
			established business looking to revamp your marketing strategy, We
			have the expertise and experience to help you succeed.<br/><br/>

			Contact us today to learn more about our services and how we can help
			your business grow. We look forward to hearing from you and starting
			this exciting journey together.
			</InfoBlock>
		</div>

		);
}

export default BlocksOfText;