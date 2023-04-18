import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Head>
          <title>ravlico - Home</title>
          <meta name="description" content="Ravlico Information Technologies Communication and Consultancy" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/triangle-black-1000.png" />
        </Head>
      </main>
    </>
  );
}
