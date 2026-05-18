'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value : '';
}

export async function signInWithPassword(formData: FormData) {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect('/dashboard/overview?auth=demo');
  }

  const email = getString(formData, 'email');
  const password = getString(formData, 'password');
  const next = getString(formData, 'next') || '/dashboard/overview';

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/auth/sign-in?error=${encodeURIComponent(error.message)}`);
  }

  redirect(next);
}

export async function signUpWithPassword(formData: FormData) {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect('/dashboard/overview?auth=demo');
  }

  const email = getString(formData, 'email');
  const password = getString(formData, 'password');

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    redirect(`/auth/sign-up?error=${encodeURIComponent(error.message)}`);
  }

  redirect('/dashboard/overview?auth=check-email');
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();
  await supabase?.auth.signOut();
  redirect('/auth/sign-in');
}
