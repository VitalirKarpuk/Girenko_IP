import React from 'react';
import useBag from '../../redux/hooks/useBag';
import Checkout from '../../components/checkout';
import MainLoyout from '../../components/MainLoyout';
import Advice from '../../components/advice';

export default function AdvicePage() {

    return <MainLoyout><Advice /></MainLoyout>

}
