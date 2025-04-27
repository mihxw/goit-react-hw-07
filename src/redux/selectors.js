import { createSelector } from '@reduxjs/toolkit';

export const selectCars = (state) => state.cars.cars || [];
export const selectLoading = (state) => state.cars.loading;
export const selectError = (state) => state.cars.error;
export const selectEditingCar = (state) => state.cars.editingCar;
export const selectSelectedCars = (state) => state.cars.selectedCars || [];
export const selectFilter = (state) => state.cars.filter || '';
// 7. Селектор для фільтрованого списку машин
export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    if (!filter.trim()) {
      return cars.slice(0, 20); // показати перші 20 машин, якщо немає пошуку
    }
    return cars.filter(car =>
      car.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);