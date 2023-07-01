import styles from './Table.module.css';

const Table=()=>{
    return(
        <div className={styles.TableContainer}>
            <table className={styles.WholeTable}>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>02</td>
                        <td>03</td>
                    </tr>
                    <tr>
                        <td>
                            <span>Branding</span>
                            Our team of experts specializes in creating unique and effective designs
                        </td>
                        <td>
                            <span>Design</span>
                            Innovative and effective design solutions for
                            business of our clients
                        </td>
                        <td>
                            <span>Marketing</span>
                            Our team of experienced designers and marketing professionals work closely
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table