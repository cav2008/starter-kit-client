import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@slices/reducer';
import pokemonApi from '@api/pokemon';

// Add the reducer to the store.
const store = configureStore({
  reducer: { client: rootReducer, [pokemonApi.reducerPath]: pokemonApi.reducer },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
