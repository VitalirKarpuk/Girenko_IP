import { SatelliteTwoTone } from '@material-ui/icons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LineItem = {
    title?: string;
};

export interface BagState {
    isOpen: boolean;
    LineItems: Array<LineItem>;
}

export type ToggleIsOpenPayload = { isOpen: boolean };
export type AddToBagPayload = {
    title?: string;
};

const initialState: BagState = {
    isOpen: false,
    LineItems: [],
};

const bagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        toggleIsOpen: (state, action: PayloadAction<ToggleIsOpenPayload>): BagState => {
            state.isOpen = action.payload.isOpen;
            return state;
        },
        addToBag: (state, action: PayloadAction<AddToBagPayload>): BagState => {
            const { payload } = action;
            console.log({
                ...payload,
            });

            state.LineItems.push({
                ...payload,
            });
            return state;
        },
    },
});

export const { actions } = bagSlice;

export default bagSlice.reducer;
