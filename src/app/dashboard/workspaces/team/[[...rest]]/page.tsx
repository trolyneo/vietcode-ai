import { Icons } from '@/components/icons';
import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { teamInfoContent } from '@/config/infoconfig';

export default function TeamPage() {
  return (
    <PageContainer
      pageTitle='Team Management'
      pageDescription='Supabase Auth team invite scaffolding for VIETCODE AI'
      infoContent={teamInfoContent}
    >
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Icons.teams className='size-5' />
            Supabase team model
          </CardTitle>
        </CardHeader>
        <CardContent className='text-muted-foreground space-y-3 text-sm leading-7'>
          <p>
            This page now uses Supabase-friendly scaffolding. The intended next step is a members
            table with workspace membership, role, and invite status.
          </p>
          <p>
            Keep authorization enforced with Supabase Row Level Security and server checks before
            enabling customer data in production.
          </p>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
