import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, API_KEY } from './api';

const initialState = {
  stock: [],
  loading: true,
  error: '',
};
export const getstock = createAsyncThunk(
  'stock/fetchStock',
  async () => {
    const response = await api.get(`actives?apikey=${API_KEY}`);
    return response.data;
  },
);

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {},
  extraReducers: {
    [getstock.pending]: (state) => { state.loading = false; },
    [getstock.fulfilled]: (state, action) => { state.stock = action.payload; },
    [getstock.rejected]: (state, action) => { state.error = action.payload; },
  },
});

export default stockSlice.reducer;
