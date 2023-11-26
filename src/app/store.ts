// store.ts
import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import languageReducer from '../features/lang/languageSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  language: languageReducer, // Add the language slice
  // Add other reducers here if you have more slices
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
