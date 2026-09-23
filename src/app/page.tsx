import { getAllWritings } from '@/lib/db';
import HomePageClient from '@/components/HomePageClient';

export const revalidate = 0; // dynamic

export default function HomePage() {
  const allWritings = getAllWritings(false);

  return <HomePageClient initialWritings={allWritings} />;
}
