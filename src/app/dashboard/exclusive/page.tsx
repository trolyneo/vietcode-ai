import { Icons } from '@/components/icons';
import PageContainer from '@/components/layout/page-container';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function ExclusivePage() {
  return (
    <PageContainer
      pageTitle='Premium Workspace'
      pageDescription='Future feature gating with Supabase policies'
    >
      <div className='space-y-6'>
        <Alert>
          <Icons.lock className='h-5 w-5 text-yellow-600' />
          <AlertDescription>
            Plan checks should be implemented with a Supabase subscription table, RLS policies and
            server-side route checks. See{' '}
            <Link className='underline' href='/dashboard/billing'>
              Billing &amp; Plans
            </Link>
            .
          </AlertDescription>
        </Alert>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Icons.badgeCheck className='h-5 w-5 text-green-600' />
              Pro implementation area
            </CardTitle>
            <CardDescription>
              Placeholder for premium automation, private AI agents and advanced delivery reports.
            </CardDescription>
          </CardHeader>
          <CardContent className='text-muted-foreground text-sm leading-7'>
            The page remains usable during the Supabase migration without a provider-specific
            billing component.
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
