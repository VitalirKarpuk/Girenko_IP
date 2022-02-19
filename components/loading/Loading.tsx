import React from 'react';
import classnames from 'classnames';

import style from './index.module.css';

const Loading = () => {
  return (
    <div className={style.verticalCenteredBox}>
      <div className={style.content}>
        <div className={style.loaderCircle}></div>
        <div className={classnames(style.loaderLineMsk, style.one)}>
          <div className={style.loaderLine}></div>
        </div>
        <div className={classnames(style.loaderLineMask, style.two)}>
          <div className={style.loaderLine}></div>
        </div>
        <div className={classnames(style.loaderLineMask, style.three)}>
          <div className={style.loaderLine}></div>
        </div>
        <div className={classnames(style.loaderLineMask, style.four)}>
          <div className={style.loaderLine}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
