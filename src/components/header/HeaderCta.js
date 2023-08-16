import styles from './headerCta.module.css'
import { VscSignIn } from "react-icons/vsc";

const HeaderCta = () => {
    return (
        <div className={styles.headerCta}>
            <VscSignIn className={styles.menuIcon} />
        </div>
    )
}

export default HeaderCta;