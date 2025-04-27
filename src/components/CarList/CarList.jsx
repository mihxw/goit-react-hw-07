
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredCars, selectSelectedCars } from '../../redux/selectors';
import { selectCar } from '../../redux/carsSlice';
import styles from './CarList.module.css';

export default function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(selectFilteredCars);
  const selectedCars = useSelector(selectSelectedCars);

  const handleSelect = (car) => {
    if (selectedCars.some(selected => selected.id === car.id)) {
      alert('Ця машина вже обрана!');
      return;
    }
    if (selectedCars.length >= 3) {
      alert('Ви можете вибрати тільки 3 машини для порівняння!');
      return;
    }
    dispatch(selectCar(car));
  };

  if (cars.length === 0) {
    return <p className={styles.empty}>Автомобілі не знайдені</p>;
  }

  return (
    <ul className={styles.list}>
      {cars.map((car) => (
        <li key={car.id} className={styles.item}>
          <h3>{car.name}</h3>
          <button onClick={() => handleSelect(car)} className={styles.selectButton}>
            Додати до порівняння
          </button>
        </li>
      ))}
    </ul>
  );
}