import { configureStore } from '@reduxjs/toolkit';
// import exampleReducer from './reducers/exampleReducer';
import exampleReducer from './slice/exampleSlice';

// Add the reducer to the store.
const store = configureStore({
  reducer: {
    examples: exampleReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
