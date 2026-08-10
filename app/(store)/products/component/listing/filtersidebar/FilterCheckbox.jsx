import styles from './filterSidebar.module.css'
const FilterCheckbox =({
  item,
  color,
})=>{
    return (
    <label className={styles.option}>

      <input type="checkbox" />

      {color && (
        <span
          className={styles.colorDot}
          style={{
            background: item.code,
          }}
        />
      )}

      <span>{item.name}</span>

      <small>({item.count})</small>

    </label>
  );
}

export default FilterCheckbox