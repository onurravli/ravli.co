import Image from "next/image";
import logo from "/public/ravlico-logo-white.svg";
import styles from "@/styles/Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image src={logo} alt={"Ravlico Logo"} />
    </div>
  );
}
