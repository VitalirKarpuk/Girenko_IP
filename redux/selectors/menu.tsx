import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectListMenu = (state: RootState) => state;

export const selectLinesProduct = createSelector(selectListMenu, (state) => 'name');
