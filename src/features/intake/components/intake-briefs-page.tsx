import PageContainer from '@/components/layout/page-container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IntakeBriefRecord, intakeBriefs } from '@/features/intake/mock-data';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import Link from 'next/link';

const statusMap: Record<IntakeBriefRecord['status'], { label: string; className: string }> = {
  new: {
    label: 'Mới vào',
    className: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20'
  },
  reviewing: {
    label: 'Đang đọc brief',
    className: 'bg-amber-500/10 text-amber-700 border-amber-500/20'
  },
  'demo-ready': {
    label: 'Sẵn sàng demo',
    className: 'bg-sky-500/10 text-sky-700 border-sky-500/20'
  },
  scheduled: {
    label: 'Đã có lịch hẹn',
    className: 'bg-violet-500/10 text-violet-700 border-violet-500/20'
  }
};

const priorityMap: Record<IntakeBriefRecord['priority'], string> = {
  high: 'Ưu tiên cao',
  medium: 'Ưu tiên vừa',
  normal: 'Ưu tiên thường'
};

const statCards = [
  {
    label: 'Brief mới 24h',
    value: '08',
    detail: '4 brief đang chờ đọc lần đầu'
  },
  {
    label: 'Demo cần dựng',
    value: '03',
    detail: '2 case chờ visual direction, 1 case chờ chatbot flow'
  },
  {
    label: 'Lịch tư vấn đã khóa',
    value: '05',
    detail: 'Các brief đủ rõ để mời founder vào call'
  }
];

export function IntakeBriefsPage() {
  return (
    <PageContainer
      pageTitle='Intake briefs'
      pageDescription='Theo dõi các brief khách vừa gửi, đọc nhanh mức độ sẵn sàng và chuẩn bị bước AI demo tiếp theo.'
      pageHeaderAction={
        <div className='flex gap-2'>
          <Button asChild variant='outline'>
            <Link href='/intake'>
              <Icons.forms className='mr-2 h-4 w-4' />
              Xem form public
            </Link>
          </Button>
          <Button asChild>
            <Link href='/'>
              <Icons.arrowRight className='mr-2 h-4 w-4' />
              Về landing
            </Link>
          </Button>
        </div>
      }
    >
      <div className='grid gap-4 md:grid-cols-3'>
        {statCards.map((card) => (
          <Card key={card.label} className='border-border/60 shadow-sm'>
            <CardHeader className='pb-3'>
              <CardDescription>{card.label}</CardDescription>
              <CardTitle className='text-3xl'>{card.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground text-sm'>{card.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='mt-6 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]'>
        <Card className='border-border/60 shadow-sm'>
          <CardHeader>
            <CardTitle>Pipeline brief gần nhất</CardTitle>
            <CardDescription>
              Dữ liệu demo-safe để nội bộ nhìn rõ thứ tự ưu tiên. Khi nối Supabase thật, view này sẽ
              đọc trực tiếp từ bảng `intake_briefs`.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {intakeBriefs.map((brief) => (
              <article
                key={brief.id}
                className='rounded-xl border border-border/60 bg-background/70 p-4 transition hover:border-emerald-500/30 hover:shadow-sm'
              >
                <div className='flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between'>
                  <div>
                    <div className='flex flex-wrap items-center gap-2'>
                      <h3 className='text-lg font-semibold tracking-tight'>{brief.businessName}</h3>
                      <Badge
                        variant='outline'
                        className={cn('border', statusMap[brief.status].className)}
                      >
                        {statusMap[brief.status].label}
                      </Badge>
                      <Badge variant='secondary'>{priorityMap[brief.priority]}</Badge>
                    </div>
                    <p className='text-muted-foreground mt-2 text-sm'>
                      {brief.reference} · {brief.industry} · {brief.submittedAt}
                    </p>
                  </div>
                  <div className='text-muted-foreground text-sm'>
                    Contact: {brief.contactName} · {brief.phoneOrZalo}
                  </div>
                </div>

                <div className='mt-4 grid gap-4 md:grid-cols-2'>
                  <div>
                    <p className='text-sm font-medium'>Khách hàng mục tiêu</p>
                    <p className='text-muted-foreground mt-1 text-sm leading-6'>
                      {brief.targetAudience}
                    </p>
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Offer hiện tại</p>
                    <p className='text-muted-foreground mt-1 text-sm leading-6'>
                      {brief.currentOffer}
                    </p>
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Mục tiêu</p>
                    <p className='text-muted-foreground mt-1 text-sm leading-6'>{brief.goals}</p>
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Deliverables ưu tiên</p>
                    <div className='mt-2 flex flex-wrap gap-2'>
                      {brief.deliverables.map((item) => (
                        <Badge key={item} variant='outline'>
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='mt-4 rounded-xl bg-muted/50 p-4'>
                  <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                    <div>
                      <p className='text-sm font-medium'>Bước tiếp theo</p>
                      <p className='text-muted-foreground mt-1 text-sm leading-6'>
                        {brief.nextStep}
                      </p>
                    </div>
                    <div className='text-sm'>
                      <span className='text-muted-foreground'>Tone:</span>{' '}
                      {brief.brandTone || 'Chưa chỉ định'}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </CardContent>
        </Card>

        <div className='grid gap-4'>
          <Card className='border-border/60 shadow-sm'>
            <CardHeader>
              <CardTitle>Nội bộ cần làm tiếp</CardTitle>
              <CardDescription>
                Checklist để intake không dừng ở việc chỉ nhận form.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-3 text-sm'>
              <div className='rounded-xl border border-border/60 bg-muted/40 p-4'>
                <p className='font-medium'>1. Chấm độ rõ của brief</p>
                <p className='text-muted-foreground mt-1 leading-6'>
                  Xem khách đã mô tả đủ pain point, offer, audience và timeline hay chưa để quyết
                  định có cần follow-up thêm không.
                </p>
              </div>
              <div className='rounded-xl border border-border/60 bg-muted/40 p-4'>
                <p className='font-medium'>2. Chọn deliverable demo đầu tiên</p>
                <p className='text-muted-foreground mt-1 leading-6'>
                  Không phải brief nào cũng cần làm full landing trước. Có case nên chốt logo
                  direction hoặc chatbot flow trước để tiết kiệm vòng sửa.
                </p>
              </div>
              <div className='rounded-xl border border-border/60 bg-muted/40 p-4'>
                <p className='font-medium'>3. Gắn lịch tư vấn hoặc concept review</p>
                <p className='text-muted-foreground mt-1 leading-6'>
                  Khi brief đủ rõ, chuyển nhanh sang lịch call để founder thấy demo và chốt phạm vi
                  sớm.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className='border-border/60 shadow-sm'>
            <CardHeader>
              <CardTitle>Ghi chú backend</CardTitle>
              <CardDescription>Trạng thái hiện tại của flow submit / đọc dữ liệu.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-3 text-sm text-muted-foreground'>
              <p>
                Form public `/intake` đã gửi qua server action. Nếu Supabase chưa có env hoặc bảng
                `intake_briefs` chưa sẵn, hệ thống sẽ fallback về trạng thái demo-safe.
              </p>
              <p>
                View dashboard này hiện dùng dữ liệu mô phỏng để đội ngũ có bề mặt vận hành ngay.
                Bước kế tiếp là thay mock bằng truy vấn server-side tới Supabase và thêm bộ lọc
                trạng thái.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
