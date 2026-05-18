import { Icons } from '@/components/icons';
import PageContainer from '@/components/layout/page-container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

const metrics = [
  {
    label: 'Lead mới tuần này',
    value: '26',
    trend: '+18%',
    note: 'Tăng nhờ demo website và form mô tả nhu cầu.',
    icon: 'trendingUp' as const
  },
  {
    label: 'Concept đang chờ duyệt',
    value: '08',
    trend: '+3',
    note: 'Cần follow-up để chốt gói Business và Pro AI.',
    icon: 'sparkles' as const
  },
  {
    label: 'Hợp đồng đang triển khai',
    value: '05',
    trend: 'On track',
    note: 'Đội ngũ đang build landing page, CRM và chatbot.',
    icon: 'badgeCheck' as const
  },
  {
    label: 'Tỷ lệ chốt từ demo',
    value: '34%',
    trend: '+6%',
    note: 'Demo-first đang giúp khách ra quyết định nhanh hơn.',
    icon: 'dashboard' as const
  }
];

const priorities = [
  'Hoàn thiện form khách nhập brief doanh nghiệp',
  'Tạo flow AI generate concept landing page',
  'Kết nối báo giá và lịch tư vấn trực tiếp',
  'Chuẩn hóa pipeline deploy và bàn giao khách hàng'
];

export default function OverViewLayout({
  sales,
  pie_stats,
  bar_stats,
  area_stats
}: {
  sales: React.ReactNode;
  pie_stats: React.ReactNode;
  bar_stats: React.ReactNode;
  area_stats: React.ReactNode;
}) {
  return (
    <PageContainer>
      <div className='flex flex-1 flex-col gap-6'>
        <Card className='from-background to-primary/5 overflow-hidden border-none bg-gradient-to-r shadow-none'>
          <CardContent className='flex flex-col gap-6 p-6 lg:flex-row lg:items-end lg:justify-between'>
            <div className='max-w-3xl space-y-4'>
              <Badge variant='outline' className='w-fit gap-2 rounded-full px-4 py-1.5'>
                <Icons.sparkles className='size-4' />
                VIETCODE AI Operating Dashboard
              </Badge>
              <div className='space-y-3'>
                <h1 className='text-3xl font-semibold tracking-tight md:text-4xl'>
                  Tổng quan vận hành cho mô hình demo website bằng AI và triển khai thật.
                </h1>
                <p className='text-muted-foreground max-w-2xl text-base leading-7'>
                  Theo dõi lead, concept demo, pipeline triển khai và hiệu suất chốt hợp đồng trong
                  cùng một nơi để đội ngũ sale, design và dev phối hợp nhanh hơn.
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-3 sm:flex-row'>
              <Button asChild className='rounded-full px-6'>
                <Link href='/'>Xem landing page</Link>
              </Button>
              <Button asChild variant='outline' className='rounded-full px-6'>
                <Link href='/about'>Xem mô hình</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {metrics.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <Card key={item.label} className='@container/card'>
                <CardHeader>
                  <CardDescription>{item.label}</CardDescription>
                  <CardTitle className='text-3xl font-semibold'>{item.value}</CardTitle>
                  <CardAction>
                    <Badge variant='outline' className='gap-1'>
                      <Icon className='size-4' />
                      {item.trend}
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className='text-muted-foreground text-sm leading-6'>
                  {item.note}
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className='grid grid-cols-1 gap-4 xl:grid-cols-[1.1fr_0.9fr]'>
          <Card>
            <CardHeader>
              <CardTitle>Ưu tiên tuần này</CardTitle>
              <CardDescription>
                Những việc cần hoàn thành để đẩy nhanh vòng demo - chốt - triển khai.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-3 md:grid-cols-2'>
                {priorities.map((item, index) => (
                  <div key={item} className='flex gap-3 rounded-2xl border p-4'>
                    <div className='bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold'>
                      0{index + 1}
                    </div>
                    <p className='text-sm leading-6'>{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Nhịp phối hợp đội ngũ</CardTitle>
              <CardDescription>Góc nhìn nhanh cho sale, design và dev.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4 text-sm leading-6'>
              <div className='rounded-2xl border p-4'>
                <p className='font-medium'>Sale</p>
                <p className='text-muted-foreground'>
                  Lấy brief rõ, ép khách chọn concept sớm và gắn lịch tư vấn ngay sau khi demo xong.
                </p>
              </div>
              <div className='rounded-2xl border p-4'>
                <p className='font-medium'>Design / Content</p>
                <p className='text-muted-foreground'>
                  Chuẩn hóa concept landing page, logo, màu sắc và thông điệp cho từng nhóm ngành.
                </p>
              </div>
              <div className='rounded-2xl border p-4'>
                <p className='font-medium'>Dev / Automation</p>
                <p className='text-muted-foreground'>
                  Đóng gói Next.js, Supabase, Vercel và workflow automation thành pipeline triển
                  khai lặp lại được.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <div className='col-span-4'>{bar_stats}</div>
          <div className='col-span-4 md:col-span-3'>{sales}</div>
          <div className='col-span-4'>{area_stats}</div>
          <div className='col-span-4 min-h-0 md:col-span-3'>{pie_stats}</div>
        </div>
      </div>
    </PageContainer>
  );
}
