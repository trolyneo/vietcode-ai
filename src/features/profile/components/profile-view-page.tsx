import { Icons } from '@/components/icons';
import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProfileViewPage() {
  return (
    <PageContainer
      pageTitle='Hồ sơ'
      pageDescription='Supabase Auth profile scaffold for VIETCODE AI operators'
    >
      <Card className='max-w-2xl'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Icons.profile className='size-5' />
            VIETCODE AI Admin
          </CardTitle>
        </CardHeader>
        <CardContent className='text-muted-foreground space-y-3 text-sm leading-7'>
          <p>Email: admin@vietcode.ai</p>
          <p>
            Replace this placeholder with data from `auth.users` and a public `profiles` table when
            the Supabase project is connected.
          </p>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
