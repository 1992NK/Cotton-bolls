import styles from './quantityselector.module.css'
const QuantitySelector = () => {

    return (

        <div className={styles.quantitynumber}>

            <label>Quantity</label>

            <select>

                <option>1</option>
                <option>2</option>
                <option>3</option>

            </select>

        </div>

    )
}

export default QuantitySelector;