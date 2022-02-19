import React from 'react';
import Link from 'next/link';
import useBag from '../../redux/hooks/useBag';
import styles from './index.module.css'
interface IInfoAboutCustomer {
    mobile: string;
    recallMessage: string;
    workingTime: string;
}

const infoAboutCustomer: IInfoAboutCustomer = {
    mobile: '123123213-12312',
    recallMessage: 'Закажите обратный звонок',
    workingTime: 'Сб: 10:00 - 20:00, Вс: 10:00 - 18:00',
}


export default function Header() {
    return (
        <header className={styles.headerWrapper} >
            <Link href="/" as={`/`}>
                <span className={styles.logo}>Букеты из тюльпанов на 8 марта</span>
            </Link>
            <div className={styles.infoCustomer}>
                <span>Принимаем заказы по тлф.:</span>
                <span>+375293274529, +375295080632</span>
                <span>У нас вы можете заказать доставку или приехать на самовывоз</span>
            </div>
        </header >
    );
}
