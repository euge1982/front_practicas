import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';

// Combine all reducers
const reducers = combineReducers({
    user: userReducer, 
})

//Persist configuration
const persistConfig  = {
    key: 'root',
    storage,
}

//Create a persisted reducer
const persistedReducer = persistReducer (persistConfig, reducers)

//Exporta la store y el persistor
export const store = configureStore({
    reducer: persistedReducer,
    //Middleware para evitar el error de serialización
    middleware: (gerDefaultMiddleware) => gerDefaultMiddleware({
        serializableCheck: false,
    })
});

export const persistor = persistStore(store);