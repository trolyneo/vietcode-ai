import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import Link from 'next/link';

const offerings = [
  {
    title: 'Demo website bằng AI',
    description:
      'Khách mô tả ý tưởng, hệ thống tạo nhanh landing page, logo và concept ban đầu để chốt hướng.'
  },
  {
    title: 'Triển khai thật sau khi duyệt',
    description:
      'Đội ngũ VIETCODE AI biến concept thành website bán hàng, dashboard và automation chạy được thực tế.'
  },
  {
    title: 'Tối ưu để chốt hợp đồng',
    description:
      'Luồng sản phẩm đi từ demo -> báo giá -> triển khai -> vận hành, không chỉ dừng ở việc làm mẫu cho đẹp.'
  }
];

const packages = [
  {
    name: 'Starter',
    target: 'Cá nhân / cửa hàng nhỏ',
    items: ['Landing page responsive', 'Form liên hệ + hotline', 'Nội dung cơ bản để chạy ads']
  },
  {
    name: 'Business',
    target: 'Doanh nghiệp vừa và nhỏ',
    items: ['Website nhiều trang', 'Logo + brand kit', 'CRM lead + chatbot + tracking']
  },
  {
    name: 'Pro AI',
    target: 'Đội ngũ muốn tự động hóa',
    items: ['AI agent riêng', 'n8n workflow', 'Dashboard KPI và automation marketing']
  }
];

export default function Page() {
  return (
    <main className='from-background via-background to-primary/5 min-h-screen bg-gradient-to-b'>
      <section className='mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:py-24'>
        <div className='max-w-3xl flex-1 space-y-6'>
          <Badge variant='outline' className='gap-2 rounded-full px-4 py-1.5 text-sm'>
            <Icons.sparkles className='size-4' />
            VIETCODE AI - Website chốt hợp đồng bằng AI
          </Badge>
          <div className='space-y-4'>
            <h1 className='max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl'>
              Bạn mô tả ý tưởng, AI dựng demo, đội ngũ VIETCODE AI triển khai thành hệ thống bán
              hàng thật.
            </h1>
            <p className='text-muted-foreground max-w-2xl text-lg leading-8'>
              Đây là nền tảng demo-first cho dịch vụ làm website, landing page, chatbot và
              automation. Mục tiêu không chỉ là làm mẫu, mà là dùng AI để rút ngắn thời gian chốt
              hợp đồng và đẩy nhanh triển khai.
            </p>
          </div>
          <div className='flex flex-col gap-3 sm:flex-row'>
            <Button asChild size='lg' className='rounded-full px-7'>
              <Link href='/dashboard/overview'>Xem dashboard nội bộ</Link>
            </Button>
            <Button asChild size='lg' variant='outline' className='rounded-full px-7'>
              <Link href='/about'>Xem mô hình triển khai</Link>
            </Button>
          </div>
        </div>

        <Card className='border-primary/10 w-full max-w-xl flex-1 shadow-lg'>
          <CardHeader>
            <CardDescription>Quy trình chốt hợp đồng</CardDescription>
            <CardTitle className='text-2xl'>Từ mô tả ý tưởng đến website chạy thật</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            {[
              'Khách nhập mô tả doanh nghiệp và mục tiêu bán hàng.',
              'AI tạo landing page demo, logo, slogan và màu sắc ban đầu.',
              'Khách chọn concept phù hợp, sau đó tư vấn gói triển khai.',
              'Đội ngũ deploy website thật, gắn domain, SEO, CRM và chatbot.'
            ].map((step, index) => (
              <div key={step} className='flex gap-4 rounded-2xl border p-4'>
                <div className='bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold'>
                  0{index + 1}
                </div>
                <p className='text-sm leading-6'>{step}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className='mx-auto grid max-w-7xl gap-5 px-6 pb-8 md:grid-cols-3'>
        {offerings.map((item) => (
          <Card key={item.title} className='border-border/60'>
            <CardHeader>
              <CardTitle className='text-xl'>{item.title}</CardTitle>
              <CardDescription className='text-base leading-7'>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className='mx-auto max-w-7xl px-6 py-10'>
        <div className='mb-6 flex items-end justify-between gap-4'>
          <div>
            <p className='text-primary text-sm font-medium uppercase tracking-[0.22em]'>
              Gói dịch vụ
            </p>
            <h2 className='mt-2 text-3xl font-semibold tracking-tight'>
              Chốt đúng nhu cầu, triển khai đúng bài
            </h2>
          </div>
        </div>
        <div className='grid gap-5 lg:grid-cols-3'>
          {packages.map((item) => (
            <Card key={item.name} className='border-border/60'>
              <CardHeader>
                <CardDescription>{item.target}</CardDescription>
                <CardTitle className='text-2xl'>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-3 text-sm leading-6'>
                  {item.items.map((feature) => (
                    <li key={feature} className='flex gap-3'>
                      <Icons.check className='text-primary mt-0.5 size-4 shrink-0' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
