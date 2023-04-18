import styles from "@/styles/About.module.css";
import Head from "next/head";

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <Head>
          <title>ravlico - About</title>
          <meta name="description" content="Ravlico Information Technologies Communication and Consultancy" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/triangle-black-1000.png" />
        </Head>
      </main>
    </>
  );
}
