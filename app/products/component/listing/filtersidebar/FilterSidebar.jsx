import styles from './filterSidebar.module.css'
import filterData from './filterData'
import FilterSection from './FilterSection'
import PriceSlider from './PriceSlider'
const FilterSidebar =()=>{
    return (

    <aside className={styles.sidebar}>

      <h2 className={styles.title}>
        FILTERS
      </h2>

      <FilterSection
        title="Availability"
        options={["In stock", "Out of stock"]}
        type="radio"
      />

     <PriceSlider />

      {filterData
        .filter(item => item.title !== "Availability")
        .map((item) => (

          <FilterSection
            key={item.title}
            {...item}
            type="radio"
          />

      ))}

    </aside>

  );
}

export default FilterSidebar