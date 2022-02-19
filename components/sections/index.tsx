import React from 'react';
import ListProduct from '../ListProduct/index';
import style from './index.module.css';

const PageSections = (): JSX.Element => (
    <div className={style.container}>
        <ListProduct />
    </div>
);

export default PageSections;
