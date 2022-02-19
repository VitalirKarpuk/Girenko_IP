import React from 'react';
import { useRouter } from 'next/router';

import useGlobalProps from '../../redux/hooks/useGlobalProps';
import MainLoyout from '../../components/MainLoyout';
import DealProducts from '../../components/dealProducts';

export default function MenuPage() {
  const router = useRouter();
  const globalProps = useGlobalProps();
  const arr = [];
  console.log(router.query.menu);
  if (globalProps) {
    Object.values(globalProps).forEach((element: any) => {
      const res = Array.isArray(element) && element.filter((item: any) => item?.sys?.id === router.query.menu);
      res.length > 0 && arr.push(res[0]);
    });
  }

  return <MainLoyout>{arr.length > 0 && <DealProducts props={arr} />}</MainLoyout>;
}
