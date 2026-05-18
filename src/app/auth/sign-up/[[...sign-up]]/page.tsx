import { Metadata } from 'next';
import SignUpViewPage from '@/features/auth/components/sign-up-view';

export const metadata: Metadata = {
  title: 'Tao tai khoan | VIETCODE AI',
  description: 'Tao tai khoan dashboard VIETCODE AI bang Supabase Auth.'
};

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  return <SignUpViewPage error={params.error} />;
}
