import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers/CardsSlice';

const rootReducer = combineReducers({
  flight: reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore['dispatch'];
