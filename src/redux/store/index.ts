// src/store/index.ts

import { configureStore, AnyAction, Reducer } from '@reduxjs/toolkit';
import contactReducer, { ContactState } from '../reducers/contactReducer';
import { ContactActionTypes } from '../actions/contactActions';
const rootReducer: Reducer<ContactState, ContactActionTypes> = contactReducer;

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
