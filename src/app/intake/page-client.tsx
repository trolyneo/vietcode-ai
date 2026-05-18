'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useMemo, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';

const steps = [
  {
    label: 'Bước 01',
    title: 'Bạn mô tả ý tưởng',
    description:
      'Chia sẻ ngành nghề, sản phẩm, khách hàng mục tiêu, phong cách thương hiệu và mục tiêu kinh doanh cần đạt.'
  },
  {
    label: 'Bước 02',
    title: 'AI tạo demo',
    description:
      'VIETCODE AI chuyển brief thành demo trực quan: cấu trúc landing page, thông điệp, hướng nhận diện và luồng tư vấn.'
  },
  {
    label: 'Bước 03',
    title: 'Đội ngũ triển khai thật',
    description:
      'Khi concept đã đúng, đội ngũ kỹ thuật xây thành website, CRM, chatbot, automation và tài liệu vận hành.'
  }
];

const intakePrompts = [
  'Bạn đang bán sản phẩm hoặc dịch vụ gì?',
  'Khách hàng lý tưởng là ai và họ cần tin điều gì trước khi mua?',
  'Bạn muốn demo đầu tiên thể hiện cảm giác thương hiệu như thế nào?'
];

const timelineOptions = [
  'Cần có demo trong 3 - 5 ngày',
  'Muốn ra phiên bản đầu trong 2 - 3 tuần',
  'Đang chuẩn bị và cần tư vấn lộ trình phù hợp',
  'Dự án lớn hơn, cần roadmap theo từng phase'
];

const initialFormState = {
  businessName: '',
  industry: '',
  targetAudience: '',
  currentOffer: '',
  brandTone: '',
  goals: '',
  deliverables: '',
  desiredTimeline: timelineOptions[1],
  contactName: '',
  email: '',
  phoneOrZalo: ''
};

type FormState = typeof initialFormState;

function StepCard({
  label,
  title,
  description,
  className
}: {
  label: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-emerald-950/10 bg-white/75 p-5 shadow-sm backdrop-blur',
        className
      )}
    >
      <p className='text-primary text-xs font-semibold tracking-[0.22em] uppercase'>{label}</p>
      <h2 className='mt-3 text-xl font-semibold tracking-tight text-zinc-950'>{title}</h2>
      <p className='mt-3 text-sm leading-6 text-zinc-600'>{description}</p>
    </article>
  );
}

function PromptItem({ children }: { children: ReactNode }) {
  return (
    <li className='flex gap-3 text-sm leading-6 text-zinc-700'>
      <span className='mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700'>
        <Icons.check className='size-3.5' />
      </span>
      <span>{children}</span>
    </li>
  );
}

function FieldHint({ children }: { children: ReactNode }) {
  return <p className='mt-2 text-xs leading-5 text-zinc-500'>{children}</p>;
}

function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  hint,
  required = false,
  type = 'text'
}: {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  hint?: string;
  required?: boolean;
  type?: React.ComponentProps<'input'>['type'];
}) {
  return (
    <div>
      <Label htmlFor={id} className='text-sm font-medium text-zinc-900'>
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className='mt-3 h-12 border-emerald-950/10 bg-white/80 text-zinc-950 placeholder:text-zinc-400'
      />
      {hint ? <FieldHint>{hint}</FieldHint> : null}
    </div>
  );
}

function TextAreaField({
  id,
  label,
  value,
  onChange,
  placeholder,
  hint,
  required = false,
  rows = 4
}: {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  hint?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <Label htmlFor={id} className='text-sm font-medium text-zinc-900'>
        {label}
      </Label>
      <Textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className='mt-3 min-h-[136px] border-emerald-950/10 bg-white/80 text-zinc-950 placeholder:text-zinc-400'
      />
      {hint ? <FieldHint>{hint}</FieldHint> : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  hint
}: {
  id: keyof FormState;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  hint?: string;
}) {
  return (
    <div>
      <Label htmlFor={id} className='text-sm font-medium text-zinc-900'>
        {label}
      </Label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className='mt-3 flex h-12 w-full rounded-md border border-emerald-950/10 bg-white/80 px-3 text-sm text-zinc-950 outline-none ring-0 transition focus-visible:border-emerald-500'
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {hint ? <FieldHint>{hint}</FieldHint> : null}
    </div>
  );
}

export function IntakePageClient() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const summary = useMemo(() => {
    return [formState.businessName, formState.industry, formState.goals]
      .filter(Boolean)
      .join(' · ');
  }, [formState.businessName, formState.goals, formState.industry]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormState(initialFormState);
    setIsSubmitted(false);
  };

  return (
    <main className='min-h-screen overflow-hidden bg-[#f7fbf8] text-zinc-950'>
      <header className='border-b border-emerald-950/10 bg-[rgba(247,251,248,0.88)] backdrop-blur-xl'>
        <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8'>
          <Link href='/' className='flex items-center gap-3' aria-label='VIETCODE AI home'>
            <span className='relative inline-flex size-9 items-center justify-center overflow-hidden rounded-xl bg-zinc-950 text-white shadow-[0_16px_38px_rgba(10,20,16,0.22)]'>
              <span className='absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(52,211,153,0.9),transparent_42%)]' />
              <Icons.sparkles className='relative size-4' />
            </span>
            <span className='text-base font-semibold tracking-tight'>VIETCODE AI</span>
          </Link>

          <Button asChild variant='ghost' className='text-zinc-700 hover:text-zinc-950'>
            <Link href='/'>
              <Icons.chevronLeft className='mr-2 size-4' />
              Trang chủ
            </Link>
          </Button>
        </div>
      </header>

      <section className='relative isolate'>
        <div className='absolute inset-0 -z-10 bg-[linear-gradient(118deg,#f7fbf8_0%,#f7fbf8_50%,#e0f8ea_78%,#b8efd2_100%)]' />
        <div className='absolute top-12 right-[-14rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-emerald-300/35 blur-3xl' />
        <div className='absolute bottom-[-8rem] left-1/2 -z-10 h-56 w-[68rem] -translate-x-1/2 rounded-[100%] bg-white/80 blur-2xl' />

        <div className='mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20'>
          <div className='flex flex-col justify-center'>
            <div className='mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-emerald-950 shadow-sm backdrop-blur'>
              <Icons.sparkles className='size-4 text-emerald-600' />
              Intake dành riêng cho ý tưởng mới
            </div>

            <p className='text-primary text-sm font-semibold tracking-[0.22em] uppercase'>
              Bước 1: Bạn mô tả ý tưởng
            </p>
            <h1 className='mt-4 max-w-3xl text-5xl leading-[0.98] font-semibold tracking-tight text-balance sm:text-6xl'>
              Khởi động dự án VIETCODE AI bằng một brief đủ rõ để AI tạo demo đúng hướng.
            </h1>
            <p className='mt-7 max-w-2xl text-lg leading-8 text-zinc-700'>
              Đây là nơi bắt đầu quy trình: bạn mô tả ý tưởng, AI tạo demo để hai bên nhìn thấy
              concept, sau đó đội ngũ VIETCODE AI triển khai thành hệ thống thật có thể vận hành.
            </p>

            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <Button
                asChild
                size='lg'
                className='h-12 rounded-full bg-zinc-950 px-6 text-white shadow-[0_18px_44px_rgba(10,20,16,0.22)] hover:bg-zinc-800'
              >
                <a href='#intake-form'>
                  Đi tới khu vực nhập brief
                  <Icons.arrowRight className='ml-2 size-4' />
                </a>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='h-12 rounded-full border-emerald-950/15 bg-white/70 px-6 text-zinc-900 backdrop-blur hover:bg-white'
              >
                <Link href='/'>Xem quy trình đầy đủ</Link>
              </Button>
            </div>
          </div>

          <div className='grid content-center gap-4'>
            {steps.map((step, index) => (
              <StepCard
                key={step.label}
                {...step}
                className={cn(
                  index === 0 && 'border-emerald-600/25 shadow-[0_24px_70px_rgba(7,36,24,0.12)]'
                )}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 pb-16 sm:px-6 lg:px-8'>
        <div
          id='intake-form'
          className='mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-emerald-950/10 bg-white/75 p-5 shadow-[0_32px_90px_rgba(7,36,24,0.12)] backdrop-blur-xl sm:p-8 lg:grid-cols-[0.9fr_1.1fr]'
        >
          <div className='flex flex-col justify-between rounded-[1.5rem] bg-[#07140f] p-6 text-white sm:p-8'>
            <div>
              <p className='text-sm font-semibold tracking-[0.22em] text-emerald-300 uppercase'>
                Brief đầu tiên
              </p>
              <h2 className='mt-4 text-3xl font-semibold tracking-tight'>
                Càng mô tả đúng nhu cầu, demo AI càng gần với cách anh muốn bán hàng thật.
              </h2>
              <p className='mt-4 text-sm leading-6 text-white/70'>
                VIETCODE AI dùng brief này để hiểu sản phẩm, khách hàng, giọng thương hiệu và thứ
                cần ưu tiên trong phiên demo đầu tiên.
              </p>
            </div>

            <div className='mt-10 rounded-2xl border border-white/10 bg-white/5 p-4'>
              <p className='text-sm font-medium text-white/80'>Những gì đội ngũ sẽ đọc đầu tiên</p>
              <ul className='mt-4 grid gap-3'>
                {intakePrompts.map((prompt) => (
                  <PromptItem key={prompt}>{prompt}</PromptItem>
                ))}
              </ul>
            </div>

            <div className='mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4'>
              <p className='text-sm font-medium text-emerald-100'>Sau khi gửi brief</p>
              <p className='mt-2 text-sm leading-6 text-emerald-50/85'>
                Bước tiếp theo là đội ngũ nội bộ đọc mô tả, dựng concept demo, rồi hẹn anh chốt
                hướng trước khi triển khai website, CRM, chatbot hoặc automation thật.
              </p>
            </div>
          </div>

          <div className='rounded-[1.5rem] border border-emerald-950/10 bg-[#f7fbf8] p-6 sm:p-8'>
            <div className='flex flex-col gap-3 border-b border-emerald-950/10 pb-5 sm:flex-row sm:items-center sm:justify-between'>
              <div>
                <p className='text-sm font-semibold text-emerald-700'>Mô tả ý tưởng doanh nghiệp</p>
                <h3 className='mt-1 text-2xl font-semibold tracking-tight text-zinc-950'>
                  Gửi brief để bắt đầu demo đầu tiên.
                </h3>
              </div>
              <span className='inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700'>
                <Icons.forms className='size-5' />
              </span>
            </div>

            <form className='mt-8 grid gap-6' onSubmit={handleSubmit}>
              <div className='grid gap-6 md:grid-cols-2'>
                <TextField
                  id='businessName'
                  label='Tên doanh nghiệp hoặc dự án'
                  value={formState.businessName}
                  onChange={handleInputChange}
                  required
                  placeholder='Ví dụ: VIETCODE Dental, Neo Travel, Lita Academy'
                />
                <TextField
                  id='industry'
                  label='Ngành nghề'
                  value={formState.industry}
                  onChange={handleInputChange}
                  required
                  placeholder='Ví dụ: nha khoa, giáo dục, bất động sản, F&B'
                />
              </div>

              <TextAreaField
                id='targetAudience'
                label='Khách hàng mục tiêu'
                value={formState.targetAudience}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder='Mô tả nhóm khách anh muốn chốt: họ là ai, vấn đề gì, mức chi trả, điều gì khiến họ tin tưởng.'
                hint='Càng cụ thể về độ tuổi, nhu cầu, vùng địa lý hoặc hành vi mua, demo càng sát hơn.'
              />

              <TextAreaField
                id='currentOffer'
                label='Sản phẩm hoặc offer hiện tại'
                value={formState.currentOffer}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder='Anh đang bán gì, điểm mạnh là gì, đang có ưu đãi hoặc lời hứa bán hàng nào muốn nhấn mạnh?'
              />

              <div className='grid gap-6 md:grid-cols-2'>
                <TextField
                  id='brandTone'
                  label='Giọng thương hiệu mong muốn'
                  value={formState.brandTone}
                  onChange={handleInputChange}
                  placeholder='Ví dụ: premium, tối giản, đáng tin, gần gũi, công nghệ'
                  hint='Đây là tone mà landing page, brand kit và chatbot demo nên thể hiện.'
                />
                <SelectField
                  id='desiredTimeline'
                  label='Timeline mong muốn'
                  value={formState.desiredTimeline}
                  onChange={handleSelectChange}
                  options={timelineOptions}
                  hint='Chọn mốc gần nhất với kỳ vọng hiện tại để đội ngũ ưu tiên nhịp làm việc.'
                />
              </div>

              <TextAreaField
                id='goals'
                label='Mục tiêu kinh doanh cần đạt'
                value={formState.goals}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder='Ví dụ: tăng lead mỗi tuần, chốt lịch tư vấn, ra mắt gói dịch vụ mới, chứng minh concept để gọi vốn hoặc test thị trường.'
              />

              <TextAreaField
                id='deliverables'
                label='Anh muốn VIETCODE AI ưu tiên demo/bàn giao gì trước?'
                value={formState.deliverables}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder='Ví dụ: landing page, brand direction, CRM lead, chatbot tư vấn, automation nhắc việc, dashboard vận hành.'
              />

              <div className='grid gap-6 md:grid-cols-3'>
                <TextField
                  id='contactName'
                  label='Người liên hệ'
                  value={formState.contactName}
                  onChange={handleInputChange}
                  required
                  placeholder='Tên người phụ trách dự án'
                />
                <TextField
                  id='email'
                  label='Email'
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  type='email'
                  placeholder='ten@congty.com'
                />
                <TextField
                  id='phoneOrZalo'
                  label='Số điện thoại hoặc Zalo'
                  value={formState.phoneOrZalo}
                  onChange={handleInputChange}
                  required
                  placeholder='090x xxx xxx'
                />
              </div>

              <div className='rounded-2xl border border-emerald-950/10 bg-white/80 p-5'>
                <p className='text-sm font-medium text-zinc-950'>Snapshot của brief hiện tại</p>
                <p className='mt-2 text-sm leading-6 text-zinc-600'>
                  {summary ||
                    'Điền tên dự án, ngành nghề và mục tiêu để đội ngũ có góc nhìn đầu tiên về bài toán kinh doanh.'}
                </p>
              </div>

              {isSubmitted ? (
                <div className='rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-emerald-950'>
                  <div className='flex items-start gap-3'>
                    <span className='mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700'>
                      <Icons.check className='size-4' />
                    </span>
                    <div>
                      <p className='font-semibold'>Brief demo đã sẵn sàng để xử lý nội bộ.</p>
                      <p className='mt-2 text-sm leading-6 text-emerald-900/80'>
                        Hiện đây là flow demo-safe nên dữ liệu chưa gửi ra backend. Nhưng toàn bộ
                        nội dung đã được gom đủ để bước tiếp theo nối vào Supabase hoặc CRM intake
                        thật.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                <Button
                  type='submit'
                  size='lg'
                  className='h-12 rounded-full bg-zinc-950 px-6 text-white shadow-[0_18px_44px_rgba(10,20,16,0.16)] hover:bg-zinc-800'
                >
                  Gửi brief demo
                  <Icons.arrowRight className='ml-2 size-4' />
                </Button>
                <Button
                  type='button'
                  size='lg'
                  variant='outline'
                  onClick={handleReset}
                  className='h-12 rounded-full border-emerald-950/15 bg-white px-6 text-zinc-900 hover:bg-emerald-50'
                >
                  Làm mới nội dung
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
