import { createAsyncThunk } from "@reduxjs/toolkit";
import { FilmCard } from "../slices/filmsSlice";

export const filmCard = createAsyncThunk<FilmCard, string, { rejectValue: string }>('filmCard', async (params, { rejectWithValue }) => {

    const response = await fetch(`http://www.omdbapi.com/?apikey=64405bd2${params}`);

    if (!response.ok) {
        return rejectWithValue('Server Error!')
    }

    const responseItems = response.json()
    
    return responseItems;
})