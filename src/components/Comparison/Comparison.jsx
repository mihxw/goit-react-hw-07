import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedCars } from '../../redux/selectors';
import { setEditingCar, deleteCar } from '../../redux/carsSlice';
import CarCard from '../CarCard/CarCard';
import styles from './Comparison.module.css';

export default function Comparison() {
  const dispatch = useDispatch();
  const selectedCars = useSelector(selectSelectedCars);

  const handleEdit = (car) => {
    dispatch(setEditingCar(car));
  };

  const handleDelete = (carId) => {
    dispatch(deleteCar(carId));
  };

  if (selectedCars.length === 0) {
    return <p className={styles.empty}>Виберіть машини для порівняння!</p>;
  }

  return (
    <div className={styles.comparison}>
      {selectedCars.map(car => (
        <CarCard
          key={car.id}
          car={car}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}