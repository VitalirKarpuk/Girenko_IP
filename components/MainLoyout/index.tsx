import React from 'react';
import Header from '../Header';
import ListMenu from '../ListMenu';
import styles from './index.module.css';

export default function MainLoyout({ children }: any) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.container}>
        <ListMenu />
        <div className={styles.catalog}>{children}</div>
      </section>
    </div>
  );
}
