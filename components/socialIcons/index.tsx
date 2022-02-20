import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import styles from './index.module.css';
import classNames from 'classnames';

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      {/* <InstagramIcon className={styles.iconHover} style={{ color: '#c13584' }} fontSize="large" /> */}
      <a href="tg://resolve?domain=yarik1101">
        <TelegramIcon className={styles.iconHover} style={{ color: '#0088cc' }} fontSize="large" />
      </a>
      <a href="https://api.whatsapp.com/send/?phone=375295080632">
        <WhatsAppIcon className={styles.iconHover} style={{ color: '#43d854' }} fontSize="large" />
      </a>
      <a href="viber://chat?number=%2B375295080632">
        <span className={classNames(styles.viver, styles.iconHover)} />
      </a>
    </div>
  );
};

export default SocialIcons;
