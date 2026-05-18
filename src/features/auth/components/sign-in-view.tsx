import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInWithPassword } from '@/features/auth/actions';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import Link from 'next/link';

interface SignInViewPageProps {
  error?: string;
  next?: string;
}

export default function SignInViewPage({ error, next }: SignInViewPageProps) {
  const isDemoMode = !isSupabaseConfigured();

  return (
    <main className='bg-background grid min-h-screen lg:grid-cols-[1.1fr_0.9fr]'>
      <section className='relative hidden overflow-hidden border-r lg:block'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.22),transparent_32%),radial-gradient(circle_at_80%_12%,rgba(20,184,166,0.18),transparent_30%),linear-gradient(135deg,#04120d,#0f172a_58%,#06130f)]' />
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30' />
        <div className='relative z-10 flex h-full flex-col justify-between p-12 text-white'>
          <Link
            href='/'
            className='flex items-center gap-3 text-sm font-semibold tracking-[0.24em]'
          >
            <span className='flex size-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur'>
              <Icons.sparkles className='size-4' />
            </span>
            VIETCODE AI
          </Link>
          <div className='max-w-xl space-y-7'>
            <p className='text-sm uppercase tracking-[0.28em] text-emerald-200'>
              Demo-first operations
            </p>
            <h1 className='text-5xl leading-[1.02] font-semibold tracking-tight'>
              Chốt concept nhanh, triển khai bằng Supabase và Vercel.
            </h1>
            <p className='text-lg leading-8 text-white/70'>
              Khu vực nội bộ quản lý lead, demo AI, pipeline triển khai và vận hành sau khi khách
              duyệt concept.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-3 text-sm text-white/70'>
            {['Next.js', 'Supabase Auth', 'Vercel'].map((item) => (
              <div
                key={item}
                className='rounded-lg border border-white/10 bg-white/8 p-3 backdrop-blur'
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='flex items-center justify-center px-6 py-12'>
        <div className='w-full max-w-md space-y-8'>
          <div className='space-y-3'>
            <Link href='/' className='text-muted-foreground text-sm hover:text-foreground'>
              VIETCODE AI
            </Link>
            <h2 className='text-3xl font-semibold tracking-tight'>Đăng nhập dashboard</h2>
            <p className='text-muted-foreground leading-7'>
              Dùng tài khoản Supabase Auth. Khi chưa cấu hình Supabase, form sẽ mở demo dashboard để
              đội ngũ tiếp tục phát triển giao diện.
            </p>
          </div>

          {error && (
            <div className='border-destructive/30 bg-destructive/10 text-destructive rounded-lg border px-4 py-3 text-sm'>
              {error}
            </div>
          )}

          {isDemoMode && (
            <div className='rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300'>
              Supabase env vars chưa được đặt. Đăng nhập sẽ chuyển vào dashboard ở chế độ demo.
            </div>
          )}

          <form action={signInWithPassword} className='space-y-5'>
            <input type='hidden' name='next' value={next || '/dashboard/overview'} />
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                defaultValue='admin@vietcode.ai'
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Mật khẩu</Label>
              <Input
                id='password'
                name='password'
                type='password'
                defaultValue='vietcode-ai'
                required
              />
            </div>
            <Button type='submit' className='w-full'>
              Đăng nhập
              <Icons.arrowRight className='size-4' />
            </Button>
          </form>

          <p className='text-muted-foreground text-center text-sm'>
            Chưa có tài khoản?{' '}
            <Link href='/auth/sign-up' className='text-foreground underline underline-offset-4'>
              Tạo tài khoản
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
