import { createSelector } from '@reduxjs/toolkit';

export const selectBag = (state: any) => state.bag;

export const selectLineItems = createSelector(selectBag, (bag) => bag.LineItems);

export const selectBagEntriesCount = createSelector(selectLineItems, (lineItems) => {
    return lineItems.length;
});
