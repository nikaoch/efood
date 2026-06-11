import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../store/reducers/cart.ts'
import api from '../services/api.ts'

export const store = configureStore({
    reducer: {
        cart: CartReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
