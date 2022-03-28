import { configureStore } from "@reduxjs/toolkit";
import { counterApi } from "../components/Counter/api-slice";
import counterReducer from "../components/Counter/counter-slice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [counterApi.reducerPath]: counterApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(counterApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch