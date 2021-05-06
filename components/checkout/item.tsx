import React, { useEffect, useState } from 'react';
import style from './index.module.css';
import useGlobalProps from '../../redux/hooks/useGlobalProps';
import GroupedButtons from '../atoms/GroupedButtons';

export default function Item({ bagEntries }) {
  const [totalPrice, setTotalPrice] = useState();
  const { bagIcon } = useGlobalProps();

  const getTotalPrice = () => {
    return bagEntries.reduce((acc, item) => {
      const price = parseInt(item.fields.price.content[0].content[0].value);
      acc += price;
      return acc;
    }, 0);
  };

  useEffect(() => {
    if (bagEntries.length > 0) {
      setTotalPrice(getTotalPrice());
    }
  }, [bagEntries]);

  return (
    <div className={style.wrapper}>
      {!bagEntries.length && bagIcon ? (
        <div className={style.iconBag}>
          <img
            src={`${bagIcon[0].fields?.icon?.fields?.file?.url}`}
            alt={`${bagIcon[0].fields?.icon?.fields?.description}`}
          />
          <h2>В вашей корзине пока ничего нет</h2>
          <p>Перейдите в каталог и добавьте товары.</p>
        </div>
      ) : (
        <div className={style.itemWrapper}>
          <div className={style.headerBag}>
            <h2>Корзина</h2>
            <h2>Итого: {totalPrice}</h2>
          </div>
          {bagEntries.map((element) => (
            <div className={style.item} key={element.sys.id}>
              <h2>{element?.fields?.name?.content[0].content[0].value}</h2>
              <h3>{element.fields.price.content[0].content[0].value}</h3>
              <div>
                <img src={element?.fields.img[0].fields.file.url} alt={element.fields.img[0].fields.title} />
                <GroupedButtons />
              </div>

              <p>{element?.fields?.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
