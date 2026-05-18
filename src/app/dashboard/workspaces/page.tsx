import { Icons } from '@/components/icons';
import PageContainer from '@/components/layout/page-container';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { workspacesInfoContent } from '@/config/infoconfig';

const workspaces = [
  {
    name: 'VIETCODE AI',
    role: 'Admin',
    status: 'Active',
    description: 'Sales demo, delivery pipeline, brand kits and internal automation.'
  },
  {
    name: 'Demo Studio',
    role: 'Sales',
    status: 'Sandbox',
    description: 'Future Supabase tenant for testing invite flows and customer previews.'
  }
];

export default function WorkspacesPage() {
  return (
    <PageContainer
      pageTitle='Workspaces'
      pageDescription='Supabase-ready workspace model for teams, tenants and delivery squads'
      infoContent={workspacesInfoContent}
    >
      <div className='grid gap-4 md:grid-cols-2'>
        {workspaces.map((workspace) => (
          <Card key={workspace.name}>
            <CardHeader>
              <div className='flex items-start justify-between gap-3'>
                <div>
                  <CardDescription>{workspace.role}</CardDescription>
                  <CardTitle>{workspace.name}</CardTitle>
                </div>
                <Badge variant='outline'>{workspace.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className='text-muted-foreground flex gap-3 text-sm leading-6'>
              <Icons.workspace className='text-primary mt-1 size-4 shrink-0' />
              <span>{workspace.description}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
