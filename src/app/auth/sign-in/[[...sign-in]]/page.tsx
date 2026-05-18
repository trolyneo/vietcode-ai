import { Metadata } from 'next';
import SignInViewPage from '@/features/auth/components/sign-in-view';

export const metadata: Metadata = {
  title: 'Dang nhap | VIETCODE AI',
  description: 'Dang nhap dashboard VIETCODE AI bang Supabase Auth.'
};

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ error?: string; next?: string; redirect_url?: string }>;
}) {
  const params = await searchParams;
  return (
    <SignInViewPage
      error={params.error}
      next={params.next || params.redirect_url || '/dashboard/overview'}
    />
  );
}
