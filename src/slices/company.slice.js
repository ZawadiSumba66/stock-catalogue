import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api, API_KEY } from './api';

const initialState = {
  company: [],
  loading: true,
  error: '',
};
export const getcompany = createAsyncThunk(
  'stock/fetchStock',
  async (ticker) => {
    const response = await api.get(`profile/${ticker}?apikey=${API_KEY}`);
    return response.data[0];
  },
);

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {},
  extraReducers: {
    [getcompany.pending]: (state) => { state.loading = false; },
    [getcompany.fulfilled]: (state, action) => { state.company = action.payload; },
    [getcompany.rejected]: (state, action) => { state.error = action.payload; },
  },
});

export default companySlice.reducer;
