import styles from "@/styles/Home.module.css";
import CommonHead from "@/components/CommonHead";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <CommonHead title={"Home"} />
      </main>
    </>
  );
}
