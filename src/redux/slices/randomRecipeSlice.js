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

export const getRandomRecipe = createAsyncThunk(
    'randomRecipe/getRandomRecipe',

    async () => {
        const resp = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        return resp.data.meals[0];
    }
);


const randomRecipeSlice = createSlice({
    name: 'randomRecipe',
    initialState: { recipe: {} },

    //  reducers: {
    //  },

    // reducers with async operation
    extraReducers: {
        [getRandomRecipe.fulfilled]: (state, action) => {
            if (!action.payload) return;
            state.recipe = action.payload;
        },

        // error handler
        [getRandomRecipe.rejected]: (state, action) => {
            console.log('rejected => action: ', action);
        },
    }

});


// Extract the action creators object and the reducer
const { actions, reducer } = randomRecipeSlice;

// Extract and export each action creator (normal reducers) by name
// export const {  } = actions;

// Export the reducer, either as a default or named export
export default reducer;
