// rxslice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// state khoi tao
type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 10,
};
const couterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // hafm thay doi state
    // state không phải là tham số ,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // hàm tăng n đơn vị
    incrementByAmount: (state, action: PayloadAction<number>) => {
      console.log("👉 action", action);
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = couterSlice.actions;

export default couterSlice.reducer;
