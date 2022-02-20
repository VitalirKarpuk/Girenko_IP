import React from 'react';
import MainLoyout from '../../components/MainLoyout';
import SocialIcons from '../../components/socialIcons';

export default function СontactsPage() {
  return (
    <MainLoyout>
      <p>
        Принимаем заказы по тлф.:
        <br /> +375295080632,
        <br /> +375293274529
      </p>
      <SocialIcons />
      <p>
        Пункт самовывоза: <br /> Минский район, а.г. Колодищи, улица минская 2а
      </p>
    </MainLoyout>
  );
}
