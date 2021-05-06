import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { getGlobalContentfulProps } from '../common/globalContentfulProps';
import MainLoyout from '../components/MainLoyout';
import ListProduct from '../components/ListProduct';
import Loading from '../components/loading/Loading';

export default function Home(props): JSX.Element {
  const { linens, pillow, plaid, towel } = props.globalProps;
  const allProducts = [...linens, ...pillow, ...plaid, ...towel].sort(() => Math.random() - 0.5);

  return (
    <>
      <MainLoyout>{allProducts ? <ListProduct props={allProducts} /> : <Loading />}</MainLoyout>
    </>
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
