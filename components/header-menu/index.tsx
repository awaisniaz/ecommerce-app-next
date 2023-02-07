import React from 'react'
import styles from './header-menu.module.css'
import Logo from '../../assets/logo/logo_home-1.png'
import Image from 'next/image'
function HeaderMenu() {
    return (
        <div className={styles.menu_container}>
            <div className='left-part'><Image src={Logo} width={130} height={20}></Image></div>
            <div className='middle-part'>B</div>
            <div className='right-part'>B</div>
        </div >
    )
}

export default HeaderMenu
