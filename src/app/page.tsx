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
  { label: 'Quy trình', href: '#quy-trinh' },
  { label: 'Gói dịch vụ', href: '#goi-dich-vu' },
  { label: 'Bàn giao', href: '#ban-giao' },
  { label: 'FAQ', href: '#faq' }
];

const credibilityItems = [
  'Demo trước khi chốt phạm vi',
  'Đội triển khai thật sau lớp AI',
  'Bàn giao để vận hành và mở rộng'
];

const painPoints = [
  {
    title: 'Ý tưởng có tiềm năng nhưng quá khó nhìn thấy sớm',
    description:
      'Nhiều doanh nghiệp mắc kẹt giữa vài dòng mô tả, vài file tham khảo và một bản báo giá chưa chứng minh được hướng giao diện hay luồng bán hàng.'
  },
  {
    title: 'Bản mẫu đẹp chưa đủ để vận hành',
    description:
      'Một landing page chỉ để xem không giải quyết được phần quan trọng hơn: form, CRM, chatbot, automation, tracking và quy trình chăm sóc lead.'
  },
  {
    title: 'Triển khai rời rạc làm founder khó kiểm soát',
    description:
      'Website, dữ liệu khách hàng và logic tư vấn bị tách nhiều nơi, khiến việc tối ưu doanh thu sau launch trở nên chậm và khó đo lường.'
  }
];

const processSteps = [
  {
    eyebrow: 'Bước 01',
    title: 'Bạn mô tả ý tưởng và mục tiêu thật',
    description:
      'Ngành nghề, offer, khách hàng mục tiêu, brand tone và bài toán bán hàng. Brief đủ thật để không biến dự án thành một cuộc trao đổi mơ hồ.'
  },
  {
    eyebrow: 'Bước 02',
    title: 'AI dựng concept có thể xem và phản biện',
    description:
      'Landing page direction, logo cue, message hierarchy, màu sắc và flow chatbot được tạo ra để bạn thấy hướng đi trước khi bỏ chi phí lớn.'
  },
  {
    eyebrow: 'Bước 03',
    title: 'Đội ngũ biến concept thành hệ thống production',
    description:
      'Website, CRM, chatbot, automation, deployment và tài liệu vận hành được triển khai như một hạ tầng bán hàng thật, không dừng ở màn demo.'
  }
];

const packageGroups = [
  {
    name: 'Starter',
    fit: 'Cho doanh nghiệp cần ra mắt nhanh một bề mặt bán hàng rõ ràng.',
    outcome: 'Tạo landing page đầu tiên, chốt thông điệp và nhận lead gọn gàng.',
    features: [
      'Landing page theo concept AI',
      'Form nhận lead và thông báo',
      'Brand direction cơ bản',
      'Triển khai domain và hosting'
    ]
  },
  {
    name: 'Business',
    fit: 'Cho đội sales cần luồng tư vấn và nuôi lead mạch lạc hơn.',
    outcome: 'Nối website với CRM, chatbot và automation theo quy trình bán hàng.',
    features: [
      'Website nhiều trang',
      'CRM khách hàng tiềm năng',
      'Chatbot tư vấn theo kịch bản',
      'Automation nhắc việc và phân loại lead'
    ],
    featured: true
  },
  {
    name: 'Pro AI',
    fit: 'Cho mô hình cần theo dõi, tối ưu và mở rộng liên tục.',
    outcome: 'Xây hệ thống vận hành sâu hơn với dashboard và logic nội bộ riêng.',
    features: [
      'Dashboard vận hành',
      'Tích hợp công cụ nội bộ',
      'Workflow AI theo nghiệp vụ',
      'Theo dõi và hỗ trợ mở rộng'
    ]
  }
];

const deliverables = [
  'Website hoặc landing page production-ready',
  'Logo direction, màu sắc và brand kit cơ bản',
  'CRM hoặc bảng quản lý lead theo quy trình bán hàng',
  'Chatbot tư vấn theo kịch bản ngành',
  'Automation cho thông báo, phân loại và chăm sóc',
  'Deployment, domain, tracking và tài liệu bàn giao'
];

const advantages = [
  {
    title: 'Demo để ra quyết định nhanh hơn',
    description:
      'AI giúp nén thời gian từ ý tưởng sang concept nhìn thấy được, để founder chốt hướng nhanh hơn thay vì tranh luận bằng file mô tả.'
  },
  {
    title: 'Triển khai bám mục tiêu bán hàng',
    description:
      'Mỗi khối nội dung, form và chatbot đều phục vụ một hành động cụ thể: hiểu offer, để lại lead, đặt lịch hoặc quay lại chăm sóc.'
  },
  {
    title: 'Có đường nâng cấp sau ngày launch',
    description:
      'Khi dữ liệu thật bắt đầu chảy về, hệ thống có thể tiến hóa tiếp thành dashboard, automation sâu hơn và quy trình nội bộ có kiểm soát.'
  }
];

const faqs = [
  {
    question: 'VIETCODE AI có chỉ tạo demo rồi dừng lại không?',
    answer:
      'Không. Demo là bước mở đầu để hai bên chốt concept nhanh hơn. Sau đó đội ngũ triển khai website, CRM, chatbot, automation và hạ tầng thật theo phạm vi đã thống nhất.'
  },
  {
    question: 'Nếu tôi chưa có nội dung hay nhận diện thương hiệu thì sao?',
    answer:
      'Bạn chỉ cần mô tả sản phẩm, khách hàng và gu mong muốn. VIETCODE AI sẽ đề xuất cấu trúc trang, thông điệp, màu sắc và hướng nhận diện để bạn chọn.'
  },
  {
    question: 'Mô hình nhỏ có phù hợp không?',
    answer:
      'Có. Bạn có thể bắt đầu ở mức gọn để ra mắt nhanh, sau đó mở rộng sang CRM, chatbot và automation khi mô hình bán hàng đã rõ dữ liệu hơn.'
  },
  {
    question: 'Sau bàn giao có tiếp tục hỗ trợ không?',
    answer:
      'Có thể thiết kế theo gói hỗ trợ. Mục tiêu là bạn nhận được một hệ thống đủ rõ để tự vận hành, đồng thời có lộ trình tối ưu tiếp khi cần.'
  }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className='text-[11px] font-medium tracking-[0.28em] text-emerald-700 uppercase'>
      {children}
    </p>
  );
}

function Shell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-[2rem] bg-black/[0.04] p-1.5 ring-1 ring-black/5', className)}>
      <div className='rounded-[calc(2rem-0.375rem)] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]'>
        {children}
      </div>
    </div>
  );
}

function CheckItem({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className={cn('flex gap-3 text-sm leading-6', dark ? 'text-white/74' : 'text-zinc-700')}>
      <span
        className={cn(
          'mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full',
          dark ? 'bg-white/10 text-emerald-300' : 'bg-emerald-500/10 text-emerald-700'
        )}
      >
        <Icons.check className='size-3.5' />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function HomePage() {
  return (
    <main className='min-h-[100dvh] bg-[#f3f1ea] text-zinc-950'>
      <div className='fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.76),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(114,160,123,0.18),transparent_20%),linear-gradient(180deg,#f3f1ea_0%,#f6f2ea_42%,#efe9dd_100%)]' />
      <div className='pointer-events-none fixed inset-0 -z-10 opacity-[0.055] [background-image:radial-gradient(#1f2937_0.65px,transparent_0.65px)] [background-size:16px_16px]' />

      <header className='sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='rounded-full bg-white/72 px-4 py-3 shadow-[0_24px_60px_-28px_rgba(35,35,25,0.34)] ring-1 ring-black/6 backdrop-blur-xl sm:px-6'>
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
                  <Link href='/intake'>Mô tả brief</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className='px-4 pb-20 sm:px-6 lg:px-8 lg:pb-32'>
        <div className='mx-auto grid max-w-7xl gap-14 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:pt-16'>
          <div className='flex flex-col justify-between py-6 lg:min-h-[46rem] lg:py-10'>
            <div>
              <div className='inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-[11px] font-medium tracking-[0.26em] text-zinc-700 uppercase ring-1 ring-black/6 backdrop-blur'>
                <span className='inline-flex size-2 rounded-full bg-emerald-500' />
                Premium intake system for founders
              </div>
              <h1 className='mt-8 max-w-[12ch] font-[var(--font-playfair-display)] text-6xl leading-[0.92] tracking-[-0.05em] text-balance sm:text-7xl lg:text-[6.4rem]'>
                Một ý tưởng rõ hơn đáng giá hơn một bản báo giá sớm.
              </h1>
              <p className='mt-8 max-w-[33rem] text-lg leading-8 text-zinc-700 sm:text-xl'>
                VIETCODE AI mở đầu bằng một intake flow đủ tinh gọn để founder mô tả đúng điều mình
                đang bán, rồi dùng AI dựng concept nhìn thấy được trước khi đội ngũ triển khai thành
                website, CRM, chatbot và automation vận hành thật.
              </p>
            </div>

            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <Button
                asChild
                size='lg'
                className='h-13 rounded-full bg-[#111311] px-3 text-white shadow-[0_24px_50px_-20px_rgba(17,19,17,0.7)] transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] hover:bg-[#1d211d] active:scale-[0.98]'
              >
                <Link href='/intake' className='gap-3'>
                  <span className='pl-3'>Bắt đầu với brief</span>
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
                <Link href='#quy-trinh'>Xem đường triển khai</Link>
              </Button>
            </div>

            <div className='mt-10 grid gap-4 border-t border-black/8 pt-8 sm:grid-cols-3'>
              {credibilityItems.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </div>
          </div>

          <div className='relative lg:min-h-[46rem]'>
            <div className='absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.8),transparent_26%),radial-gradient(circle_at_82%_16%,rgba(122,169,132,0.2),transparent_22%),linear-gradient(145deg,#1b211d_0%,#0e120f_100%)] shadow-[0_40px_100px_-36px_rgba(14,18,15,0.85)]' />
            <div className='absolute inset-x-0 top-10 bottom-0 grid gap-4 px-3 sm:px-6 lg:grid-cols-[0.78fr_1.22fr]'>
              <Shell className='self-start lg:translate-y-6'>
                <div className='rounded-[calc(2rem-0.375rem)] bg-[#f5f1e9] p-6'>
                  <p className='text-[11px] tracking-[0.24em] text-zinc-500 uppercase'>
                    Founder intake
                  </p>
                  <div className='mt-5 space-y-3'>
                    {[
                      'Thẩm mỹ viện tại Đà Nẵng cần tăng lịch hẹn từ web',
                      'Ưu tiên hình ảnh cao cấp nhưng không xa cách',
                      'Muốn chatbot hỏi nhu cầu rồi đẩy lead vào CRM',
                      'Cần ra bản demo trong vài ngày để chốt hướng'
                    ].map((item) => (
                      <div
                        key={item}
                        className='rounded-[1.25rem] bg-white px-4 py-3 text-sm leading-6 text-zinc-700 shadow-[0_10px_24px_-18px_rgba(0,0,0,0.4)] ring-1 ring-black/5'
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Shell>

              <div className='grid gap-4 pb-4 lg:pb-10'>
                <Shell className='lg:translate-y-20'>
                  <div className='overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[#121814] text-white'>
                    <div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
                      <div className='flex items-center gap-2'>
                        <span className='size-2.5 rounded-full bg-[#ff8175]' />
                        <span className='size-2.5 rounded-full bg-[#ffcf69]' />
                        <span className='size-2.5 rounded-full bg-[#6ae39e]' />
                      </div>
                      <span className='text-[11px] tracking-[0.24em] text-white/45 uppercase'>
                        AI concept output
                      </span>
                    </div>
                    <div className='grid gap-0 xl:grid-cols-[1.1fr_0.9fr]'>
                      <div className='p-5 sm:p-6'>
                        <div className='rounded-[1.7rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(237,244,237,0.88))] p-5 text-zinc-950'>
                          <p className='text-[11px] tracking-[0.22em] text-emerald-800 uppercase'>
                            SEREN ritual clinic
                          </p>
                          <p className='mt-5 max-w-[12ch] font-[var(--font-playfair-display)] text-4xl leading-[0.94] tracking-[-0.05em]'>
                            Chạm nhẹ để cơ thể được nghỉ đúng cách.
                          </p>
                          <div className='mt-7 flex items-center gap-2 text-sm text-zinc-600'>
                            <span className='rounded-full bg-zinc-950 px-3 py-1 text-white'>
                              Landing
                            </span>
                            <span>Chatbot</span>
                            <span>CRM</span>
                          </div>
                        </div>
                        <div className='mt-4 grid gap-3 sm:grid-cols-3'>
                          {['Hero copy', 'Brand cue', 'Lead flow'].map((item) => (
                            <div
                              key={item}
                              className='rounded-[1.25rem] bg-white/5 p-4 ring-1 ring-white/10'
                            >
                              <div className='h-1.5 rounded-full bg-emerald-300/85' />
                              <p className='mt-4 text-sm text-white/70'>{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='border-t border-white/10 bg-white/[0.04] p-5 sm:p-6 xl:border-t-0 xl:border-l'>
                        <p className='text-[11px] tracking-[0.22em] text-white/45 uppercase'>
                          Automation route
                        </p>
                        <div className='mt-5 space-y-3'>
                          {[
                            'Lead điền nhu cầu và timeline',
                            'Chatbot gợi ý gói phù hợp',
                            'CRM phân loại nóng, ấm, lạnh',
                            'Đội ngũ chốt lịch concept review'
                          ].map((item, index) => (
                            <div
                              key={item}
                              className='flex gap-3 rounded-[1.25rem] bg-white/[0.05] px-4 py-3 ring-1 ring-white/10'
                            >
                              <span className='font-mono text-sm text-emerald-300'>
                                0{index + 1}
                              </span>
                              <p className='text-sm leading-6 text-white/74'>{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Shell>

                <div className='grid gap-4 md:grid-cols-[0.95fr_1.05fr] lg:translate-x-8'>
                  <Shell>
                    <div className='rounded-[calc(2rem-0.375rem)] bg-[#efe8dc] p-5'>
                      <p className='text-[11px] tracking-[0.22em] text-zinc-500 uppercase'>
                        Founder outcome
                      </p>
                      <p className='mt-4 max-w-[18rem] text-2xl leading-tight font-medium tracking-tight text-zinc-950'>
                        Thấy được concept đủ sớm để quyết định phạm vi đầu tư đúng hơn.
                      </p>
                    </div>
                  </Shell>
                  <Shell>
                    <div className='rounded-[calc(2rem-0.375rem)] bg-[#101511] p-5 text-white'>
                      <p className='text-[11px] tracking-[0.22em] text-white/45 uppercase'>
                        Production layer
                      </p>
                      <ul className='mt-4 space-y-3'>
                        {[
                          'Website production-ready',
                          'CRM theo pipeline tư vấn',
                          'Chatbot gắn ngữ cảnh bán hàng',
                          'Deployment và tài liệu bàn giao'
                        ].map((item) => (
                          <CheckItem key={item} dark>
                            {item}
                          </CheckItem>
                        ))}
                      </ul>
                    </div>
                  </Shell>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-4 py-24 sm:px-6 lg:px-8 lg:py-32'>
        <div className='mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end'>
          <div>
            <SectionLabel>Vấn đề thực tế</SectionLabel>
            <h2 className='mt-5 max-w-[12ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl'>
              Founder không thiếu ý tưởng. Họ thiếu một bề mặt để nhìn đúng hệ thống mình sắp mua.
            </h2>
          </div>
          <p className='max-w-[40rem] text-lg leading-8 text-zinc-600'>
            VIETCODE AI dùng lớp demo như một công cụ giảm mơ hồ, nhưng toàn bộ giá trị nằm ở phần
            triển khai sau đó: dữ liệu, biểu mẫu, chatbot, logic nuôi lead và một đường bàn giao để
            doanh nghiệp thật sự dùng được.
          </p>
        </div>

        <div className='mx-auto mt-14 grid max-w-7xl gap-5 lg:grid-cols-[1.08fr_0.92fr]'>
          <Shell>
            <div className='grid gap-0 rounded-[calc(2rem-0.375rem)] bg-white lg:grid-cols-[0.92fr_1.08fr]'>
              <div className='border-b border-black/6 p-8 lg:border-r lg:border-b-0'>
                <p className='text-[11px] tracking-[0.24em] text-zinc-500 uppercase'>
                  Tình huống thường gặp
                </p>
                <p className='mt-4 max-w-[16rem] text-3xl leading-tight font-medium tracking-tight'>
                  Giao diện được làm trước khi logic bán hàng được hiểu đủ sâu.
                </p>
              </div>
              <div className='divide-y divide-black/6'>
                {painPoints.map((item, index) => (
                  <article key={item.title} className='p-8'>
                    <p className='font-mono text-sm text-emerald-700'>0{index + 1}</p>
                    <h3 className='mt-3 text-2xl leading-tight font-medium tracking-tight'>
                      {item.title}
                    </h3>
                    <p className='mt-4 max-w-[34rem] leading-7 text-zinc-600'>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </Shell>

          <div className='grid gap-5'>
            <Shell>
              <div className='rounded-[calc(2rem-0.375rem)] bg-[#181d19] p-8 text-white'>
                <p className='text-[11px] tracking-[0.24em] text-white/45 uppercase'>
                  What changes
                </p>
                <p className='mt-4 max-w-[18rem] font-[var(--font-playfair-display)] text-4xl leading-[1.02] tracking-[-0.04em]'>
                  Thấy sớm. Sửa sớm. Chốt đúng.
                </p>
                <p className='mt-5 max-w-[22rem] leading-7 text-white/70'>
                  Khi concept được dựng đủ thật, founder ra quyết định bằng thứ có thể xem và phản
                  biện, không phải bằng mô tả trừu tượng.
                </p>
              </div>
            </Shell>
            <Shell>
              <div className='rounded-[calc(2rem-0.375rem)] bg-[#efe6d7] p-8'>
                <p className='text-[11px] tracking-[0.24em] text-zinc-500 uppercase'>
                  Measured outcome
                </p>
                <div className='mt-5 grid gap-5 sm:grid-cols-3'>
                  {[
                    ['01', 'Brief rõ hơn'],
                    ['02', 'Concept nhanh hơn'],
                    ['03', 'Launch có kiểm soát']
                  ].map(([number, label]) => (
                    <div key={number}>
                      <p className='font-mono text-sm text-zinc-500'>{number}</p>
                      <p className='mt-2 text-lg leading-7 font-medium tracking-tight'>{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Shell>
          </div>
        </div>
      </section>

      <section id='quy-trinh' className='px-4 py-24 sm:px-6 lg:px-8 lg:py-32'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-10 lg:grid-cols-[0.78fr_1.22fr]'>
            <div>
              <SectionLabel>Quy trình</SectionLabel>
              <h2 className='mt-5 max-w-[10ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl'>
                Một đường đi có thứ tự, không phải chuỗi họp kéo dài.
              </h2>
              <p className='mt-6 max-w-[26rem] text-lg leading-8 text-zinc-600'>
                Mỗi bước tạo ra một quyết định rõ: mô tả điều gì, nhìn thấy điều gì và khi nào triển
                khai production.
              </p>
            </div>

            <div className='space-y-5'>
              {processSteps.map((step) => (
                <Shell key={step.title}>
                  <article className='rounded-[calc(2rem-0.375rem)] bg-white p-8'>
                    <div className='grid gap-5 md:grid-cols-[0.36fr_0.64fr]'>
                      <div>
                        <p className='text-[11px] tracking-[0.24em] text-emerald-700 uppercase'>
                          {step.eyebrow}
                        </p>
                        <h3 className='mt-4 text-2xl leading-tight font-medium tracking-tight text-zinc-950'>
                          {step.title}
                        </h3>
                      </div>
                      <p className='max-w-[34rem] text-base leading-7 text-zinc-600'>
                        {step.description}
                      </p>
                    </div>
                  </article>
                </Shell>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id='goi-dich-vu'
        className='bg-[#111311] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32'
      >
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end'>
            <div>
              <SectionLabel>Gói dịch vụ</SectionLabel>
              <h2 className='mt-5 max-w-[12ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl'>
                Mức triển khai thay đổi theo độ chín của mô hình bán hàng.
              </h2>
            </div>
            <p className='max-w-[40rem] text-lg leading-8 text-white/68'>
              Bạn không cần mua cả hệ thống ngay trong ngày đầu. Có thể bắt đầu gọn, kiểm tra phản
              hồi thị trường, rồi mở rộng sang CRM, automation và dashboard khi cần.
            </p>
          </div>

          <div className='mt-14 grid gap-5 xl:grid-cols-[0.88fr_1.12fr]'>
            <Shell className='bg-white/6 ring-white/10'>
              <div className='rounded-[calc(2rem-0.375rem)] bg-[#181c18] p-8'>
                <p className='text-[11px] tracking-[0.24em] text-white/45 uppercase'>
                  Operating principle
                </p>
                <p className='mt-4 max-w-[16rem] font-[var(--font-playfair-display)] text-4xl leading-[1.02] tracking-[-0.04em]'>
                  Demo trước để founder thấy đúng thứ mình đang mua.
                </p>
                <ul className='mt-8 space-y-3'>
                  {[
                    'Khởi động bằng brief đủ thật',
                    'Tạo concept có thể phản biện',
                    'Chốt phạm vi trước khi code sâu',
                    'Nâng cấp tiếp khi dữ liệu đã về'
                  ].map((item) => (
                    <CheckItem key={item} dark>
                      {item}
                    </CheckItem>
                  ))}
                </ul>
              </div>
            </Shell>

            <div className='grid gap-5 md:grid-cols-3'>
              {packageGroups.map((item) => (
                <Shell
                  key={item.name}
                  className={
                    item.featured
                      ? 'bg-emerald-300/16 ring-emerald-300/18'
                      : 'bg-white/6 ring-white/10'
                  }
                >
                  <article
                    className={cn(
                      'rounded-[calc(2rem-0.375rem)] p-6 h-full',
                      item.featured ? 'bg-[#efe6d7] text-zinc-950' : 'bg-[#181c18] text-white'
                    )}
                  >
                    <div className='flex items-start justify-between gap-3'>
                      <div>
                        <p
                          className={cn(
                            'text-[11px] tracking-[0.24em] uppercase',
                            item.featured ? 'text-zinc-500' : 'text-white/45'
                          )}
                        >
                          Package
                        </p>
                        <h3 className='mt-3 text-2xl leading-tight font-medium tracking-tight'>
                          {item.name}
                        </h3>
                      </div>
                      {item.featured ? (
                        <span className='rounded-full bg-zinc-950 px-3 py-1 text-[11px] tracking-[0.2em] text-white uppercase'>
                          Recommended
                        </span>
                      ) : null}
                    </div>
                    <p
                      className={cn(
                        'mt-4 text-sm leading-7',
                        item.featured ? 'text-zinc-700' : 'text-white/66'
                      )}
                    >
                      {item.fit}
                    </p>
                    <p
                      className={cn(
                        'mt-4 text-base leading-7',
                        item.featured ? 'text-zinc-950' : 'text-white/82'
                      )}
                    >
                      {item.outcome}
                    </p>
                    <ul className='mt-6 space-y-3'>
                      {item.features.map((feature) => (
                        <CheckItem key={feature} dark={!item.featured}>
                          {feature}
                        </CheckItem>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={cn(
                        'mt-8 w-full rounded-full transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] active:scale-[0.98]',
                        item.featured
                          ? 'bg-zinc-950 text-white hover:bg-zinc-800'
                          : 'bg-white text-zinc-950 hover:bg-white/90'
                      )}
                    >
                      <Link href='/intake'>Mô tả nhu cầu</Link>
                    </Button>
                  </article>
                </Shell>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='ban-giao' className='px-4 py-24 sm:px-6 lg:px-8 lg:py-32'>
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start'>
          <div>
            <SectionLabel>Bàn giao</SectionLabel>
            <h2 className='mt-5 max-w-[12ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl'>
              Founder không nhận một mockup đẹp. Founder nhận một hệ thống có đường dùng sau ngày
              launch.
            </h2>
            <p className='mt-6 max-w-[28rem] text-lg leading-8 text-zinc-600'>
              Phạm vi có thể gọn hoặc sâu, nhưng luôn phải đủ rõ để đội sales, đội vận hành hoặc
              chính founder biết cách chạy tiếp sau khi dự án lên production.
            </p>
          </div>

          <Shell>
            <div className='grid gap-0 rounded-[calc(2rem-0.375rem)] bg-white md:grid-cols-[0.44fr_0.56fr]'>
              <div className='border-b border-black/6 p-8 md:border-r md:border-b-0'>
                <p className='text-[11px] tracking-[0.24em] text-zinc-500 uppercase'>
                  Delivery board
                </p>
                <p className='mt-4 max-w-[14rem] text-3xl leading-tight font-medium tracking-tight'>
                  Concept đến vận hành trong cùng một lộ trình.
                </p>
              </div>
              <div className='grid gap-3 p-6 sm:grid-cols-2'>
                {deliverables.map((item) => (
                  <div key={item} className='rounded-[1.4rem] bg-[#f5f1e9] p-4 ring-1 ring-black/5'>
                    <Icons.circleCheck className='size-5 text-emerald-700' />
                    <p className='mt-3 text-sm leading-6 text-zinc-700'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Shell>
        </div>
      </section>

      <section className='bg-[#e9e3d5] px-4 py-24 sm:px-6 lg:px-8 lg:py-32'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start'>
            <div>
              <SectionLabel>Lợi thế vận hành</SectionLabel>
              <h2 className='mt-5 max-w-[11ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl'>
                AI giúp khởi động đủ nhanh. Đội ngũ giúp hệ thống đứng đủ vững.
              </h2>
            </div>
            <div className='grid gap-5'>
              {advantages.map((item, index) => (
                <Shell key={item.title}>
                  <article className='rounded-[calc(2rem-0.375rem)] bg-white p-8'>
                    <div className='grid gap-4 md:grid-cols-[0.18fr_0.82fr]'>
                      <p className='font-mono text-sm text-zinc-400'>0{index + 1}</p>
                      <div>
                        <h3 className='text-2xl leading-tight font-medium tracking-tight'>
                          {item.title}
                        </h3>
                        <p className='mt-4 max-w-[38rem] leading-7 text-zinc-600'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </Shell>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='faq' className='px-4 py-24 sm:px-6 lg:px-8 lg:py-32'>
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]'>
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className='mt-5 max-w-[10ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl'>
              Những câu hỏi xuất hiện trước khi founder gửi brief.
            </h2>
          </div>
          <Shell>
            <div className='divide-y divide-black/6 rounded-[calc(2rem-0.375rem)] bg-white'>
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className='group p-7 first:rounded-t-[calc(2rem-0.375rem)] last:rounded-b-[calc(2rem-0.375rem)] open:bg-[#fbfaf6]'
                >
                  <summary className='flex cursor-pointer list-none items-center justify-between gap-6 text-left text-xl leading-tight font-medium tracking-tight'>
                    {item.question}
                    <span className='inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-zinc-600 transition duration-500 group-open:rotate-180'>
                      <Icons.chevronDown className='size-4' />
                    </span>
                  </summary>
                  <p className='mt-4 max-w-[42rem] leading-7 text-zinc-600'>{item.answer}</p>
                </details>
              ))}
            </div>
          </Shell>
        </div>
      </section>

      <section id='tu-van' className='px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32'>
        <div className='mx-auto max-w-7xl'>
          <Shell className='bg-[#151915] ring-black/10'>
            <div className='rounded-[calc(2rem-0.375rem)] bg-[radial-gradient(circle_at_14%_14%,rgba(84,165,112,0.22),transparent_26%),linear-gradient(135deg,#151915_0%,#0e110f_100%)] p-8 text-white sm:p-10 lg:p-14'>
              <div className='grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end'>
                <div>
                  <p className='text-[11px] tracking-[0.26em] text-emerald-300 uppercase'>
                    Bắt đầu bằng intake
                  </p>
                  <h2 className='mt-5 max-w-[12ch] font-[var(--font-playfair-display)] text-4xl leading-[0.98] tracking-[-0.04em] text-balance sm:text-5xl'>
                    Gửi ý tưởng khi nó còn đang mơ hồ. Chúng tôi biến nó thành thứ có thể xem và
                    triển khai.
                  </h2>
                  <p className='mt-6 max-w-[36rem] text-lg leading-8 text-white/70'>
                    Hãy mô tả sản phẩm, khách hàng và mục tiêu bán hàng. `/intake` là bước để
                    VIETCODE AI hiểu đúng bài toán trước khi tạo concept và đề xuất lộ trình
                    execution.
                  </p>
                </div>
                <div className='rounded-[1.8rem] bg-white/[0.06] p-5 ring-1 ring-white/10 backdrop-blur'>
                  <div className='space-y-3'>
                    {[
                      'Bạn đang bán điều gì và cho ai?',
                      'Khách hàng cần tin điều gì trước khi để lại lead?',
                      'Hệ thống cần tự động hóa phần nào ngay từ vòng đầu?',
                      'Founder muốn demo mức nào trước khi quyết định phạm vi?'
                    ].map((item) => (
                      <div
                        key={item}
                        className='rounded-[1.2rem] bg-white/[0.05] px-4 py-3 text-sm leading-6 text-white/72 ring-1 ring-white/10'
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <Button
                    asChild
                    size='lg'
                    className='mt-5 h-13 w-full rounded-full bg-[#efe6d7] text-zinc-950 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] hover:bg-[#f6eee0] active:scale-[0.98]'
                  >
                    <Link href='/intake' className='gap-3'>
                      <span className='pl-3'>Mở form intake</span>
                      <span className='inline-flex size-8 items-center justify-center rounded-full bg-black/5'>
                        <Icons.arrowRight className='size-4' />
                      </span>
                    </Link>
                  </Button>
                  <div className='mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs tracking-[0.18em] text-white/42 uppercase'>
                    <span>Landing</span>
                    <span>CRM</span>
                    <span>Chatbot</span>
                    <span>Automation</span>
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
              Bạn mô tả ý tưởng. AI dựng concept. Đội ngũ triển khai thành website, CRM, chatbot và
              hệ thống bán hàng thật.
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
