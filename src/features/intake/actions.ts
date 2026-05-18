'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';

export type IntakeSubmissionState = {
  status: 'idle' | 'success' | 'demo' | 'error';
  title?: string;
  message?: string;
  reference?: string;
};

export const initialIntakeSubmissionState: IntakeSubmissionState = {
  status: 'idle'
};

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function createReference() {
  return `VC-${Date.now().toString(36).toUpperCase()}`;
}

export async function submitIntakeBrief(
  _previousState: IntakeSubmissionState,
  formData: FormData
): Promise<IntakeSubmissionState> {
  const payload = {
    business_name: getString(formData, 'businessName'),
    industry: getString(formData, 'industry'),
    target_audience: getString(formData, 'targetAudience'),
    current_offer: getString(formData, 'currentOffer'),
    brand_tone: getString(formData, 'brandTone'),
    goals: getString(formData, 'goals'),
    deliverables: getString(formData, 'deliverables'),
    desired_timeline: getString(formData, 'desiredTimeline'),
    contact_name: getString(formData, 'contactName'),
    email: getString(formData, 'email'),
    phone_or_zalo: getString(formData, 'phoneOrZalo')
  };

  if (
    !payload.business_name ||
    !payload.industry ||
    !payload.target_audience ||
    !payload.current_offer ||
    !payload.goals ||
    !payload.deliverables ||
    !payload.contact_name ||
    !payload.email ||
    !payload.phone_or_zalo
  ) {
    return {
      status: 'error',
      title: 'Brief chưa đủ thông tin',
      message: 'Anh giúp em điền đủ các trường quan trọng để đội ngũ có thể dựng demo đúng hướng.'
    };
  }

  const reference = createReference();
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return {
      status: 'demo',
      title: 'Đã ghi nhận brief ở chế độ demo-safe',
      message:
        'Môi trường Supabase chưa được cấu hình nên dữ liệu chưa được lưu vào backend. Nhưng flow đã sẵn sàng để nối database thật ngay khi bật env.',
      reference
    };
  }

  const { error } = await supabase.from('intake_briefs').insert({
    ...payload,
    reference_code: reference,
    source: 'website-intake',
    status: 'new'
  });

  if (error) {
    return {
      status: 'demo',
      title: 'Brief đã qua bước intake, backend còn chờ hoàn thiện',
      message:
        'Supabase đang hoạt động nhưng bảng intake hoặc policy chưa sẵn sàng, nên em giữ flow ở chế độ an toàn để không làm gián đoạn trải nghiệm gửi brief.',
      reference
    };
  }

  return {
    status: 'success',
    title: 'Brief đã được lưu thành công',
    message:
      'Đội ngũ giờ có thể dùng mã brief này để đọc lại nhu cầu, dựng concept demo và nối tiếp sang CRM nội bộ.',
    reference
  };
}
