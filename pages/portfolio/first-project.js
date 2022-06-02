import Link from 'next/link';
import Head from 'next/head';

export default function FirstProject() {
  return (
    <>
      <Head>
        <title>First Project</title>
      </Head>
      <h1>First Project</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
