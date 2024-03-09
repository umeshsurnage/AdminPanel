import { createSlice } from "@reduxjs/toolkit"

const CounterSlice = createSlice({
  name: "Counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      return { ...state, value: state.value + 1 }
    },
    decrement: (state) => {
      if (state.value > 0) {
        return { ...state, value: state.value - 1 }
      }
    },
  },
})

export const { increment, decrement } = CounterSlice.actions
export default CounterSlice.reducer
