import { useDispatch, useSelector } from 'react-redux';
import { updateCar, setEditingCar } from '../../redux/carsSlice';
import { selectEditingCar } from '../../redux/selectors';
import styles from './EditCarForm.module.css';

export default function EditCarForm() {
  const dispatch = useDispatch();
  const editingCar = useSelector(selectEditingCar);

  if (!editingCar) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedCar = {
      id: editingCar.id,
      name: form.elements.name.value.trim(),
      engine: form.elements.engine.value.trim(),
      power: form.elements.power.value.trim(),
      maxSpeed: form.elements.maxSpeed.value.trim(),
    };
    dispatch(updateCar(updatedCar));
    form.reset();
  };

  const handleCancel = () => {
    dispatch(setEditingCar(null));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Редагувати машину</h2>

      <input
        type="text"
        name="name"
        defaultValue={editingCar.name}
        placeholder="Назва"
        className={styles.input}
      />
      <input
        type="text"
        name="engine"
        defaultValue={editingCar.engine}
        placeholder="Двигун"
        className={styles.input}
      />
      <input
        type="text"
        name="power"
        defaultValue={editingCar.power}
        placeholder="Потужність"
        className={styles.input}
      />
      <input
        type="text"
        name="maxSpeed"
        defaultValue={editingCar.maxSpeed}
        placeholder="Макс. швидкість"
        className={styles.input}
      />

      <div className={styles.buttons}>
        <button type="submit" className={styles.saveButton}>
          Зберегти
        </button>
        <button type="button" onClick={handleCancel} className={styles.cancelButton}>
          Скасувати
        </button>
      </div>
    </form>
  );
}