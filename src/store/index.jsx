import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import todoReducer from "@/store/todoSlice";

const reducers = combineReducers({
  todo: todoReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist:[], // 不緩存的
}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk] // 處裡非同步
})


export default store;
export const persistor = persistStore(store);