import styles from "@/styles/About.module.css";
import CommonHead from "@/components/CommonHead";

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <CommonHead title={"About"} />
      </main>
    </>
  );
}
