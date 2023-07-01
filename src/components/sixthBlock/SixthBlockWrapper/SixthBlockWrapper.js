import BlocksOfText from  '../3BlocksText/3BlockText';
import HeaderWrapper from '../HeaderGradient/HeaderWrapper';
import styles from './SixthBlockWrapper.module.css'
const SixthBlock= (props)=>{

	return(
		<div className={styles.BLockWrapper}>
			
			<BlocksOfText/>
			{props.isMobile?'':<HeaderWrapper/> }

			
		</div>
		)
}

export default SixthBlock;