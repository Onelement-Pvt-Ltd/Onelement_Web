import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import technologyReducer from "@/features/technology/technologySlice";
import blogReducer from "@/features/blog/blogSlice";

const rootReducer = combineReducers({
  technology: technologyReducer,
  blog: blogReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["technology","blog"] 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);