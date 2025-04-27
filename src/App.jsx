import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCarMakes } from './redux/carsOperations';
import { selectCars, selectLoading, selectError, selectEditingCar } from './redux/selectors';

import SearchForm from './components/SearchForm/SearchForm';
import CarList from './components/CarList/CarList';
import ClearSelectionButton from './components/ClearSelectionButton/ClearSelectionButton';
import Comparison from './components/Comparison/Comparison';
import EditCarForm from './components/EditCarForm/EditCarForm';
import Section from './components/Section/Section';
import Loader from './components/Loader/Loader';

import styles from './App.module.css';

export default function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const editingCar = useSelector(selectEditingCar);
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCarMakes());
  }, [dispatch]);

  return (
    <Section>
      <div className={styles.container}>
        <h1 className={styles.title}>Пошук та порівняння автомобілів</h1>

        {/* Форма пошуку */}
        <SearchForm />

        {/* Завантаження */}
        {loading && <Loader />}

        {/* Помилка */}
        {!loading && error && (
          <p className={styles.error}>Помилка: {error}</p>
        )}

        {/* Якщо немає помилки і немає автомобілів */}
        {!loading && !error && cars.length === 0 && (
          <p className={styles.empty}>Автомобілі не знайдені</p>
        )}

        {/* Якщо машини є */}
        {!loading && !error && cars.length > 0 && (
          <>
            {/* Якщо не редагуємо */}
            {!editingCar ? (
              <>
                <CarList />

                <div className={styles.buttonWrapper}>
                  <ClearSelectionButton />
                </div>

                <Comparison />
              </>
            ) : (
              /* Якщо редагуємо машину */
              <EditCarForm />
            )}
          </>
        )}
      </div>
    </Section>
  );
}