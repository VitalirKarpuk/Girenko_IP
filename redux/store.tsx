import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch, createSelectorHook } from 'react-redux';
import { combineReducers } from 'redux';
import globalPropsReducer from './globalProps';
import bagReducer from './bag';

export const rootReducer = combineReducers({
    globalProps: globalPropsReducer,
    bag: bagReducer,
});

const initialState = rootReducer(undefined, { type: ' ' });

export const createStore = (globalProps, _initialValue = {}) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: { ..._initialValue, globalProps },
        devTools: true,
    });

    return store;
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export const useAppSelector = createSelectorHook<RootState>();
