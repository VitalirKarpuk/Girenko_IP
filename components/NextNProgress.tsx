import React, { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import PropTypes from 'prop-types';
import style from './index.module.css';
import classnames from 'classnames';

const NextNProgress = () => {
  const [state, setState] = useState(false);
  let timer = null;

  const routeChangeStart = () => {
    NProgress.set(0.3);
    NProgress.start();
    setState(true);
  };

  const routeChangeEnd = () => {
    clearTimeout(timer);
    setState(false);
    timer = setTimeout(() => {
      NProgress.done(true);
    }, 200);
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);
  });

  return (
    <>
      {state && (
        <div className={style.preloader}>
          <div className={style.loader}></div>
        </div>
      )}
    </>
  );
};

export default NextNProgress;
