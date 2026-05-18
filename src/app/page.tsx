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
  'Có đội triển khai thật sau lớp AI',
  'Bàn giao để vận hành và mở rộng'
];

const painPoints = [
  {
    title: 'Ý tưởng hay nhưng khó hình dung',
    description:
      'Trao đổi bằng vài dòng mô tả hoặc slide khiến hai bên mất nhiều vòng để thống nhất giao diện, thông điệp và luồng bán hàng.'
  },
  {
    title: 'Dựng mẫu đẹp nhưng không chạy được',
    description:
      'Một landing page chỉ để xem không giải quyết phần quan trọng hơn: form, CRM, chatbot, automation, tracking và quy trình chăm sóc khách.'
  },
  {
    title: 'Triển khai rời rạc, khó bàn giao',
    description:
      'Website, dữ liệu khách hàng, kịch bản tư vấn và vận hành thường nằm ở nhiều nơi, khiến chủ doanh nghiệp khó theo dõi hiệu quả.'
  }
];

const processSteps = [
  {
    eyebrow: 'Bước 01',
    title: 'Bạn mô tả ý tưởng',
    description:
      'Ngành nghề, khách hàng mục tiêu, sản phẩm, giọng thương hiệu và mục tiêu kinh doanh. VIETCODE AI biến phần mô tả đó thành brief triển khai rõ ràng.'
  },
  {
    eyebrow: 'Bước 02',
    title: 'AI tạo demo có thể nhìn thấy',
    description:
      'Landing page mẫu, hướng logo, màu sắc, bố cục, nội dung chính và luồng chatbot được phác thảo nhanh để bạn đánh giá hướng đi trước khi đầu tư.'
  },
  {
    eyebrow: 'Bước 03',
    title: 'Đội ngũ triển khai hệ thống thật',
    description:
      'Khi concept đã đúng, đội ngũ xây website, CRM, chatbot, automation, domain, tracking, deployment và tài liệu vận hành.'
  }
];

const packages = [
  {
    name: 'Starter',
    fit: 'Phù hợp khi cần ra mắt nhanh một kênh bán hàng gọn gàng.',
    features: [
      'Landing page theo concept AI',
      'Form nhận lead và thông báo',
      'Bộ nhận diện cơ bản',
      'Triển khai domain và hosting'
    ],
    cta: 'Khởi động nhanh'
  },
  {
    name: 'Business',
    fit: 'Dành cho đội bán hàng cần luồng chăm sóc khách rõ ràng.',
    features: [
      'Website nhiều trang',
      'CRM khách hàng tiềm năng',
      'Chatbot tư vấn kịch bản',
      'Automation nhắc việc và phân loại lead'
    ],
    cta: 'Xây hệ thống bán hàng',
    featured: true
  },
  {
    name: 'Pro AI',
    fit: 'Cho mô hình cần vận hành, đo lường và mở rộng liên tục.',
    features: [
      'Dashboard vận hành',
      'Tích hợp công cụ nội bộ',
      'Workflow AI theo nghiệp vụ',
      'Theo dõi, tối ưu và hỗ trợ mở rộng'
    ],
    cta: 'Thiết kế giải pháp riêng'
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
    title: 'Từ demo sang code thật',
    description:
      'AI dùng để làm rõ hướng đi nhanh hơn. Phần bàn giao cuối vẫn được đội ngũ thiết kế, lập trình và kiểm tra như một sản phẩm vận hành.'
  },
  {
    title: 'Tư duy bán hàng trước giao diện',
    description:
      'Mỗi section, form và chatbot đều phục vụ một hành động cụ thể: hiểu sản phẩm, để lại thông tin, được tư vấn hoặc quay lại chăm sóc.'
  },
  {
    title: 'Có đường mở rộng sau ngày ra mắt',
    description:
      'Khi có dữ liệu thật, hệ thống có thể nâng cấp thêm dashboard, tích hợp CRM, automation, phân quyền nội bộ và báo cáo.'
  }
];

const faqs = [
  {
    question: 'VIETCODE AI có chỉ tạo demo bằng AI rồi bàn giao không?',
    answer:
      'Không. Demo AI là bước giúp hai bên nhìn rõ concept nhanh. Sau đó đội ngũ VIETCODE AI triển khai thành website, CRM, chatbot, automation và hạ tầng thật theo phạm vi đã thống nhất.'
  },
  {
    question: 'Nếu tôi chưa có nội dung hoặc nhận diện thương hiệu thì sao?',
    answer:
      'Bạn chỉ cần mô tả sản phẩm, khách hàng và phong cách mong muốn. VIETCODE AI sẽ đề xuất thông điệp, cấu trúc trang, màu sắc và hướng nhận diện để bạn chọn và chỉnh.'
  },
  {
    question: 'Có phù hợp với doanh nghiệp nhỏ không?',
    answer:
      'Có. Gói Starter tập trung vào việc ra mắt nhanh và đo phản hồi thị trường. Khi mô hình bán hàng rõ hơn, hệ thống có thể nâng lên CRM, chatbot và automation.'
  },
  {
    question: 'Sau khi bàn giao có hỗ trợ vận hành không?',
    answer:
      'Có thể thiết kế theo gói hỗ trợ. Mục tiêu là bàn giao hệ thống đủ rõ để đội của bạn dùng được, đồng thời có phương án tối ưu khi dữ liệu khách hàng bắt đầu phát sinh.'
  }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className='text-primary text-sm font-semibold tracking-[0.22em] uppercase'>{children}</p>
  );
}

function CheckItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <li className={cn('flex gap-3 text-sm leading-6 text-zinc-700', className)}>
      <span className='bg-emerald-500/10 text-emerald-700 mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full'>
        <Icons.check className='size-3.5' />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function HomePage() {
  return (
    <main className='min-h-screen bg-[#f7fbf8] text-zinc-950'>
      <header className='sticky top-0 z-50 border-b border-emerald-950/10 bg-[rgba(247,251,248,0.85)] backdrop-blur-xl'>
        <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
          <Link href='/' className='flex items-center gap-3' aria-label='VIETCODE AI home'>
            <span className='relative inline-flex size-9 items-center justify-center overflow-hidden rounded-xl bg-zinc-950 text-white shadow-[0_16px_38px_rgba(10,20,16,0.22)]'>
              <span className='absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(52,211,153,0.9),transparent_42%)]' />
              <Icons.sparkles className='relative size-4' />
            </span>
            <span className='text-base font-semibold tracking-tight'>VIETCODE AI</span>
          </Link>

          <nav className='hidden items-center gap-8 md:flex' aria-label='Main navigation'>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-sm font-medium text-zinc-600 transition hover:text-zinc-950'
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className='flex items-center gap-2'>
            <Button asChild variant='ghost' className='hidden text-zinc-700 sm:inline-flex'>
              <Link href='/auth/sign-in'>Đăng nhập</Link>
            </Button>
            <Button asChild className='bg-zinc-950 text-white hover:bg-zinc-800'>
              <Link href='#tu-van'>Tư vấn demo</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className='relative isolate overflow-hidden'>
        <div className='absolute inset-0 -z-10 bg-[linear-gradient(115deg,#f7fbf8_0%,#f7fbf8_44%,#e0f8ea_72%,#b8efd2_100%)]' />
        <div className='absolute top-20 right-[-12rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-emerald-300/35 blur-3xl' />
        <div className='absolute bottom-0 left-1/2 -z-10 h-56 w-[70rem] -translate-x-1/2 rounded-[100%] bg-white/70 blur-2xl' />

        <div className='mx-auto grid max-w-7xl gap-12 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pt-24 lg:pb-28'>
          <div className='flex flex-col justify-center'>
            <div className='mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-emerald-950 shadow-sm backdrop-blur'>
              <Icons.sparkles className='size-4 text-emerald-600' />
              Demo AI trước, triển khai thật sau
            </div>
            <h1 className='max-w-4xl text-5xl leading-[0.98] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl'>
              Bạn mô tả ý tưởng. AI tạo demo. VIETCODE AI biến nó thành hệ thống bán hàng thật.
            </h1>
            <p className='mt-7 max-w-2xl text-lg leading-8 text-zinc-700 sm:text-xl'>
              Không bắt đầu bằng một bản báo giá mơ hồ. Chúng tôi giúp bạn nhìn thấy landing page,
              logo direction, nội dung và chatbot mẫu trước, rồi triển khai website, CRM, automation
              và vận hành thành sản phẩm dùng được.
            </p>
            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <Button
                asChild
                size='lg'
                className='h-12 rounded-full bg-zinc-950 px-6 text-white shadow-[0_18px_44px_rgba(10,20,16,0.22)] hover:bg-zinc-800'
              >
                <Link href='/intake'>
                  Mô tả ý tưởng của bạn
                  <Icons.arrowRight className='ml-2 size-4' />
                </Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='h-12 rounded-full border-emerald-950/15 bg-white/70 px-6 text-zinc-900 backdrop-blur hover:bg-white'
              >
                <Link href='#quy-trinh'>Xem quy trình</Link>
              </Button>
            </div>
            <ul className='mt-8 grid gap-3 sm:grid-cols-3'>
              {credibilityItems.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>

          <div className='relative min-h-[34rem] lg:min-h-[42rem]'>
            <div className='absolute inset-x-2 top-0 rounded-[2rem] border border-white/70 bg-white/50 p-3 shadow-[0_32px_90px_rgba(7,36,24,0.16)] backdrop-blur-2xl sm:inset-x-8 lg:inset-x-0'>
              <div className='overflow-hidden rounded-[1.5rem] border border-emerald-950/10 bg-[#07140f] text-white'>
                <div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
                  <div className='flex items-center gap-2'>
                    <span className='size-2.5 rounded-full bg-rose-400' />
                    <span className='size-2.5 rounded-full bg-amber-300' />
                    <span className='size-2.5 rounded-full bg-emerald-400' />
                  </div>
                  <span className='text-xs font-medium text-white/50'>
                    vietcode.ai/demo-builder
                  </span>
                </div>
                <div className='grid gap-0 lg:grid-cols-[0.85fr_1.15fr]'>
                  <div className='border-b border-white/10 p-5 lg:border-r lg:border-b-0'>
                    <p className='text-xs font-semibold tracking-[0.2em] text-emerald-300 uppercase'>
                      Idea brief
                    </p>
                    <div className='mt-4 space-y-3'>
                      {[
                        'Spa cao cấp tại Đà Nẵng',
                        'Muốn có landing page đặt lịch',
                        'Cần chatbot tư vấn liệu trình'
                      ].map((item) => (
                        <div
                          key={item}
                          className='rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-sm text-white/80'
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className='mt-5 rounded-2xl bg-emerald-400 p-4 text-emerald-950'>
                      <p className='text-sm font-semibold'>AI đề xuất</p>
                      <p className='mt-1 text-sm leading-6'>
                        Concept thanh lịch, CTA đặt lịch nhanh, chatbot hỏi nhu cầu và chuyển lead
                        về CRM.
                      </p>
                    </div>
                  </div>
                  <div className='bg-[radial-gradient(circle_at_70%_12%,rgba(52,211,153,0.28),transparent_34%),linear-gradient(145deg,#102018,#07140f)] p-5'>
                    <div className='rounded-[1.25rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl'>
                      <div className='h-40 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(209,250,229,0.74)),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.5),transparent_30%)] p-4 text-zinc-950'>
                        <p className='text-xs font-semibold text-emerald-800'>SEREN SPA</p>
                        <p className='mt-3 max-w-[13rem] text-2xl leading-7 font-semibold'>
                          Chạm nhẹ để cơ thể được nghỉ
                        </p>
                      </div>
                      <div className='mt-4 grid grid-cols-3 gap-3'>
                        {['Logo', 'Tone', 'Copy'].map((item) => (
                          <div
                            key={item}
                            className='rounded-xl border border-white/10 bg-white/[0.06] p-3'
                          >
                            <div className='mb-3 h-1.5 rounded-full bg-emerald-300/80' />
                            <p className='text-xs text-white/60'>{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className='mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4'>
                        <div className='mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-200'>
                          <Icons.chat className='size-4' />
                          Chatbot flow
                        </div>
                        <div className='space-y-2 text-xs text-white/70'>
                          <p>1. Hỏi nhu cầu chăm sóc</p>
                          <p>2. Gợi ý liệu trình</p>
                          <p>3. Gửi lead vào CRM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='absolute right-0 bottom-6 left-8 rounded-[1.5rem] border border-emerald-950/10 bg-white/80 p-5 shadow-[0_24px_70px_rgba(7,36,24,0.14)] backdrop-blur-xl sm:left-20 lg:right-[-1.5rem]'>
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='text-sm font-semibold text-zinc-950'>
                    Sau demo là hệ thống vận hành
                  </p>
                  <p className='mt-1 text-sm leading-6 text-zinc-600'>
                    Website, CRM, chatbot, automation và deployment nằm trong cùng một lộ trình.
                  </p>
                </div>
                <span className='inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white'>
                  <Icons.checks className='size-5' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='border-y border-emerald-950/10 bg-white'>
        <div className='mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8'>
          {[
            ['Input', 'Một đoạn mô tả ngành, sản phẩm, khách hàng và mục tiêu.'],
            ['Output demo', 'Landing page, logo direction, copy, màu sắc và flow chatbot.'],
            ['Output thật', 'Website, CRM, automation, deployment và tài liệu vận hành.']
          ].map(([title, description]) => (
            <div key={title} className='flex gap-4'>
              <span className='mt-1 h-8 w-px shrink-0 bg-emerald-500' />
              <div>
                <p className='font-semibold text-zinc-950'>{title}</p>
                <p className='mt-1 text-sm leading-6 text-zinc-600'>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-white px-4 py-24 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end'>
            <div>
              <SectionLabel>Vấn đề thực tế</SectionLabel>
              <h2 className='mt-4 max-w-2xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl'>
                Doanh nghiệp không thiếu ý tưởng. Thứ thiếu là một cách biến ý tưởng thành hệ thống
                có thể bán hàng.
              </h2>
            </div>
            <p className='text-lg leading-8 text-zinc-600'>
              VIETCODE AI đặt bước demo ở đầu quy trình để giảm mơ hồ, nhưng không dừng ở bản mẫu.
              Mỗi concept được nối tiếp bằng phần triển khai thật: dữ liệu, form, chatbot, quy trình
              chăm sóc và vận hành sau khi ra mắt.
            </p>
          </div>

          <div className='mt-14 grid gap-5 md:grid-cols-3'>
            {painPoints.map((item, index) => (
              <article
                key={item.title}
                className='rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-6 shadow-sm'
              >
                <span className='text-sm font-semibold text-emerald-700'>0{index + 1}</span>
                <h3 className='mt-5 text-xl font-semibold tracking-tight text-zinc-950'>
                  {item.title}
                </h3>
                <p className='mt-3 text-sm leading-7 text-zinc-600'>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id='quy-trinh'
        className='relative overflow-hidden bg-[#07140f] px-4 py-24 text-white sm:px-6 lg:px-8'
      >
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(52,211,153,0.28),transparent_31%),radial-gradient(circle_at_80%_18%,rgba(134,239,172,0.12),transparent_28%)]' />
        <div className='relative mx-auto max-w-7xl'>
          <div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr]'>
            <div>
              <p className='text-sm font-semibold tracking-[0.22em] text-emerald-300 uppercase'>
                Quy trình
              </p>
              <h2 className='mt-4 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl'>
                Một đường đi rõ: mô tả, nhìn thấy, rồi triển khai.
              </h2>
              <p className='mt-6 text-lg leading-8 text-white/70'>
                Mỗi bước tạo ra một quyết định cụ thể. Không kéo dài bằng những cuộc họp không đầu
                ra, cũng không ép bạn mua một hệ thống khi chưa thấy hướng đi.
              </p>
            </div>

            <div className='space-y-4'>
              {processSteps.map((step) => (
                <article
                  key={step.title}
                  className='group rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur transition hover:bg-white/[0.09]'
                >
                  <p className='text-sm font-semibold text-emerald-300'>{step.eyebrow}</p>
                  <div className='mt-3 grid gap-4 md:grid-cols-[0.42fr_0.58fr]'>
                    <h3 className='text-2xl font-semibold tracking-tight'>{step.title}</h3>
                    <p className='leading-7 text-white/70'>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='goi-dich-vu' className='bg-[#f7fbf8] px-4 py-24 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto max-w-3xl text-center'>
            <SectionLabel>Gói dịch vụ</SectionLabel>
            <h2 className='mt-4 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl'>
              Chọn mức triển khai theo độ chín của mô hình bán hàng.
            </h2>
            <p className='mt-5 text-lg leading-8 text-zinc-600'>
              Không cần mua mọi thứ ngay từ đầu. Bắt đầu bằng demo và mở rộng khi bạn đã có dữ liệu,
              phản hồi và nhu cầu vận hành rõ hơn.
            </p>
          </div>

          <div className='mt-14 grid gap-5 lg:grid-cols-3'>
            {packages.map((item) => (
              <article
                key={item.name}
                className={cn(
                  'relative rounded-[1.75rem] border p-6 shadow-sm',
                  item.featured
                    ? 'border-emerald-500/35 bg-zinc-950 text-white shadow-[0_34px_90px_rgba(7,36,24,0.2)]'
                    : 'border-emerald-950/10 bg-white'
                )}
              >
                {item.featured ? (
                  <span className='absolute top-5 right-5 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-emerald-950'>
                    Đề xuất
                  </span>
                ) : null}
                <h3 className='text-2xl font-semibold tracking-tight'>{item.name}</h3>
                <p
                  className={cn(
                    'mt-4 min-h-16 leading-7',
                    item.featured ? 'text-white/70' : 'text-zinc-600'
                  )}
                >
                  {item.fit}
                </p>
                <ul className='mt-7 space-y-3'>
                  {item.features.map((feature) => (
                    <CheckItem
                      key={feature}
                      className={item.featured ? 'text-white/80' : undefined}
                    >
                      {feature}
                    </CheckItem>
                  ))}
                </ul>
                <Button
                  asChild
                  className={cn(
                    'mt-8 w-full rounded-full',
                    item.featured
                      ? 'bg-emerald-400 text-emerald-950 hover:bg-emerald-300'
                      : 'bg-zinc-950 text-white hover:bg-zinc-800'
                  )}
                >
                  <Link href='#tu-van'>{item.cta}</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id='ban-giao' className='bg-white px-4 py-24 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center'>
          <div>
            <SectionLabel>Bàn giao</SectionLabel>
            <h2 className='mt-4 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl'>
              Không chỉ là giao diện đẹp. Bạn nhận một bộ phận bán hàng số có thể vận hành.
            </h2>
            <p className='mt-6 text-lg leading-8 text-zinc-600'>
              Mỗi dự án được đóng gói theo mục tiêu kinh doanh: thu lead, tư vấn, phân loại khách,
              nhắc việc, theo dõi và cải tiến. Phạm vi có thể gọn hoặc sâu, nhưng phải rõ đường dùng
              sau ngày launch.
            </p>
          </div>

          <div className='rounded-[2rem] border border-emerald-950/10 bg-[#f7fbf8] p-4 shadow-[0_30px_80px_rgba(7,36,24,0.08)]'>
            <div className='rounded-[1.5rem] bg-white p-6'>
              <div className='mb-6 flex items-center justify-between gap-4'>
                <div>
                  <p className='text-sm font-semibold text-emerald-700'>Delivery board</p>
                  <p className='mt-1 text-sm text-zinc-500'>Concept đến vận hành</p>
                </div>
                <span className='inline-flex size-11 items-center justify-center rounded-full bg-zinc-950 text-white'>
                  <Icons.dashboard className='size-5' />
                </span>
              </div>
              <div className='grid gap-3 sm:grid-cols-2'>
                {deliverables.map((item) => (
                  <div
                    key={item}
                    className='rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-700'
                  >
                    <Icons.circleCheck className='mb-3 size-5 text-emerald-600' />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#ecf8f0] px-4 py-24 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
            <div>
              <SectionLabel>Lợi thế vận hành</SectionLabel>
              <h2 className='mt-4 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl'>
                AI giúp khởi động nhanh. Đội ngũ giúp hệ thống đứng vững.
              </h2>
            </div>
            <div className='grid gap-4'>
              {advantages.map((item) => (
                <article
                  key={item.title}
                  className='rounded-[1.5rem] bg-white/75 p-6 shadow-sm ring-1 ring-emerald-950/10 backdrop-blur'
                >
                  <h3 className='text-xl font-semibold tracking-tight'>{item.title}</h3>
                  <p className='mt-3 leading-7 text-zinc-600'>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='faq' className='bg-white px-4 py-24 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl'>
          <div className='text-center'>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className='mt-4 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl'>
              Những câu hỏi thường gặp trước khi bắt đầu.
            </h2>
          </div>
          <div className='mt-12 divide-y divide-zinc-200 rounded-[1.5rem] border border-zinc-200 bg-zinc-50'>
            {faqs.map((item) => (
              <details
                key={item.question}
                className='group p-6 open:bg-white first:rounded-t-[1.5rem] last:rounded-b-[1.5rem]'
              >
                <summary className='flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold tracking-tight'>
                  {item.question}
                  <Icons.chevronDown className='size-5 shrink-0 text-zinc-500 transition group-open:rotate-180' />
                </summary>
                <p className='mt-4 max-w-3xl leading-7 text-zinc-600'>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id='tu-van' className='bg-[#07140f] px-4 py-20 text-white sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_15%_20%,rgba(52,211,153,0.25),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-6 shadow-[0_40px_100px_rgba(0,0,0,0.24)] sm:p-10 lg:p-14'>
          <div className='grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center'>
            <div>
              <p className='text-sm font-semibold tracking-[0.22em] text-emerald-300 uppercase'>
                Bắt đầu bằng một brief ngắn
              </p>
              <h2 className='mt-4 text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl'>
                Gửi ý tưởng, nhận hướng demo, rồi quyết định phạm vi triển khai thật.
              </h2>
              <p className='mt-5 text-lg leading-8 text-white/70'>
                Hãy mô tả sản phẩm, khách hàng và mục tiêu bán hàng của bạn. VIETCODE AI sẽ giúp
                biến phần mơ hồ thành concept có thể xem, sửa và triển khai.
              </p>
            </div>
            <div className='rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur'>
              <div className='space-y-3'>
                {[
                  'Tôi đang bán gì?',
                  'Khách hàng cần tin điều gì?',
                  'Hệ thống cần tự động hóa phần nào?'
                ].map((item) => (
                  <div
                    key={item}
                    className='rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/75'
                  >
                    {item}
                  </div>
                ))}
              </div>
              <Button
                asChild
                size='lg'
                className='mt-5 h-12 w-full rounded-full bg-emerald-400 text-emerald-950 hover:bg-emerald-300'
              >
                <Link href='/auth/sign-up'>
                  Tạo tài khoản để trao đổi
                  <Icons.arrowRight className='ml-2 size-4' />
                </Link>
              </Button>
              <p className='mt-4 text-center text-xs leading-5 text-white/50'>
                Hoặc đăng nhập dashboard nếu bạn đã có workspace VIETCODE AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className='border-t border-emerald-950/10 bg-[#f7fbf8] px-4 py-10 sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='font-semibold tracking-tight'>VIETCODE AI</p>
            <p className='mt-2 max-w-xl text-sm leading-6 text-zinc-600'>
              Bạn mô tả ý tưởng - AI tạo demo - đội ngũ VIETCODE AI triển khai thành hệ thống bán
              hàng thật.
            </p>
          </div>
          <div className='flex flex-wrap gap-4 text-sm font-medium text-zinc-600'>
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className='hover:text-zinc-950'>
                {item.label}
              </Link>
            ))}
            <Link href='/privacy-policy' className='hover:text-zinc-950'>
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
