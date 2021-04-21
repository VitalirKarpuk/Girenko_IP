import React from 'react';
import { GetStaticProps } from 'next';
import { getGlobalContentfulProps } from '../common/globalContentfulProps';
import MenuCategorySection from '../components/sections';
import MainLoyout from '../components/MainLoyout';

export default function Home(): JSX.Element {
  return <MainLoyout>{/* <MenuCategorySection /> */}</MainLoyout>;
}

export const getStaticProps: GetStaticProps = async () => {
  const globalProps = await getGlobalContentfulProps();

  return {
    props: {
      globalProps,
    },
  };
};
