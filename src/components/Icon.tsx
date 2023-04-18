import icon from "/public/ravlico-black";
import styles from "@/styles/Icon.module.css";
import Image from "next/image";

export default function Icon({ width, height }: { width: number; height: number }) {
  return <Image className={styles.icon} width={width} height={height} src={icon} alt={"Ravlico Icon"} />;
}
