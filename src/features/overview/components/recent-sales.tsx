import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

const salesData = [
  {
    name: 'Nha khoa Minh Anh',
    email: 'demo landing page + chatbot',
    fallback: 'MA',
    amount: 'Business'
  },
  {
    name: 'Spa Lamer',
    email: 'logo + landing page + booking form',
    fallback: 'SL',
    amount: 'Starter'
  },
  {
    name: 'Trung tâm IELTS Nova',
    email: 'website nhiều trang + CRM lead',
    fallback: 'NV',
    amount: 'Pro AI'
  },
  {
    name: 'Nội thất Gỗ Việt',
    email: 'catalog website + báo giá nhanh',
    fallback: 'GV',
    amount: 'Business'
  },
  {
    name: 'Phòng khám Aster',
    email: 'concept đã duyệt, chờ lịch tư vấn',
    fallback: 'AS',
    amount: 'Follow-up'
  }
];

export function RecentSales() {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Lead đáng chú ý</CardTitle>
        <CardDescription>
          Các khách hàng đang ở gần điểm chốt nhất trong pipeline hiện tại.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {salesData.map((sale) => (
            <div key={sale.name} className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarFallback>{sale.fallback}</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm leading-none font-medium'>{sale.name}</p>
                <p className='text-muted-foreground text-sm'>{sale.email}</p>
              </div>
              <div className='ml-auto font-medium'>{sale.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
