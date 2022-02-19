import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import style from './index.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.icon}>
                <InstagramIcon style={{ color: '#c13584' }} fontSize="large" />
            </div>
            <p className={style.note}>© 2021 Girenko.by</p>
        </footer>
    );
};

export default Footer;
