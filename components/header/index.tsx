import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import deliveryVehical from '../../assets/icons/delivery.svg'
import Globe from '../../assets/icons/globe.svg'
import fb from '../../assets/icons/fb.svg'
import twitter from '../../assets/icons/twitter.svg'
function Header() {

    return (
        <div className={styles.main_container}>
            <div className={styles.left_part}>
                <span className={styles.free_delivery}><Image src={deliveryVehical} alt='delivery'></Image>Free Delivery</span>
                <span className={styles.free_delivery}><Image src={deliveryVehical} alt='return policy'></Image>Return Policy</span>

                <div className={styles.social_login}>
                    <span>Follow us:</span>
                    <div className={styles.socilaicon}>
                        <Image src={fb} alt='facebook'></Image>
                        <Image src={twitter} alt='twitter'></Image>
                    </div>
                </div>
            </div>
            <div className={styles.right_part}><button className={styles.login_btn}>Login</button></div>

        </div>
    )
}

export default Header
