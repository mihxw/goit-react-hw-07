import styles from './CarCard.module.css';

export default function CarCard({ car, onEdit, onDelete }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{car.name}</h3>
      <p className={styles.info}>Двигун: {car.engine}</p>
      <p className={styles.info}>Потужність: {car.power}</p>
      <p className={styles.info}>Максимальна швидкість: {car.maxSpeed}</p>

      <div className={styles.buttons}>
        <button className={styles.editButton} onClick={() => onEdit(car)}>
          Редагувати
        </button>
        <button className={styles.deleteButton} onClick={() => onDelete(car.id)}>
          Видалити
        </button>
      </div>
    </div>
  );
}