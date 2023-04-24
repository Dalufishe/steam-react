// redux
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";

// reducers

import language_r from "./reducers/language_r/language_r";

const reducer = combineReducers({
  language_r,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [language_r],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
const persistor = persistStore(store);

export { store, persistor };
