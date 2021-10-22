/**
 * 
 * See: https://redux-toolkit.js.org/tutorials/quick-start
 * See: https://redux-toolkit.js.org/usage/usage-with-typescript
 */

import { configureStore } from '@reduxjs/toolkit';

// import reducers
import randomRecipeReducer from './slices/randomRecipeSlice'
import recipeCategoryReducer from './slices/recipeCategorySlice'
import categoryReducer from './slices/categorySlice'

const store = configureStore({
    reducer: {
        randomRecipe: randomRecipeReducer,
        categoryRecipe: recipeCategoryReducer,
        categories: categoryReducer,
    },

    // see: https://github.com/reduxjs/redux-toolkit/issues/820
    // only enable when node env is not production
    devTools: process.env.NODE_ENV !== "production",
})

export default store;
