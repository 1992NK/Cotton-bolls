import Image from "next/image";
import styles from "./page.module.css";
import Homeslider from "@/component/homeslider/Homeslider";

export default function Home() {
  return (
    <div className={styles.page}>
      <Homeslider />
    </div>
  );
}
