import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/getData.js';
import { listNotionDatabases } from '../lib/getNotionData';
import { getNotionBlogPosts } from '../lib/getNotionData';
import { getBlogPostsInfo } from '../lib/getNotionData';

export async function getStaticProps() {
  // listNotionDatabases();
  // getNotionBlogPosts(); 
  // getBlogPostsInfo();
  const sortedPostsData = getSortedPostsData();
  return {
    props: {
      sortedPostsData,
    },
  };
}


export default function Home({ sortedPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl">
        <p>Hello, my name is Dario. I’m a programmer with a focus on web and UI/UX development, also interested in software development in general. 
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="text-lg pt-px">
        <h2 className="text-2xl">Blog</h2>
        <ul className="p-0 m-0 list-none">
          {sortedPostsData.map(({ id, date, title }) => (
            <li className="mx-0 mt-0 mb-5" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="mx-0 mt-0 mb-5">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
