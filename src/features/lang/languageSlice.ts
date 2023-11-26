import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    currentLanguage: 'en', // Set your default language here
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
