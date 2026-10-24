// rxslice
import { UserType } from "@/types/user.type";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { userService } from "@/services/user.service";

type UserState = {
  items: UserType[];
  error: string | null;
  status: "loading" | "succeeded" | "failed" | "idle";
};

const initialState : UserState = {
  items: [],
  error: "",
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserType[]>) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.status = "failed";
    },
    setStatus: (state, action: PayloadAction<"loading" | "succeeded" | "failed" | "idle">) => {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
      builder.addCase(fetchUsersThunk.pending,(state)=>{
        state.status = "loading";
      })
      builder.addCase(fetchUsersThunk.fulfilled,(state, action)=>{
        state.items = action.payload;
        state.status = "succeeded";
      })
      builder.addCase(fetchUsersThunk.rejected,(state, action)=>{
        state.error = action.payload as string;
        state.status = "failed";
      })
  },
});

export const { setUsers, setError, setStatus } = userSlice.actions;

export default userSlice.reducer;
// hàm tạo gọi service

export const fetchUsers = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setStatus("loading"));
    try {
      const response = await userService.getUsers();
      dispatch(setUsers(response));
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  };
};

// coi thêm 
export const fetchUsersThunk = createAsyncThunk<UserType[], void, {rejectValue:string, state:RootState}>(
    "user/fetchUsers",
    async (_, { rejectWithValue, getState }) => {
      try {
        const response = await userService.getUsers();
        return response;
      } catch (error) {
        return rejectWithValue((error as Error).message);
      }
    }
)