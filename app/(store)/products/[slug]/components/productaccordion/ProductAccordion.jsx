import AccordionItem from "./AccordionItem";
import accordionData from "./accordionData";

import styles from "./productaccordion.module.css";
const ProductAccordion =()=>{
   return (
    <div className={styles.wrapper}>
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          Icon={item.icon}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default ProductAccordion