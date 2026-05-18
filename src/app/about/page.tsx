import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mô hình triển khai'
};

const phases = [
  {
    title: '01. Demo nhanh trước khi chốt',
    description:
      'Khách chỉ cần mô tả ngành nghề, sản phẩm và mục tiêu bán hàng. Hệ thống tạo ra landing page demo, logo, màu sắc và nội dung đề xuất để khách nhìn ra concept ngay.'
  },
  {
    title: '02. Tư vấn gói phù hợp',
    description:
      'Sau khi khách chọn concept, VIETCODE AI chuyển sang bước tư vấn gói Starter, Business hoặc Pro AI dựa trên độ phức tạp và mức độ automation cần có.'
  },
  {
    title: '03. Triển khai thành hệ thống thật',
    description:
      'Đội ngũ triển khai website, dashboard, domain, SEO, CRM, chatbot và workflow thật để khách có thể dùng như một kênh bán hàng hoàn chỉnh.'
  }
];

const commitments = [
  'Demo nhanh trước khi ký hợp đồng',
  'Có quy trình rõ ràng từ concept đến triển khai',
  'Có bàn giao, hỗ trợ vận hành và mở rộng tiếp',
  'Không dừng ở việc dựng mẫu đẹp, mà đi tới hệ thống bán hàng thật'
];

export default function AboutPage() {
  return (
    <div className='from-background via-background to-primary/5 min-h-screen bg-gradient-to-b px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl space-y-8'>
        <div className='space-y-4 text-center'>
          <Badge variant='outline' className='rounded-full px-4 py-1.5'>
            VIETCODE AI delivery model
          </Badge>
          <h1 className='text-foreground text-4xl font-semibold tracking-tight sm:text-5xl'>
            Mô hình website chốt hợp đồng cho VIETCODE AI
          </h1>
          <p className='text-muted-foreground mx-auto max-w-3xl text-lg leading-8'>
            Đây là sản phẩm kết hợp giữa AI demo và đội ngũ triển khai thật. Mục tiêu là giúp doanh
            nghiệp nhìn thấy concept nhanh, chốt quyết định nhanh và đi vào triển khai thực chiến
            ngay sau đó.
          </p>
        </div>

        <div className='grid gap-5 lg:grid-cols-3'>
          {phases.map((phase) => (
            <Card key={phase.title} className='rounded-3xl border shadow-sm'>
              <CardHeader>
                <CardTitle className='text-2xl'>{phase.title}</CardTitle>
                <CardDescription className='text-base leading-7'>
                  {phase.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className='grid gap-5 lg:grid-cols-[1.2fr_0.8fr]'>
          <Card className='rounded-3xl border shadow-sm'>
            <CardHeader>
              <CardTitle className='text-2xl'>Thông điệp cốt lõi</CardTitle>
              <CardDescription className='text-base leading-7'>
                Bạn mô tả ý tưởng, AI tạo demo, đội ngũ VIETCODE AI triển khai thành hệ thống bán
                hàng thật.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4 text-base leading-7'>
              <p>
                Thay vì tư vấn mơ hồ bằng slide hoặc bản mô tả dài dòng, hệ thống sẽ tạo ra concept
                có thể nhìn thấy ngay: landing page, màu sắc thương hiệu, slogan, nội dung và
                chatbot gợi ý.
              </p>
              <p>
                Khi khách đã thấy rõ hướng đi, đội ngũ chuyển sang triển khai thật bằng Next.js,
                Supabase, Vercel và các workflow automation phù hợp với gói dịch vụ đã chọn.
              </p>
            </CardContent>
          </Card>

          <Card className='rounded-3xl border shadow-sm'>
            <CardHeader>
              <CardTitle className='text-2xl'>Cam kết</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-3 text-base leading-7'>
                {commitments.map((item) => (
                  <li key={item} className='flex gap-3'>
                    <span className='bg-primary/10 text-primary mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full text-sm'>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
