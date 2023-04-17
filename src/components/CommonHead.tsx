import Head from "next/head";

export default function CommonHead({ title }: { title: string }) {
  return (
    <>
      <Head>
        <title>Ravlico - {title}</title>
        <meta name="description" content="Ravlico Information Technologies Communication and Consultancy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
