
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/carsSlice'; 
import { selectFilter } from '../../redux/selectors';
import styles from './SearchForm.module.css';

export default function SearchForm() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={styles.input}
        placeholder="Введіть назву машини для пошуку..."
      />
    </form>
  );
}