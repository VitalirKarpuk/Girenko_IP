import { useSelector } from 'react-redux';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import * as BagStore from '../bag';
import { PayloadAction } from '@reduxjs/toolkit';
import { selectBagEntriesCount, selectLineItems } from '../selectors/bag';

export interface UseBagHook {
  isOpen: boolean;
  bagEntriesCount: number;
  bagEntries: any;
  actions: {
    toggleIsOpen: (payload: BagStore.ToggleIsOpenPayload) => PayloadAction<BagStore.ToggleIsOpenPayload>;
    addToBag: (payload: BagStore.AddToBagPayload) => PayloadAction<BagStore.AddToBagPayload>;
  };
}

export default function useBag(): UseBagHook {
  const dispatch = useAppDispatch();

  const isOpen = useSelector<RootState, boolean>((state) => state?.bag?.isOpen);

  const toggleIsOpen = (payload: BagStore.ToggleIsOpenPayload) => {
    return dispatch(BagStore.actions.toggleIsOpen(payload));
  };

  const addToBag = (payload: BagStore.AddToBagPayload) => {
    return dispatch(BagStore.actions.addToBag(payload));
  };

  const bagEntriesCount = useAppSelector(selectBagEntriesCount);
  const bagEntries = useAppSelector(selectLineItems);
  return {
    isOpen,
    bagEntriesCount,
    bagEntries,
    actions: {
      toggleIsOpen,
      addToBag,
    },
  };
}
