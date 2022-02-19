import { GetStaticProps } from 'next';
import React from 'react';
import MainLoyout from '../../components/MainLoyout';
import { getGlobalContentfulProps } from '../../common/globalContentfulProps';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import style from './index.module.css';
import { useStyles } from '../../components/ListProduct';

export default function СontactsPage(props) {
  const { typesBouquets } = props.globalProps;

  const listImg = typesBouquets[0]?.fields?.typesBouquets;

  const classes = useStyles();
  return (
    <MainLoyout>
      <h3>Сделаем букеты из любого количества тюльпанов.</h3>
      <h5>Варианты букетов:</h5>
      <div className={style.wrapper}>
        {listImg &&
          listImg?.map((item: any) => {
            return (
              <Card key={item.fields?.title} className={classnames(classes.root, style.card)}>
                <img className={style.image} src={item.fields?.file?.url} alt={item.fields?.title} />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    2.5 руб/шт.
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </MainLoyout>
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
