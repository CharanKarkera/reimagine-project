import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      switch (action.payload.type) {
        case "LOGIN":
          state.status = true;
          break;
        case "LOGOUT":
          state.status = false;
          break;
        default:
          break;
      }
    },
  },
});

export const { setStatus } = authSlice.actions;
export default authSlice.reducer;
