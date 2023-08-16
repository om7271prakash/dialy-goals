import styles from './header.module.css'
import { VscMenu, VscSignIn } from "react-icons/vsc";
import Menu from './Menu';
import HeaderCta from './HeaderCta';

const Header = () => {
    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.headerLogo}>
                Om
            </div>
            <HeaderCta />
        </div>
    )
}

export default Header;