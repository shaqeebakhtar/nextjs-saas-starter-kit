import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await auth();

  if (!session) {
    redirect('/login?next=/dashboard');
  }

  return <p>Welcome {session?.user?.name}</p>;
};

export default page;
