import { useDispatch } from 'react-redux';
import { clearSelection } from '../../redux/carsSlice';
import styles from './ClearSelectionButton.module.css';

export default function ClearSelectionButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearSelection());
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      Очистити вибрані машини
    </button>
  );
}