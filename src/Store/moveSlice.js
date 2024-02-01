import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllMovies = createAsyncThunk('movie/get', async () => {
    try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        return response.data;
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

        throw new Error(message);
    }
});

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        isLoading: false,
        isSuccess: false,
        isError: false,
        errorMessage: ''
    },
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.errorMessage = '';
            state.isSuccess = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload;
                state.isSuccess = true;
            })
            .addCase(fetchAllMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.errorMessage = 'No data to show';
                state.movies = [];
            });
    }
});

export const { reset } = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;