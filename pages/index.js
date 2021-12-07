import Head from "next/head";

const posts = [
  {
    title: "Kumamoto's Mt. Aso",
    excerpt: "Explore one of the best sights in Kumamoto.",
  },
  {
    title: "Chiba's Mt. Nokogiri",
    excerpt: "See for yourself the jagged beauty of Mt. Nokogiri.",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-grey-300">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
    </div>
  );
}
