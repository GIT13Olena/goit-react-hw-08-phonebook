import PropTypes from 'prop-types';
import styles from './Filther.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <label className={styles['label-search']}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="&#128269;"
        className={styles['input-search']}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
