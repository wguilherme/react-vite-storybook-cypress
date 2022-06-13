import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import sidebarReducer from '../features/sidebar/sidebarSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sidebar: sidebarReducer,
  },
})

console.log('store state', store.getState())

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch