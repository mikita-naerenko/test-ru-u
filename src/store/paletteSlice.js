import { createSlice } from '@reduxjs/toolkit';

export const paletteSlice = createSlice({
  name: 'palette',
  initialState: {
    colors: []
  },
  reducers: {
    addColor: (state, action) => {
      state.colors.push(action.payload);
    },
    removeColor: (state, action) => {
      state.colors.splice(action.payload, 1);
    },
    updateColor: (state, action) => {
      state.colors[action.payload.index] = action.payload.color;
    }
  }
});

export const { addColor, removeColor, updateColor } = paletteSlice.actions;

export default paletteSlice.reducer;
