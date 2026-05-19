import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VIETCODE AI | Từ ý tưởng đến hệ thống bán hàng thật',
  description:
    'Mô tả ý tưởng, xem demo AI và để đội ngũ VIETCODE AI triển khai website, CRM, chatbot, automation và vận hành thành hệ thống bán hàng thật.'
};

const navigationItems = [
  { label: 'Flow', href: '#flow' },
  { label: 'System', href: '#system' },
  { label: 'CTA', href: '#cta' }
];

const heroPoints = ['Brief đúng trọng tâm', 'Concept nhìn thấy sớm', 'Triển khai production'];

const flowSteps = [
  {
    id: '01',
    title: 'Mô tả',
    detail: 'Founder gửi brief ngắn nhưng đúng thứ đang bán.'
  },
  {
    id: '02',
    title: 'Nhìn thấy',
    detail: 'AI dựng concept để chốt hướng trước khi chi sâu.'
  },
  {
    id: '03',
    title: 'Triển khai',
    detail: 'Đội ngũ build thành website, CRM, chatbot, automation.'
  }
];

const systemCards = [
  {
    title: 'Landing',
    description: 'Bề mặt chốt offer, đặt lịch, thu lead.'
  },
  {
    title: 'CRM',
    description: 'Lead đi vào đúng pipeline xử lý và follow-up.'
  },
  {
    title: 'Chatbot',
    description: 'Lọc nhu cầu sơ bộ trước khi đội ngũ tư vấn sâu.'
  },
  {
    title: 'Automation',
    description: 'Nhắc việc, phân loại, theo dõi sau launch.'
  }
];

const proofPanels = [
  {
    title: 'Concept frame',
    description: 'Visual direction, message hierarchy, CTA flow.'
  },
  {
    title: 'Sales layer',
    description: 'Form, CRM route, chatbot prompts, follow-up logic.'
  }
];

function Shell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-[2rem] bg-black/[0.045] p-1.5 ring-1 ring-black/6', className)}>
      <div className='rounded-[calc(2rem-0.375rem)] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
        {children}
      </div>
    </div>
  );
}

function SectionWord({ children }: { children: React.ReactNode }) {
  return (
    <p className='font-[var(--font-outfit)] text-[11px] font-semibold tracking-[0.26em] text-emerald-700 uppercase'>
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <main className='min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#f3efe7] font-[var(--font-outfit)] text-zinc-950'>
      <div className='fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.85),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(111,168,127,0.18),transparent_20%),linear-gradient(180deg,#f3efe7_0%,#f6f2eb_44%,#eee7db_100%)]' />
      <div className='pointer-events-none fixed inset-0 -z-10 opacity-[0.05] [background-image:radial-gradient(#20231f_0.6px,transparent_0.6px)] [background-size:16px_16px]' />

      <header className='sticky top-0 z-40 px-3 pt-3 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='rounded-[1.75rem] bg-white/82 px-4 py-3 shadow-[0_24px_60px_-28px_rgba(31,31,22,0.34)] ring-1 ring-black/6 backdrop-blur-xl sm:px-6'>
            <div className='flex flex-wrap items-center justify-between gap-3 sm:gap-4'>
              <Link
                href='/'
                className='flex min-w-0 items-center gap-3'
                aria-label='VIETCODE AI home'
              >
                <span className='relative inline-flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#111311] text-white'>
                  <span className='absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(110,231,183,0.92),transparent_42%)]' />
                  <Icons.sparkles className='relative size-4' />
                </span>
                <div className='min-w-0'>
                  <p className='truncate text-sm font-semibold tracking-tight sm:text-base'>
                    VIETCODE AI
                  </p>
                  <p className='truncate text-[10px] tracking-[0.22em] text-zinc-500 uppercase sm:text-[11px]'>
                    demo to deployment
                  </p>
                </div>
              </Link>

              <nav
                className='order-3 hidden w-full items-center justify-center gap-8 md:order-none md:flex md:w-auto'
                aria-label='Main navigation'
              >
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='text-sm font-medium text-zinc-700 transition duration-300 hover:text-zinc-950'
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className='flex items-center gap-2 sm:gap-3'>
                <Button
                  asChild
                  variant='ghost'
                  className='hidden rounded-full px-4 text-zinc-700 sm:inline-flex'
                >
                  <Link href='/auth/sign-in'>Đăng nhập</Link>
                </Button>
                <Button
                  asChild
                  className='rounded-full bg-[#111311] px-4 text-white shadow-[0_18px_38px_-16px_rgba(17,19,17,0.65)] transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#1c201c] sm:px-5'
                >
                  <Link href='/intake'>Mở intake</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className='px-4 pb-20 sm:px-6 lg:px-8 lg:pb-32'>
        <div className='mx-auto grid max-w-7xl gap-10 pt-10 md:pt-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-8 lg:pt-16'>
          <div className='lg:pr-6'>
            <div className='inline-flex items-center gap-2 rounded-full bg-white/76 px-3 py-1.5 text-[11px] font-semibold tracking-[0.24em] text-zinc-700 uppercase ring-1 ring-black/6 backdrop-blur'>
              <span className='inline-flex size-2 rounded-full bg-emerald-500' />
              Founder-first AI system
            </div>
            <h1 className='mt-7 max-w-5xl font-[var(--font-playfair-display)] text-[clamp(3rem,7.4vw,5.8rem)] leading-[0.92] tracking-[-0.05em] text-balance'>
              Mô tả gọn. Thấy sớm. Build thật.
            </h1>
            <p className='mt-6 max-w-[34rem] text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8'>
              VIETCODE AI mở đầu bằng một intake ngắn nhưng đủ đúng trọng tâm, rồi biến brief thành
              concept, flow bán hàng và hệ thống production-ready.
            </p>

            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <Button
                asChild
                size='lg'
                className='h-13 rounded-full bg-[#111311] px-3 text-white shadow-[0_24px_50px_-20px_rgba(17,19,17,0.7)] transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] hover:bg-[#1d211d] active:scale-[0.98]'
              >
                <Link href='/intake' className='gap-3'>
                  <span className='pl-3'>Viết brief ngay</span>
                  <span className='inline-flex size-8 items-center justify-center rounded-full bg-white/10'>
                    <Icons.arrowRight className='size-4' />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='h-13 rounded-full border-black/10 bg-white/70 px-6 text-zinc-900 backdrop-blur transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] hover:bg-white active:scale-[0.98]'
              >
                <Link href='#system'>Xem system</Link>
              </Button>
            </div>

            <div className='mt-8 flex flex-wrap gap-3'>
              {heroPoints.map((item) => (
                <span
                  key={item}
                  className='rounded-full bg-white/76 px-4 py-2 text-sm font-medium text-zinc-700 ring-1 ring-black/6'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className='grid gap-4 lg:grid-cols-[0.54fr_0.46fr]'>
            <Shell className='overflow-hidden lg:translate-y-8'>
              <div className='relative min-h-[420px] rounded-[calc(2rem-0.375rem)] bg-[#161b17] text-white sm:min-h-[500px]'>
                <Image
                  src='https://picsum.photos/seed/vietcode-founder/1200/1600'
                  alt='Founder and product planning moodboard'
                  fill
                  sizes='(min-width: 1024px) 28vw, 100vw'
                  className='object-cover grayscale-[15%] contrast-125'
                />
                <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,10,0.08),rgba(10,12,10,0.78))]' />
                <div className='absolute inset-x-4 bottom-4 rounded-[1.6rem] bg-black/45 p-4 backdrop-blur-md ring-1 ring-white/10 sm:inset-x-5 sm:bottom-5 sm:p-5'>
                  <p className='text-[11px] tracking-[0.24em] text-white/48 uppercase'>
                    Brief input
                  </p>
                  <div className='mt-4 space-y-2.5'>
                    {[
                      'Clinic cao cấp cần landing đặt lịch',
                      'Muốn chatbot lọc lead trước khi đội sales nhận',
                      'Cần demo trước khi chốt phạm vi triển khai'
                    ].map((item) => (
                      <div
                        key={item}
                        className='rounded-[1.15rem] bg-white/[0.08] px-4 py-3 text-sm leading-6 text-white/82 ring-1 ring-white/10'
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Shell>

            <div className='grid gap-4'>
              <Shell className='overflow-hidden'>
                <div className='relative min-h-[220px] rounded-[calc(2rem-0.375rem)] bg-[#f6efe3] p-5 sm:p-6'>
                  <div className='absolute inset-y-0 right-0 w-1/2'>
                    <Image
                      src='https://picsum.photos/seed/vietcode-interface/900/1200'
                      alt='Abstract interface proof panel'
                      fill
                      sizes='(min-width: 1024px) 18vw, 50vw'
                      className='object-cover opacity-70 mix-blend-multiply'
                    />
                  </div>
                  <div className='relative max-w-[13rem]'>
                    <p className='text-[11px] tracking-[0.24em] text-zinc-500 uppercase'>
                      AI output
                    </p>
                    <p className='mt-4 font-[var(--font-playfair-display)] text-[2rem] leading-[0.96] tracking-[-0.05em] text-zinc-950 sm:text-[2.4rem]'>
                      Concept đủ rõ để founder chốt hướng.
                    </p>
                  </div>
                </div>
              </Shell>

              <Shell>
                <div className='overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[#111311] text-white'>
                  <div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
                    <div className='flex items-center gap-2'>
                      <span className='size-2.5 rounded-full bg-[#ff8175]' />
                      <span className='size-2.5 rounded-full bg-[#ffcf69]' />
                      <span className='size-2.5 rounded-full bg-[#6ae39e]' />
                    </div>
                    <span className='text-[11px] tracking-[0.22em] text-white/48 uppercase'>
                      System map
                    </span>
                  </div>
                  <div className='grid grid-cols-2 gap-px bg-white/10'>
                    {systemCards.map((item) => (
                      <div
                        key={item.title}
                        className='min-h-[132px] bg-[#151915] p-5 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#1b211c]'
                      >
                        <p className='text-base font-semibold tracking-tight sm:text-lg'>
                          {item.title}
                        </p>
                        <p className='mt-2 max-w-[14rem] text-sm leading-6 text-white/70'>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Shell>
            </div>
          </div>
        </div>
      </section>

      <section id='flow' className='px-4 py-20 sm:px-6 lg:px-8 lg:py-32'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end'>
            <div>
              <SectionWord>Flow</SectionWord>
              <h2 className='mt-4 max-w-[10ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl'>
                Ba bước. Không vòng vo.
              </h2>
            </div>
            <p className='max-w-[34rem] text-base leading-7 text-zinc-650 sm:text-lg sm:leading-8'>
              Homepage chỉ đủ để tạo tin tưởng và định hướng. Phần làm rõ bài toán nằm ở form
              intake.
            </p>
          </div>

          <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-3'>
            {flowSteps.map((step) => (
              <Shell key={step.id}>
                <article className='rounded-[calc(2rem-0.375rem)] bg-white p-7 sm:p-8'>
                  <p className='font-[var(--font-space-mono)] text-sm text-emerald-700'>
                    {step.id}
                  </p>
                  <h3 className='mt-5 text-[1.65rem] leading-tight font-semibold tracking-tight'>
                    {step.title}
                  </h3>
                  <p className='mt-4 max-w-[18rem] text-sm leading-7 text-zinc-600 sm:text-[15px]'>
                    {step.detail}
                  </p>
                </article>
              </Shell>
            ))}
          </div>
        </div>
      </section>

      <section id='system' className='bg-[#111311] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-32'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end'>
            <div>
              <SectionWord>System</SectionWord>
              <h2 className='mt-4 max-w-[10ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl'>
                Demo là lớp mở đầu, không phải đích đến.
              </h2>
            </div>
            <p className='max-w-[35rem] text-base leading-7 text-white/70 sm:text-lg sm:leading-8'>
              Sau lớp concept là website, CRM, chatbot và automation được nối cùng một nhịp triển
              khai.
            </p>
          </div>

          <div className='mt-12 grid auto-rows-[minmax(220px,1fr)] grid-cols-1 gap-5 lg:grid-cols-6 lg:grid-flow-dense'>
            <Shell className='overflow-hidden bg-white/6 ring-white/10 lg:col-span-4'>
              <div className='relative h-full min-h-[320px] rounded-[calc(2rem-0.375rem)] bg-[#181c18] p-6 sm:p-8'>
                <Image
                  src='https://picsum.photos/seed/vietcode-dashboard/1400/900'
                  alt='Operational dashboard inspired background'
                  fill
                  sizes='(min-width: 1024px) 40vw, 100vw'
                  className='object-cover opacity-22 mix-blend-screen'
                />
                <div className='relative flex h-full flex-col justify-between gap-10'>
                  <div>
                    <p className='text-[11px] tracking-[0.24em] text-white/48 uppercase'>
                      Execution layer
                    </p>
                    <p className='mt-4 max-w-[14ch] font-[var(--font-playfair-display)] text-[2.2rem] leading-[0.98] tracking-[-0.05em] sm:text-[2.8rem]'>
                      Website, CRM, chatbot, automation trong cùng một build path.
                    </p>
                  </div>
                  <div className='grid gap-3 sm:grid-cols-2'>
                    {proofPanels.map((item) => (
                      <div
                        key={item.title}
                        className='rounded-[1.35rem] bg-white/[0.06] p-4 ring-1 ring-white/10 backdrop-blur-sm'
                      >
                        <p className='text-sm font-semibold text-white'>{item.title}</p>
                        <p className='mt-2 text-sm leading-6 text-white/68'>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Shell>

            <Shell className='bg-emerald-300/16 ring-emerald-300/20 lg:col-span-2'>
              <div className='flex h-full min-h-[220px] flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-[#efe6d7] p-7 text-zinc-950 sm:p-8'>
                <p className='text-[11px] tracking-[0.24em] text-zinc-500 uppercase'>Decision</p>
                <p className='max-w-[12rem] text-[1.85rem] leading-tight font-semibold tracking-tight sm:text-[2rem]'>
                  Founder chốt đúng scope sớm hơn.
                </p>
              </div>
            </Shell>

            {systemCards.map((item) => (
              <Shell key={item.title} className='bg-white/6 ring-white/10 lg:col-span-3'>
                <div className='flex h-full min-h-[180px] flex-col justify-between rounded-[calc(2rem-0.375rem)] bg-[#181c18] p-6 sm:p-7'>
                  <p className='text-xl font-semibold tracking-tight text-white'>{item.title}</p>
                  <p className='mt-6 max-w-[17rem] text-sm leading-7 text-white/70 sm:text-[15px]'>
                    {item.description}
                  </p>
                </div>
              </Shell>
            ))}
          </div>
        </div>
      </section>

      <section id='cta' className='px-4 py-20 sm:px-6 lg:px-8 lg:py-32'>
        <div className='mx-auto max-w-7xl'>
          <Shell className='bg-[#151915] ring-black/10'>
            <div className='rounded-[calc(2rem-0.375rem)] bg-[radial-gradient(circle_at_14%_14%,rgba(84,165,112,0.22),transparent_26%),linear-gradient(135deg,#151915_0%,#0e110f_100%)] p-8 text-white sm:p-10 lg:p-14'>
              <div className='grid gap-8 lg:grid-cols-[1fr_0.84fr] lg:items-end'>
                <div>
                  <SectionWord>CTA</SectionWord>
                  <h2 className='mt-4 max-w-[11ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] text-balance sm:text-5xl'>
                    Homepage dừng ở đây. Brief bắt đầu từ đây.
                  </h2>
                </div>
                <div>
                  <p className='max-w-[30rem] text-base leading-7 text-white/70 sm:text-lg sm:leading-8'>
                    Nếu muốn biết nhiều hơn, vào form intake. Ở đó hệ thống mới bắt đầu hiểu bài
                    toán của anh.
                  </p>
                  <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
                    <Button
                      asChild
                      size='lg'
                      className='h-13 rounded-full bg-[#efe6d7] px-3 text-zinc-950 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] hover:bg-[#f6eee0] active:scale-[0.98]'
                    >
                      <Link href='/intake' className='gap-3'>
                        <span className='pl-3'>Mở form intake</span>
                        <span className='inline-flex size-8 items-center justify-center rounded-full bg-black/5'>
                          <Icons.arrowRight className='size-4' />
                        </span>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size='lg'
                      variant='outline'
                      className='h-13 rounded-full border-white/12 bg-white/[0.04] px-6 text-white hover:bg-white/[0.08]'
                    >
                      <Link href='/dashboard/intake'>Xem intake dashboard</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Shell>
        </div>
      </section>

      <footer className='border-t border-black/8 px-4 py-10 sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='text-sm font-semibold tracking-tight sm:text-base'>VIETCODE AI</p>
            <p className='mt-2 max-w-xl text-sm leading-6 text-zinc-600 sm:text-[15px]'>
              Brief gọn, concept sớm, triển khai thật.
            </p>
          </div>
          <div className='flex flex-wrap gap-4 text-sm font-medium text-zinc-600'>
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className='transition hover:text-zinc-950'>
                {item.label}
              </Link>
            ))}
            <Link href='/privacy-policy' className='transition hover:text-zinc-950'>
              Privacy
            </Link>
            <Link href='/terms-of-service' className='transition hover:text-zinc-950'>
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
