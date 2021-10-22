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

export const getCategoryList = createAsyncThunk(
    'categorySlice/getCategoryList',

    async () => {
        const resp = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        return resp.data.categories;
    }
);


const categorySlice = createSlice({
    name: 'category',
    initialState: { categories: [] },

    //  reducers: {
    //  },

    // reducers with async operation
    extraReducers: {
        [getCategoryList.fulfilled]: (state, action) => {
            if (!action.payload) return;
            state.categories = action.payload;
        },

        // error handler
        [getCategoryList.rejected]: (state, action) => {
            console.log('rejected => action: ', action);
        },
    }

});


// Extract the action creators object and the reducer
const { actions, reducer } = categorySlice;

// Extract and export each action creator (normal reducers) by name
// export const {  } = actions;

// Export the reducer, either as a default or named export
export default reducer;
