import React from 'react';
import Header from '../Header';
import Item from './item';
import style from './index.module.css';

export default function checkout({ bagEntries }) {
  return (
    <>
      <Header />
      <Item bagEntries={bagEntries} />
    </>
  );
}
