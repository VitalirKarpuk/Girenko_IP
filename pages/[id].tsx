import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import useGlobalProps from '../redux/hooks/useGlobalProps';
import MainLoyout from '../components/MainLoyout';
import ListProduct from '../components/ListProduct';
import Loading from '../components/loading/Loading';
import { GetStaticProps } from 'next';
import { getGlobalContentfulProps } from '../common/globalContentfulProps';

export default function MenuPage() {
  const router = useRouter();
  const globalProps = useGlobalProps();

  return (
    <MainLoyout>
      <h1>Menu {router.query.id}</h1>
      {globalProps ? <ListProduct props={globalProps[`${router.query.id}`]} /> : <Loading />}
    </MainLoyout>
  );
}
