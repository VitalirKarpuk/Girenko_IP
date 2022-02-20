import React from 'react';
import Link from 'next/link';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import styles from './index.module.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import classNames from 'classnames';
interface IInfoAboutCustomer {
  mobile: string;
  recallMessage: string;
  workingTime: string;
}

const infoAboutCustomer: IInfoAboutCustomer = {
  mobile: '123123213-12312',
  recallMessage: 'Закажите обратный звонок',
  workingTime: 'Сб: 10:00 - 20:00, Вс: 10:00 - 18:00',
};

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <Link href="/" as={`/`}>
        <span className={styles.logo}>
          Букеты из тюльпанов <br /> на 8 марта
        </span>
      </Link>
      <div className={styles.infoCustomer}>
        <span>Принимаем заказы по тлф.:</span>
        <span>
          +375295080632,
          <br />
          +375293274529
        </span>
        <span>У нас вы можете заказать доставку или забрать в пункте самовывоза.</span>
        <span>Доставка цветов будет осуществляться 5, 6, 7, 8 и 9 марта в удобное для вас время</span>
        <div className={styles.socialIcons}>
          {/* <InstagramIcon className={styles.iconHover} style={{ color: '#c13584' }} fontSize="large" /> */}
          <a href="tg://resolve?domain=VitalikKarpuk">
            <TelegramIcon className={styles.iconHover} style={{ color: '#0088cc' }} fontSize="large" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=375295080632">
            <WhatsAppIcon className={styles.iconHover} style={{ color: '#43d854' }} fontSize="large" />
          </a>
          <a href="viber://chat?number=%2B375295080632">
            <span className={classNames(styles.viver, styles.iconHover)} />
          </a>
        </div>
      </div>
    </header>
  );
}
