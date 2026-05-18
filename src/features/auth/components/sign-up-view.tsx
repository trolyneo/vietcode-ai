import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signUpWithPassword } from '@/features/auth/actions';
import { isSupabaseConfigured } from '@/lib/supabase/config';
import Link from 'next/link';

interface SignUpViewPageProps {
  error?: string;
}

export default function SignUpViewPage({ error }: SignUpViewPageProps) {
  const isDemoMode = !isSupabaseConfigured();

  return (
    <main className='bg-background grid min-h-screen lg:grid-cols-[0.9fr_1.1fr]'>
      <section className='flex items-center justify-center px-6 py-12'>
        <div className='w-full max-w-md space-y-8'>
          <div className='space-y-3'>
            <Link href='/' className='text-muted-foreground text-sm hover:text-foreground'>
              VIETCODE AI
            </Link>
            <h2 className='text-3xl font-semibold tracking-tight'>Tạo tài khoản vận hành</h2>
            <p className='text-muted-foreground leading-7'>
              Scaffolding này dùng Supabase Auth để đăng ký email/password và sẵn sàng mở rộng sang
              magic link, OAuth hoặc team invite.
            </p>
          </div>

          {error && (
            <div className='border-destructive/30 bg-destructive/10 text-destructive rounded-lg border px-4 py-3 text-sm'>
              {error}
            </div>
          )}

          {isDemoMode && (
            <div className='rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300'>
              Supabase chưa cấu hình. Submit sẽ mở dashboard demo thay vì gọi auth thật.
            </div>
          )}

          <form action={signUpWithPassword} className='space-y-5'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email công việc</Label>
              <Input id='email' name='email' type='email' placeholder='you@company.com' required />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Mật khẩu</Label>
              <Input id='password' name='password' type='password' minLength={8} required />
            </div>
            <Button type='submit' className='w-full'>
              Tạo tài khoản
              <Icons.arrowRight className='size-4' />
            </Button>
          </form>

          <p className='text-muted-foreground text-center text-sm'>
            Đã có tài khoản?{' '}
            <Link href='/auth/sign-in' className='text-foreground underline underline-offset-4'>
              Đăng nhập
            </Link>
          </p>
        </div>
      </section>
      <section className='relative hidden overflow-hidden border-l lg:block'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.24),transparent_34%),linear-gradient(145deg,#071410,#111827_55%,#03130d)]' />
        <div className='relative z-10 flex h-full flex-col justify-between p-12 text-white'>
          <div className='flex items-center gap-3 text-sm font-semibold tracking-[0.24em]'>
            <span className='flex size-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur'>
              <Icons.logo className='size-4' />
            </span>
            SUPABASE READY
          </div>
          <div className='max-w-xl space-y-7'>
            <p className='text-sm uppercase tracking-[0.28em] text-emerald-200'>
              Sales implementation system
            </p>
            <h1 className='text-5xl leading-[1.02] font-semibold tracking-tight'>
              Từ prompt của khách đến hệ thống bán hàng thật.
            </h1>
            <p className='text-lg leading-8 text-white/70'>
              Demo AI chỉ là lớp đầu. Phần vận hành phía sau sẽ kết nối dữ liệu, khách hàng, đội
              triển khai và automation.
            </p>
          </div>
          <div className='rounded-lg border border-white/10 bg-white/8 p-5 text-sm leading-7 text-white/70 backdrop-blur'>
            Bạn mô tả ý tưởng - AI tạo demo - đội ngũ VIETCODE AI triển khai thành hệ thống bán hàng
            thật.
          </div>
        </div>
      </section>
    </main>
  );
}
