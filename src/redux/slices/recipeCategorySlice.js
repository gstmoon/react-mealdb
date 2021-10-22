/**
 * 
 * See: https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice
 * See: https://redux-toolkit.js.org/usage/usage-with-typescript#type-safety-with-extrareducers
 * See: https://www.youtube.com/watch?v=eFh2Kr9hfyo
 * 
 */

 import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
 import axios from 'axios';
 
 // async operations
 // See: https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk
 
 export const getRecipeFromCategory = createAsyncThunk(
     'recipeCategorySlice/getRecipeFromCategory',
 
     async (category) => {
         const resp = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
         return resp.data.meals;
     }
 );
 
 
 const recipeCategorySlice = createSlice({
     name: 'randomRecipe',
     initialState: { recipes: [] },
 
     //  reducers: {
     //  },
 
     // reducers with async operation
     extraReducers: {
         [getRecipeFromCategory.fulfilled]: (state, action) => {
             if (!action.payload) return;
             state.recipes = action.payload;
         },
 
         // error handler
         [getRecipeFromCategory.rejected]: (state, action) => {
             console.log('rejected => action: ', action);
         },
     }
 
 });
 
 
 // Extract the action creators object and the reducer
 const { actions, reducer } = recipeCategorySlice;
 
 // Extract and export each action creator (normal reducers) by name
 // export const {  } = actions;
 
 // Export the reducer, either as a default or named export
 export default reducer;
 