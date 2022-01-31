import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import * as contactsReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const rootReducer = combineReducers({
  items: contactsReducer.items,
  filter: filterReducer,
  loading: contactsReducer.loading,
});

// export const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, rootReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
