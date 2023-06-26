import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../my-app/store/slice/counterSlice'
import cartSlice from './slice/cartSlice'

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    // counter: counterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch