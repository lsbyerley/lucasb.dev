import Head from 'next/head';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
// import { getAllArticles } from '@/lib/getAllArticles';
import { formatDate } from '@/lib/formatDate';
import { useAppContext } from '@/AppContext';

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="hidden mt-1 md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}

export default function ArticlesIndex({ articles = [] }) {
  const { name } = useAppContext();
  const pageTitle = `Articles - ${name}.dev`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="A small collection of thoughts I have about tech collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Articles"
        intro="A small collection of thoughts I have about tech and who knows what else"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <p className="text-gray-600 dark:text-gray-200">new posts soon..</p>
          {/*<div className="flex flex-col max-w-3xl space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
            </div>*/}
        </div>
      </SimpleLayout>
    </>
  );
}

/* export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  };
} */
