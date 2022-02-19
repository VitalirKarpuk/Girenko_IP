import React from 'react';
import useBag from '../../redux/hooks/useBag';
import Typography from '@material-ui/core/Typography';
import SliderImg from '../atoms/sliderImg';
import style from './index.module.css';

export default function DealProducts({ props }: any) {
  const bag = useBag();
  console.log(props);
  const { name, price, size, material, color, description } = props[0]?.fields;

  return (
    <div className={style.wrapper}>
      <SliderImg props={props} />
      <div>
        <Typography variant="h5" component="h2">
          {name?.content[0].content[0].value || ''}
        </Typography>
        <Typography variant="h6" component="h2">
          Цена: {price?.content[0].content[0].value || ''}
        </Typography>
        <Typography variant="h6" component="h2">
          Размер: {size?.content[0].content[0].value || ''}
        </Typography>
      </div>
      <div className={style.description}>
        <Typography variant="h6" component="h2">
          Материал: {material?.content[0].content[0].value || ''}
        </Typography>
        <Typography variant="h6" component="h2">
          Цвет: {color?.content[0].content[0].value || ''}
        </Typography>
        <Typography variant="h6" component="h2">
          {description}
        </Typography>
      </div>
    </div>
  );
}
