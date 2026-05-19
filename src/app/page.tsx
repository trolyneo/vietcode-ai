import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
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

const heroPoints = ['Brief', 'Demo AI', 'Production'];

const flowSteps = [
  {
    id: '01',
    title: 'Mô tả',
    detail: 'Founder gửi brief ngắn nhưng đúng trọng tâm.'
  },
  {
    id: '02',
    title: 'Nhìn thấy',
    detail: 'AI dựng concept để chốt hướng nhanh.'
  },
  {
    id: '03',
    title: 'Triển khai',
    detail: 'Đội ngũ build thành website, CRM, chatbot.'
  }
];

const systemCards = [
  {
    title: 'Landing',
    description: 'Bề mặt chốt offer và thu lead.'
  },
  {
    title: 'CRM',
    description: 'Lead đi vào đúng pipeline xử lý.'
  },
  {
    title: 'Chatbot',
    description: 'Tư vấn sơ bộ trước khi đội ngũ vào sâu.'
  },
  {
    title: 'Automation',
    description: 'Nhắc việc, phân loại, theo dõi sau launch.'
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
    <p className='text-[11px] font-medium tracking-[0.28em] text-emerald-700 uppercase'>
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <main className='min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#f3efe7] text-zinc-950'>
      <div className='fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.85),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(111,168,127,0.22),transparent_20%),linear-gradient(180deg,#f3efe7_0%,#f6f2eb_44%,#eee7db_100%)]' />
      <div className='pointer-events-none fixed inset-0 -z-10 opacity-[0.05] [background-image:radial-gradient(#20231f_0.6px,transparent_0.6px)] [background-size:16px_16px]' />

      <header className='sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='rounded-full bg-white/74 px-4 py-3 shadow-[0_24px_60px_-28px_rgba(31,31,22,0.34)] ring-1 ring-black/6 backdrop-blur-xl sm:px-6'>
            <div className='flex items-center justify-between gap-4'>
              <Link href='/' className='flex items-center gap-3' aria-label='VIETCODE AI home'>
                <span className='relative inline-flex size-10 items-center justify-center overflow-hidden rounded-full bg-[#111311] text-white'>
                  <span className='absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(110,231,183,0.92),transparent_42%)]' />
                  <Icons.sparkles className='relative size-4' />
                </span>
                <div>
                  <p className='font-medium tracking-tight'>VIETCODE AI</p>
                  <p className='text-[11px] tracking-[0.24em] text-zinc-500 uppercase'>
                    demo to deployment
                  </p>
                </div>
              </Link>

              <nav className='hidden items-center gap-7 md:flex' aria-label='Main navigation'>
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='text-sm text-zinc-600 transition duration-300 hover:text-zinc-950'
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className='flex items-center gap-2'>
                <Button
                  asChild
                  variant='ghost'
                  className='hidden rounded-full px-5 text-zinc-700 sm:inline-flex'
                >
                  <Link href='/auth/sign-in'>Đăng nhập</Link>
                </Button>
                <Button
                  asChild
                  className='rounded-full bg-[#111311] px-5 text-white shadow-[0_18px_38px_-16px_rgba(17,19,17,0.65)] transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#1c201c]'
                >
                  <Link href='/intake'>Mở intake</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className='px-4 pb-24 sm:px-6 lg:px-8 lg:pb-40'>
        <div className='mx-auto grid max-w-7xl gap-12 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pt-20'>
          <div className='lg:pb-8'>
            <div className='inline-flex items-center gap-2 rounded-full bg-white/72 px-3 py-1.5 text-[11px] font-medium tracking-[0.26em] text-zinc-700 uppercase ring-1 ring-black/6 backdrop-blur'>
              <span className='inline-flex size-2 rounded-full bg-emerald-500' />
              Founder-first AI system
            </div>
            <h1 className='mt-8 max-w-6xl font-[var(--font-playfair-display)] text-[clamp(3.4rem,8vw,6.2rem)] leading-[0.92] tracking-[-0.05em] text-balance'>
              Mô tả ngắn. Thấy nhanh. Build thật.
            </h1>
            <p className='mt-7 max-w-[30rem] text-lg leading-8 text-zinc-700'>
              VIETCODE AI không mở đầu bằng một bản báo giá dài. Homepage chỉ dẫn bạn vào brief.
              Phần còn lại để hệ thống xử lý.
            </p>

            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
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
                <Link href='#flow'>Xem flow</Link>
              </Button>
            </div>

            <div className='mt-10 flex flex-wrap gap-3'>
              {heroPoints.map((item) => (
                <span
                  key={item}
                  className='rounded-full bg-white/70 px-4 py-2 text-sm text-zinc-700 ring-1 ring-black/6'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className='grid gap-4 lg:grid-cols-[0.52fr_0.48fr]'>
            <Shell className='lg:translate-y-16'>
              <div className='rounded-[calc(2rem-0.375rem)] bg-[#161b17] p-5 text-white'>
                <p className='text-[11px] tracking-[0.24em] text-white/45 uppercase'>Brief input</p>
                <div className='mt-4 space-y-3'>
                  {[
                    'Clinic cao cấp',
                    'Cần landing đặt lịch',
                    'Muốn chatbot lọc lead',
                    'Demo trước khi chốt scope'
                  ].map((item) => (
                    <div
                      key={item}
                      className='rounded-[1.25rem] bg-white/[0.05] px-4 py-3 text-sm text-white/74 ring-1 ring-white/10'
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Shell>

            <div className='grid gap-4'>
              <Shell>
                <div className='rounded-[calc(2rem-0.375rem)] bg-[#f6efe3] p-5'>
                  <p className='text-[11px] tracking-[0.24em] text-zinc-500 uppercase'>AI output</p>
                  <p className='mt-4 max-w-[11ch] font-[var(--font-playfair-display)] text-4xl leading-[0.96] tracking-[-0.05em]'>
                    Concept đủ rõ để founder chốt hướng.
                  </p>
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
                    <span className='text-[11px] tracking-[0.24em] text-white/45 uppercase'>
                      System map
                    </span>
                  </div>
                  <div className='grid grid-cols-2 grid-rows-2 gap-px bg-white/10'>
                    {systemCards.map((item) => (
                      <div
                        key={item.title}
                        className='bg-[#151915] p-5 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#1b211c]'
                      >
                        <p className='text-lg font-medium tracking-tight'>{item.title}</p>
                        <p className='mt-2 text-sm leading-6 text-white/66'>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Shell>
            </div>
          </div>
        </div>
      </section>

      <section id='flow' className='px-4 py-24 sm:px-6 lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end'>
            <div>
              <SectionWord>Flow</SectionWord>
              <h2 className='mt-5 max-w-[9ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl'>
                Ba bước. Không thêm chữ thừa.
              </h2>
            </div>
            <p className='max-w-[32rem] text-lg leading-8 text-zinc-600'>
              Homepage chỉ nói đúng thứ founder cần biết trước khi bấm vào `/intake`.
            </p>
          </div>

          <div className='mt-14 grid grid-cols-1 gap-5 md:grid-cols-3'>
            {flowSteps.map((step, index) => (
              <Shell
                key={step.id}
                className={cn(
                  index === 1 ? 'md:-translate-y-8' : '',
                  index === 2 ? 'md:translate-y-10' : ''
                )}
              >
                <article className='rounded-[calc(2rem-0.375rem)] bg-white p-7'>
                  <p className='font-mono text-sm text-emerald-700'>{step.id}</p>
                  <h3 className='mt-5 text-2xl leading-tight font-medium tracking-tight'>
                    {step.title}
                  </h3>
                  <p className='mt-4 max-w-[18rem] text-sm leading-7 text-zinc-600'>
                    {step.detail}
                  </p>
                </article>
              </Shell>
            ))}
          </div>
        </div>
      </section>

      <section id='system' className='bg-[#111311] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end'>
            <div>
              <SectionWord>System</SectionWord>
              <h2 className='mt-5 max-w-[10ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl'>
                Demo không đứng một mình.
              </h2>
            </div>
            <p className='max-w-[34rem] text-lg leading-8 text-white/68'>
              Đằng sau concept là một hệ thống bán hàng thật để deploy, theo dõi và mở rộng.
            </p>
          </div>

          <div className='mt-14 grid auto-rows-[minmax(180px,1fr)] grid-cols-1 gap-5 md:grid-cols-6 md:grid-flow-dense'>
            <Shell className='bg-white/6 ring-white/10 md:col-span-4'>
              <div className='rounded-[calc(2rem-0.375rem)] bg-[#181c18] p-8 h-full'>
                <p className='text-[11px] tracking-[0.24em] text-white/45 uppercase'>
                  Execution layer
                </p>
                <p className='mt-4 max-w-[14ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.05em]'>
                  Website, CRM, chatbot, automation trong cùng một nhịp build.
                </p>
              </div>
            </Shell>
            <Shell className='bg-emerald-300/16 ring-emerald-300/20 md:col-span-2'>
              <div className='rounded-[calc(2rem-0.375rem)] bg-[#efe6d7] p-8 h-full text-zinc-950'>
                <p className='text-[11px] tracking-[0.24em] text-zinc-500 uppercase'>Decision</p>
                <p className='mt-4 text-2xl leading-tight font-medium tracking-tight'>
                  Founder chốt đúng scope sớm hơn.
                </p>
              </div>
            </Shell>
            {systemCards.map((item) => (
              <Shell key={item.title} className='bg-white/6 ring-white/10 md:col-span-3'>
                <div className='rounded-[calc(2rem-0.375rem)] bg-[#181c18] p-6 h-full'>
                  <p className='text-xl font-medium tracking-tight text-white'>{item.title}</p>
                  <p className='mt-3 max-w-[16rem] text-sm leading-7 text-white/66'>
                    {item.description}
                  </p>
                </div>
              </Shell>
            ))}
          </div>
        </div>
      </section>

      <section id='cta' className='px-4 py-24 sm:px-6 lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-7xl'>
          <Shell className='bg-[#151915] ring-black/10'>
            <div className='rounded-[calc(2rem-0.375rem)] bg-[radial-gradient(circle_at_14%_14%,rgba(84,165,112,0.22),transparent_26%),linear-gradient(135deg,#151915_0%,#0e110f_100%)] p-8 text-white sm:p-10 lg:p-14'>
              <div className='grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end'>
                <div>
                  <SectionWord>CTA</SectionWord>
                  <h2 className='mt-5 max-w-[10ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] text-balance sm:text-5xl'>
                    Homepage dừng ở đây. Brief bắt đầu từ đây.
                  </h2>
                </div>
                <div>
                  <p className='max-w-[28rem] text-lg leading-8 text-white/70'>
                    Nếu muốn biết nhiều hơn, vào form intake. Homepage không cần kể hết câu chuyện.
                  </p>
                  <div className='mt-6 flex flex-col gap-4 sm:flex-row'>
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
            <p className='font-medium tracking-tight'>VIETCODE AI</p>
            <p className='mt-2 max-w-xl text-sm leading-6 text-zinc-600'>
              Brief ngắn, demo sớm, triển khai thật.
            </p>
          </div>
          <div className='flex flex-wrap gap-4 text-sm text-zinc-600'>
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
