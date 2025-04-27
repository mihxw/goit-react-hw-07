
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = "3669336c28msh0e818a8c7dbb811p1ccaf3jsnce64cc2b044b"; 
const API_HOST = "car-api2.p.rapidapi.com";

// Асинхронний запит на сервер для отримання марок машин
export const fetchCarMakes = createAsyncThunk(
  'cars/fetchCarMakes',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id&limit=20', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server responded with error:', errorText);
        throw new Error('Server Error');
      }

      const data = await response.json();
      console.log('Fetched car makes:', data);

      return data.data || []; // повертаємо список машин
    } catch (error) {
      console.error('Fetch error:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);