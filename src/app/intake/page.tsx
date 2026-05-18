import type { Metadata } from 'next';

import { IntakePageClient } from './page-client';

export const metadata: Metadata = {
  title: 'Intake | VIETCODE AI',
  description:
    'Bước 1 trong quy trình VIETCODE AI: bạn mô tả ý tưởng, AI tạo demo, đội ngũ triển khai thành hệ thống thật.'
};

export default function IntakePage() {
  return <IntakePageClient />;
}
