import React from 'react';
import { useRouter } from 'next/router';

import useGlobalProps from '../redux/hooks/useGlobalProps';
import MainLoyout from '../components/MainLoyout';
import ListProduct from '../components/ListProduct';

export default function MenuPage() {
  const router = useRouter();
  const globalProps = useGlobalProps();

  return (
    <MainLoyout>
      <h1>Menu {router.query.id}</h1>
      {globalProps && <ListProduct props={globalProps[`${router.query.id}`]} />}
    </MainLoyout>
  );
}
