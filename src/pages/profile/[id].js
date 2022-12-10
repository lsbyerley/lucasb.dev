import Head from 'next/head';
import { useRouter } from 'next/router';
import { SimpleLayout } from '@/components/SimpleLayout';

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const pageTitle = `Lens Profile`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Lens Profile" />
      </Head>
      <SimpleLayout title="Lens Profile" intro="Lens Profile">
        <div className="space-y-20">
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Profile Page Coming Soon for {id}
          </p>
        </div>
      </SimpleLayout>
    </>
  );
};

export default Profile;
