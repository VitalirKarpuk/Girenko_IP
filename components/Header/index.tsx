import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import SocialIcons from '../socialIcons';

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
        <SocialIcons />
        <span>У нас вы можете заказать доставку или забрать в пункте самовывоза.</span>
        <span>Доставка цветов будет осуществляться 5, 6, 7, 8 и 9 марта в удобное для вас время</span>
      </div>
    </header>
  );
}
