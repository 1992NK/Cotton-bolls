import styles from "./ratingBars.module.css"
const RatingBars =({data})=>{
    const total=data.reduce((sum,item)=>sum+item.count,0);
    return(

<div className={styles.wrapper}>

{
data.map((item)=>{

const percent=total===0 ? 0 : (item.count/total)*100;

return(

<div
className={styles.row}
key={item.star}
>

<span>{item.star}</span>

<div className={styles.bar}>

<div
className={styles.fill}
style={{width:`${percent}%`}}
></div>

</div>

<span>({item.count})</span>

</div>

)

})

}

</div>

)
}

export default RatingBars