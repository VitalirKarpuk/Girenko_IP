import React from 'react';
import useBag from '../../redux/hooks/useBag';
import Checkout from '../../components/checkout';

export default function CheckoutPage() {
  const { bagEntries } = useBag();
  
  return <Checkout bagEntries={bagEntries} />;
}
