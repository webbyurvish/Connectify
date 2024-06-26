import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    accessToken: null,
    isLoading: false,
    error: ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    }
})

export default authSlice.reducer;