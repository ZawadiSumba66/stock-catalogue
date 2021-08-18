import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'ALL',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    createFilter(state, action) {
      state.category = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { createFilter } = filterSlice.actions;
