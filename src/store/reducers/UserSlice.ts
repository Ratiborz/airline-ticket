import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  isLoading: false,
  error: '',
};

export const flightSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default flightSlice;
