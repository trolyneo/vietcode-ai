import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'VIETCODE AI',
  description: 'VIETCODE AI'
};

export default function HomePage() {
  redirect('/auth/sign-in');
}
