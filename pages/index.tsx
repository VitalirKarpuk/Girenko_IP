import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { getGlobalContentfulProps } from '../common/globalContentfulProps';
import MainLoyout from '../components/MainLoyout';
import ListProduct from '../components/ListProduct';
import Loading from '../components/loading/Loading';

export default function Home(props): JSX.Element {

  const {flowers } = props.globalProps;
  return (
    <div id="main">
      <MainLoyout>{flowers ? <ListProduct props={flowers} /> : <Loading />}</MainLoyout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const globalProps = await getGlobalContentfulProps();

  return {
    props: {
      globalProps,
    },
  };
};
