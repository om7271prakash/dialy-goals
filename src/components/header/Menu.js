import { useState } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import styles from './menu.module.css'

const Menu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState();
    return (
        <div className={styles.headerMenu}>
            {menuIsOpen 
                ? <VscChromeClose className={styles.menuIcon} onClick={() => setMenuIsOpen(false)} /> 
                : <VscMenu className={styles.menuIcon} onClick={() => setMenuIsOpen(true)}/>}
        </div>
    )
}

export default Menu;