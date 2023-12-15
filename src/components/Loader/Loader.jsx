import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.css';

const sizes = {
  sm: 40,
  md: 60,
  lg: 80,
};

function Loader({ size = 'lg' }) {
  return (
    <div className={styles['loader']}>
      <RotatingLines
        strokeColor="#90B37B"
        strokeWidth="4"
        width={sizes[size]}
        animationDuration="1.2"
      />
    </div>
  );
}

export default Loader;
