import { createSlice } from '@reduxjs/toolkit'


export const toggleSlice = createSlice({
  name: 'sidebar',
  initialState: {
    expanded: true,
  },
  reducers: {
    toggle: (state) => {
      state.expanded = !state.expanded
    }
  },
})

export const { toggle } = toggleSlice.actions
export default toggleSlice.reducer