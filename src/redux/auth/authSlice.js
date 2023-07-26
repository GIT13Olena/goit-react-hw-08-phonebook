import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, current } from './authThunk';

const initialState = {
  user: {},
  isLogin: localStorage.getItem('isLoggedIn') === 'true',
  token: '',
  loading: false,
  error: null,
};

export const signUpAsync = createAsyncThunk('auth/signUp', async formData => {
  const response = await signUp(formData);
  return response.data;
});

export const logInAsync = createAsyncThunk('auth/logIn', async formData => {
  const response = await logIn(formData);
  return response.data;
});

export const logOutAsync = createAsyncThunk('auth/logOut', async () => {
  const response = await logOut();
  return response.data;
});

export const getCurrentUserAsync = createAsyncThunk(
  'auth/getCurrentUser',
  async () => {
    const response = await current();
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUpAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        localStorage.setItem('isLoggedIn', 'true');
      })
      .addCase(signUpAsync.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(logInAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logInAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        localStorage.setItem('isLoggedIn', 'true');
      })
      .addCase(logInAsync.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(logOutAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOutAsync.fulfilled, state => {
        state.loading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
        localStorage.setItem('isLoggedIn', 'false');
      })
      .addCase(logOutAsync.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getCurrentUserAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUserAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.isLogin = true;
      })
      .addCase(getCurrentUserAsync.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
        state.error = payload;
        localStorage.setItem('isLoggedIn', 'false');
      });
  },
});

export const { updateUser } = authSlice.actions;

export default authSlice.reducer;
