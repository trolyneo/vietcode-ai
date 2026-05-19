import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Icons, type Icon } from '@/components/icons';

interface FeatureItem {
  title: string;
  description: string;
  icon: Icon;
}

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: '24h',
    label: 'Từ brief đầu tiên đến demo có thể xem được'
  },
  {
    value: '3 bước',
    label: 'Ý tưởng → demo AI → dashboard vận hành'
  },
  {
    value: '1 nơi',
    label: 'Theo dõi yêu cầu, phản hồi và tiến độ triển khai'
  }
];

const featureItems: FeatureItem[] = [
  {
    title: 'Thu thập brief có cấu trúc',
    description:
      'Khách hàng điền thông tin mục tiêu, nhóm người dùng và tính năng mong muốn để AI hiểu đúng bài toán ngay từ đầu.',
    icon: Icons.forms
  },
  {
    title: 'Tạo demo nhanh bằng AI',
    description:
      'Đội ngũ có thể biến mô tả thành bản xem trước hiện đại để chốt định hướng trước khi bước vào giai đoạn phát triển thật.',
    icon: Icons.sparkles
  },
  {
    title: 'Vận hành qua dashboard',
    description:
      'Khi dự án được triển khai, mọi cập nhật, trạng thái và hạng mục quan trọng tiếp tục được quản lý tập trung trên dashboard.',
    icon: Icons.dashboard
  }
];

const proofPoints: FeatureItem[] = [
  {
    title: 'Rõ ràng cho khách hàng',
    description:
      'Landing page giúp người mới hiểu ngay quy trình làm việc, lợi ích và điểm bắt đầu phù hợp.',
    icon: Icons.circleCheck
  },
  {
    title: 'Đường dẫn đăng nhập luôn sẵn sàng',
    description:
      'Người dùng hiện có thể vào nhanh khu vực đăng nhập để tiếp tục phiên làm việc mà không đi vòng.',
    icon: Icons.login
  },
  {
    title: 'Giữ nguyên luồng nội bộ',
    description:
      'Các route auth, intake và dashboard tiếp tục hoạt động độc lập, không ảnh hưởng đến hệ thống hiện tại.',
    icon: Icons.lock
  }
];

export const metadata: Metadata = {
  title: 'VIETCODE AI | Biến ý tưởng thành demo và hệ thống thật',
  description:
    'VIETCODE AI giúp bạn mô tả ý tưởng, nhận demo nhanh bằng AI và tiếp tục triển khai qua dashboard vận hành tập trung.'
};

export default function HomePage() {
  return (
    <main className='relative overflow-hidden bg-background text-foreground'>
      <div className='absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,_color-mix(in_oklab,var(--primary)_20%,transparent),transparent_55%)]' />
      <div className='absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl' />

      <div className='mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 lg:px-10'>
        <header className='flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 px-5 py-4 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between'>
          <div className='flex items-center gap-3'>
            <div className='flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <Icons.sparkles className='size-5' />
            </div>
            <div>
              <p className='text-lg font-semibold tracking-tight'>VIETCODE AI</p>
              <p className='text-sm text-muted-foreground'>
                AI-first intake cho website, sản phẩm và dashboard nội bộ
              </p>
            </div>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <Button asChild variant='ghost'>
              <Link href='/auth/sign-in'>Đăng nhập</Link>
            </Button>
            <Button asChild>
              <Link href='/intake'>Bắt đầu với intake</Link>
            </Button>
          </div>
        </header>

        <section className='grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24'>
          <div className='space-y-8'>
            <Badge variant='outline' className='rounded-full px-4 py-1 text-sm'>
              Demo website nhanh hơn, triển khai rõ ràng hơn
            </Badge>

            <div className='space-y-5'>
              <h1 className='max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl'>
                Biến brief ban đầu thành demo thuyết phục và hệ thống vận hành thực tế.
              </h1>
              <p className='max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl'>
                VIETCODE AI giúp bạn bắt đầu bằng một form intake rõ ràng, tạo demo định hướng bằng
                AI và tiếp tục cộng tác trên dashboard mà không phá vỡ luồng nội bộ đang có.
              </p>
            </div>

            <div className='flex flex-col gap-3 sm:flex-row'>
              <Button asChild size='lg' className='gap-2'>
                <Link href='/intake'>
                  Tạo demo từ ý tưởng
                  <Icons.arrowRight className='size-4' />
                </Link>
              </Button>
              <Button asChild size='lg' variant='outline'>
                <Link href='/auth/sign-in'>Đăng nhập để tiếp tục dự án</Link>
              </Button>
            </div>

            <div className='flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <Icons.circleCheck className='size-4 text-primary' />
                <span>Trang chủ public, không còn redirect cưỡng bức</span>
              </div>
              <div className='flex items-center gap-2'>
                <Icons.circleCheck className='size-4 text-primary' />
                <span>Đăng nhập tại /auth/sign-in luôn hiển thị rõ ràng</span>
              </div>
            </div>
          </div>

          <Card className='relative overflow-hidden border-border/60 bg-card/85 shadow-2xl shadow-primary/5'>
            <CardContent className='space-y-8 p-7 sm:p-8'>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <p className='text-sm text-muted-foreground'>Lộ trình tiêu chuẩn</p>
                  <h2 className='mt-2 text-2xl font-semibold tracking-tight'>
                    Từ nhu cầu đến sản phẩm chạy thật
                  </h2>
                </div>
                <div className='rounded-2xl bg-primary/10 p-3 text-primary'>
                  <Icons.dashboard className='size-6' />
                </div>
              </div>

              <div className='space-y-4'>
                {featureItems.map((item, index) => {
                  const ItemIcon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className='flex gap-4 rounded-2xl border border-border/60 bg-background/80 p-4'
                    >
                      <div className='flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
                        <ItemIcon className='size-5' />
                      </div>
                      <div className='space-y-1'>
                        <p className='text-sm font-medium text-primary'>Bước {index + 1}</p>
                        <h3 className='font-semibold tracking-tight'>{item.title}</h3>
                        <p className='text-sm leading-6 text-muted-foreground'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className='grid gap-4 border-y border-border/60 py-10 sm:grid-cols-3'>
          {stats.map((item) => (
            <div key={item.label} className='rounded-2xl border border-border/60 bg-card/70 p-6'>
              <p className='text-3xl font-semibold tracking-tight text-primary'>{item.value}</p>
              <p className='mt-2 text-sm leading-6 text-muted-foreground'>{item.label}</p>
            </div>
          ))}
        </section>

        <section className='grid gap-6 py-16 lg:grid-cols-[0.95fr_1.05fr]'>
          <div className='space-y-4'>
            <Badge variant='outline' className='rounded-full px-4 py-1 text-sm'>
              Vì sao nên dùng landing page mới
            </Badge>
            <h2 className='max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl'>
              Một điểm bắt đầu rõ ràng cho cả khách mới lẫn người dùng quay lại.
            </h2>
            <p className='max-w-xl text-base leading-7 text-muted-foreground sm:text-lg'>
              Trang chủ mới ưu tiên giải thích giá trị, dẫn đường đến form intake và vẫn giữ lối vào
              đăng nhập rõ ràng để người dùng đang có tài khoản không bị gián đoạn.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-3'>
            {proofPoints.map((item) => {
              const ItemIcon = item.icon;

              return (
                <Card key={item.title} className='border-border/60 bg-card/75'>
                  <CardContent className='space-y-4 p-6'>
                    <div className='flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
                      <ItemIcon className='size-5' />
                    </div>
                    <div className='space-y-2'>
                      <h3 className='font-semibold tracking-tight'>{item.title}</h3>
                      <p className='text-sm leading-6 text-muted-foreground'>{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className='pb-10'>
          <div className='rounded-[2rem] border border-border/60 bg-card/80 px-6 py-10 shadow-lg shadow-primary/5 sm:px-8 lg:px-10'>
            <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
              <div className='max-w-2xl space-y-3'>
                <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
                  Sẵn sàng biến ý tưởng thành bản demo đầu tiên?
                </h2>
                <p className='text-base leading-7 text-muted-foreground sm:text-lg'>
                  Bắt đầu tại form intake để mô tả nhu cầu, hoặc đăng nhập nếu bạn đã có phiên làm
                  việc và muốn quay lại dashboard.
                </p>
              </div>

              <div className='flex flex-col gap-3 sm:flex-row'>
                <Button asChild size='lg' className='gap-2'>
                  <Link href='/intake'>
                    Đi tới /intake
                    <Icons.arrowRight className='size-4' />
                  </Link>
                </Button>
                <Button asChild size='lg' variant='outline'>
                  <Link href='/auth/sign-in'>Đi tới đăng nhập</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
