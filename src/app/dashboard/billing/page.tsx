import { Icons } from '@/components/icons';
import PageContainer from '@/components/layout/page-container';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { billingInfoContent } from '@/config/infoconfig';

const plans = [
  {
    name: 'Demo Sprint',
    price: 'Theo brief',
    description: 'AI landing demo, logo direction and brand kit draft for sales validation.'
  },
  {
    name: 'Build Sprint',
    price: 'Theo scope',
    description: 'Website, CRM lead flow, chatbot and deployment on Vercel.'
  },
  {
    name: 'Automation',
    price: 'Retainer',
    description: 'Supabase data layer, dashboard, workflows and optimization after launch.'
  }
];

export default function BillingPage() {
  return (
    <PageContainer
      infoContent={billingInfoContent}
      pageTitle='Billing & Plans'
      pageDescription='Commercial packaging scaffold for VIETCODE AI services'
    >
      <div className='space-y-6'>
        <Alert>
          <Icons.info className='h-4 w-4' />
          <AlertDescription>
            Billing is intentionally decoupled from auth. Use Stripe, Paddle or a Supabase-backed
            subscriptions table when pricing is finalized.
          </AlertDescription>
        </Alert>

        <div className='grid gap-4 md:grid-cols-3'>
          {plans.map((plan) => (
            <Card key={plan.name}>
              <CardHeader>
                <CardDescription>{plan.price}</CardDescription>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className='text-muted-foreground text-sm leading-6'>
                {plan.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
