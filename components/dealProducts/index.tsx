import React from 'react';
import useBag from '../../redux/hooks/useBag';
import { Button } from '../atoms/button';
import Typography from '@material-ui/core/Typography';
import SliderImg from '../atoms/sliderImg';
import style from './index.module.css';

export default function DealProducts({ props }: any) {
  console.log(props);

  const bag = useBag();

  const handleAddToBag = (item: any) => {
    bag.actions.addToBag(item);
  };

  return (
    <div className={style.wrapper}>
      <SliderImg props={props} />
      <div>
        <Typography variant="h5" component="h2">
          {props[0]?.fields?.name?.content[0].content[0].value || ''}
        </Typography>
        <Typography variant="h6" component="h2">
          Цена: {props[0]?.fields?.price?.content[0].content[0].value || ''}
        </Typography>
        <Typography variant="h6" component="h2">
          Размер: {props[0]?.fields?.size?.content[0].content[0].value || ''}
        </Typography>
        <Button text={'В корзину'} onClick={() => handleAddToBag(props[0])} />
      </div>
      <div className={style.description}>
        <Typography variant="h6" component="h2">
          Материал: {props[0]?.fields?.material?.content[0].content[0].value || ''}
        </Typography>
        <Typography variant="h6" component="h2">
          Цвет: {props[0]?.fields?.color?.content[0].content[0].value || ''}
        </Typography>
        <Typography variant="h6" component="h2">
          {props[0]?.fields?.description}
        </Typography>
      </div>
    </div>
  );
}
