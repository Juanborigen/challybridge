import React from 'react';
//Constants
import { NAV_LINKS } from './constants';
//Styles
import styles from './header.module.scss';
//Components & images
import logo from '../../public/Assets/Images/logo.png'


const Header = () => {
    return(
        <nav>
            <div className={styles.container}>
                <img src={logo} alt={'Company logo'} className={styles.logo}/>
                <ul className={'px-5 bg-red '}>
                    {
                        NAV_LINKS.map((link, index) =>
                            <a key={index} href={link.linkTo}><li>{link.label}</li></a>
                        )
                    }
                </ul>
            </div>
        </nav>
      )
};

export default Header;