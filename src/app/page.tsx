import { Icons } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const levels = [
  {
    step: '01',
    title: 'Mô tả ý tưởng',
    text: 'Khách gửi ngành nghề, ưu đãi, chân dung khách hàng và phong cách mong muốn.'
  },
  {
    step: '02',
    title: 'AI tạo demo',
    text: 'Hệ thống dựng landing page, logo direction, màu sắc, layout và thông điệp chốt sale.'
  },
  {
    step: '03',
    title: 'Đội ngũ triển khai thật',
    text: 'VIETCODE AI biến concept đã duyệt thành website, CRM lead, chatbot và automation.'
  }
];

const deliverables = [
  'Website / landing page bán hàng',
  'Logo direction và brand kit nhanh',
  'Dashboard quản lý lead, đơn hàng, chiến dịch',
  'Supabase data layer, Vercel deployment',
  'Chatbot, form tư vấn, tracking và automation'
];

const stack = ['Next.js', 'Supabase', 'Vercel'];

export default function Page() {
  return (
    <main className='min-h-screen overflow-hidden bg-[#06110d] text-white'>
      <section className='relative min-h-[92vh] px-5 py-5 sm:px-8 lg:px-10'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(52,211,153,0.28),transparent_28%),radial-gradient(circle_at_78%_0%,rgba(45,212,191,0.2),transparent_32%),linear-gradient(145deg,#06110d_0%,#0b1d17_42%,#111827_100%)]' />
        <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.075)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25' />
        <div className='absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#06110d] to-transparent' />

        <div className='relative z-10 mx-auto flex max-w-7xl flex-col'>
          <header className='flex items-center justify-between rounded-lg border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-xl'>
            <Link href='/' className='flex items-center gap-3'>
              <span className='flex size-9 items-center justify-center rounded-lg bg-emerald-300 text-[#06110d]'>
                <Icons.sparkles className='size-4' />
              </span>
              <span className='text-sm font-semibold tracking-[0.24em]'>VIETCODE AI</span>
            </Link>
            <div className='hidden items-center gap-2 md:flex'>
              {stack.map((item) => (
                <Badge
                  key={item}
                  variant='outline'
                  className='border-white/15 bg-white/8 text-white/75'
                >
                  {item}
                </Badge>
              ))}
            </div>
            <Button
              asChild
              variant='secondary'
              className='bg-white text-[#06110d] hover:bg-white/90'
            >
              <Link href='/dashboard/overview'>Dashboard</Link>
            </Button>
          </header>

          <div className='grid min-h-[calc(92vh-88px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20'>
            <div className='space-y-8'>
              <Badge className='rounded-full bg-emerald-300 px-4 py-1.5 text-[#06110d] hover:bg-emerald-300'>
                Demo nhanh cho website, landing page, logo và brand kit
              </Badge>
              <div className='space-y-6'>
                <h1 className='max-w-5xl text-5xl leading-[0.98] font-semibold tracking-tight text-balance md:text-7xl'>
                  Bạn mô tả ý tưởng, AI tạo demo, VIETCODE AI triển khai thành hệ thống bán hàng
                  thật.
                </h1>
                <p className='max-w-2xl text-lg leading-8 text-white/70 md:text-xl'>
                  Một trải nghiệm demo-first cho doanh nghiệp cần nhìn thấy concept trước khi đầu
                  tư. AI rút ngắn vòng chốt ý tưởng, đội ngũ kỹ thuật hoàn thiện phần chạy thật:
                  website, dữ liệu, automation và vận hành.
                </p>
              </div>
              <div className='flex flex-col gap-3 sm:flex-row'>
                <Button
                  asChild
                  size='lg'
                  className='bg-emerald-300 text-[#06110d] hover:bg-emerald-200'
                >
                  <Link href='/auth/sign-in'>
                    Vào hệ thống demo
                    <Icons.arrowRight className='size-4' />
                  </Link>
                </Button>
                <Button
                  asChild
                  size='lg'
                  variant='outline'
                  className='border-white/20 bg-white/8 text-white hover:bg-white/14 hover:text-white'
                >
                  <Link href='/dashboard/product'>Xem concept demo</Link>
                </Button>
              </div>
            </div>

            <div className='relative'>
              <div className='absolute -inset-6 rounded-[2rem] border border-emerald-300/20 bg-emerald-300/8 blur-2xl' />
              <div className='relative rounded-xl border border-white/12 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl'>
                <div className='rounded-lg border border-white/10 bg-[#07140f]/82 p-5'>
                  <div className='flex items-center justify-between gap-4 border-b border-white/10 pb-4'>
                    <div>
                      <p className='text-xs uppercase tracking-[0.24em] text-emerald-200'>
                        AI demo pipeline
                      </p>
                      <h2 className='mt-2 text-2xl font-semibold'>Concept đang được dựng</h2>
                    </div>
                    <div className='rounded-lg bg-emerald-300 px-3 py-2 text-sm font-semibold text-[#06110d]'>
                      14 phút
                    </div>
                  </div>

                  <div className='mt-5 space-y-3'>
                    {levels.map((level) => (
                      <div
                        key={level.step}
                        className='grid gap-4 rounded-lg border border-white/10 bg-white/7 p-4 sm:grid-cols-[48px_1fr]'
                      >
                        <div className='flex size-12 items-center justify-center rounded-lg bg-white text-sm font-semibold text-[#06110d]'>
                          {level.step}
                        </div>
                        <div>
                          <h3 className='font-semibold'>{level.title}</h3>
                          <p className='mt-1 text-sm leading-6 text-white/65'>{level.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='mt-5 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4'>
                    <p className='text-sm font-medium text-emerald-100'>Output sau khi duyệt</p>
                    <div className='mt-3 flex flex-wrap gap-2'>
                      {deliverables.map((item) => (
                        <span
                          key={item}
                          className='rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/72'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-5 pb-18 sm:px-8 lg:px-10'>
        <div className='mx-auto grid max-w-7xl gap-4 md:grid-cols-3'>
          {[
            ['Website demos', 'Tạo mẫu nhanh để khách thấy hướng nội dung, bố cục và offer.'],
            ['Brand kit demos', 'Logo direction, màu sắc, typography và phong cách truyền thông.'],
            ['Real builds', 'Kết nối Supabase, triển khai Vercel và bàn giao hệ thống dùng thật.']
          ].map(([title, text]) => (
            <div
              key={title}
              className='rounded-lg border border-white/10 bg-white/7 p-6 backdrop-blur'
            >
              <Icons.circleCheck className='mb-5 size-5 text-emerald-300' />
              <h2 className='text-xl font-semibold'>{title}</h2>
              <p className='mt-3 text-sm leading-7 text-white/62'>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
