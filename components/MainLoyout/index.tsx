import React from 'react';
import Header from '../Header';
import ListMenu from '../ListMenu';
import Footer from '../footer/Footer';
import styles from './index.module.css';
import { StylesProvider } from '@material-ui/core';
import Link from 'next/link';

export default function MainLoyout({ children }: any) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.container}>
        <ListMenu />
        <div className={styles.catalog}>{children}</div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
