
import { createSlice } from '@reduxjs/toolkit';
import { fetchCarMakes } from './carsOperations'; // операція запиту на сервер

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    allCars: [],        // Всі машини, які приходять з сервера
    selectedCars: [],   // Машини, які користувач вибрав для порівняння
    filter: '',         // Текст пошуку
    editingCar: null,   // Машина, яку ми редагуємо
    loading: false,     // Стан завантаження
    error: null         // Стан помилки
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    selectCar(state, action) {
      if (state.selectedCars.length < 3) {
        state.selectedCars.push(action.payload);
      }
    },
    clearSelection(state) {
      state.selectedCars = [];
    },
    deleteCar(state, action) {
      const carId = action.payload;
      state.allCars = state.allCars.filter(car => car.id !== carId);
      state.selectedCars = state.selectedCars.filter(car => car.id !== carId);
    },
    setEditingCar(state, action) {
      state.editingCar = action.payload;
    },
    updateCar(state, action) {
      const updatedCar = action.payload;
      state.allCars = state.allCars.map(car =>
        car.id === updatedCar.id ? updatedCar : car
      );
      state.editingCar = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarMakes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarMakes.fulfilled, (state, action) => {
        state.loading = false;
        state.allCars = action.payload;
      })
      .addCase(fetchCarMakes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setFilter, selectCar, clearSelection, deleteCar, setEditingCar, updateCar } = carsSlice.actions;
export default carsSlice.reducer;