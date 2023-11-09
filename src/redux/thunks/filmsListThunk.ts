import { createAsyncThunk } from "@reduxjs/toolkit";
import { Films } from "../slices/filmsSlice";


export type FilmsResponse = {
    Search: Films[];
    totalResults: string;
    Response: string;
}

export const filmsList = createAsyncThunk<FilmsResponse, string, { rejectValue: string }>('films', async (params, { rejectWithValue }) => {

    const response = await fetch(`http://www.omdbapi.com/?apikey=64405bd2${params}`);

    if (!response.ok) {
        return rejectWithValue('Server Error!')
    }

    const responseItems = response.json()
    
    return responseItems;
})