import Head from 'next/head';
import service from '../service';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Title of the page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* The content of the page here */}
      </main>

      <footer>
        Full stack project developed by
        {' '}
        <a href="https://github.com/raphaelalmeidamartins">Raphael Martins</a>
        {' '}
        with Next.js and Node.js
      </footer>
    </div>
  );
}
