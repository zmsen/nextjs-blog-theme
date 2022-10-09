import Head from 'next/head';
<meta http-equiv="refresh" content="1;URL=https://t.me/+fEb6_z9Rh0QxNzQy" />
export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}
