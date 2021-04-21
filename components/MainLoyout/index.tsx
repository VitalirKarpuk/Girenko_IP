import React from 'react';
import Header from '../Header';
import ListMenu from '../ListMenu';
import style from './index.module.css';

export default function MainLoyout({ children }: any) {
  return (
    <>
      <Header />
      <div className={style.container}>
        <ListMenu />
        <div className={style.catalog}>{children}</div>
      </div>
    </>
  );
}
