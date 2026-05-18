export type IntakeBriefRecord = {
  id: string;
  reference: string;
  businessName: string;
  industry: string;
  targetAudience: string;
  currentOffer: string;
  brandTone: string;
  goals: string;
  deliverables: string[];
  desiredTimeline: string;
  contactName: string;
  email: string;
  phoneOrZalo: string;
  source: string;
  status: 'new' | 'reviewing' | 'demo-ready' | 'scheduled';
  priority: 'high' | 'medium' | 'normal';
  submittedAt: string;
  nextStep: string;
};

export const intakeBriefs: IntakeBriefRecord[] = [
  {
    id: 'brief-neo-dental',
    reference: 'VC-NEO-24A',
    businessName: 'Neo Dental Studio',
    industry: 'Nha khoa thẩm mỹ',
    targetAudience:
      'Nam nữ 24-40 tuổi tại TP.HCM, quan tâm niềng răng trong suốt và phục hình thẩm mỹ, cần niềm tin trước khi đặt lịch.',
    currentOffer:
      'Combo thăm khám và chụp phim miễn phí, upsell niềng trong suốt với lộ trình tài chính chia giai đoạn.',
    brandTone: 'Premium, sạch, đáng tin, hiện đại',
    goals: 'Tăng lead tư vấn hàng tuần và chốt lịch thăm khám từ landing page.',
    deliverables: ['Landing page', 'Brand direction', 'CRM lead'],
    desiredTimeline: 'Muốn ra phiên bản đầu trong 2 - 3 tuần',
    contactName: 'Ngọc Trâm',
    email: 'tram@neodental.vn',
    phoneOrZalo: '0903123456',
    source: 'website-intake',
    status: 'demo-ready',
    priority: 'high',
    submittedAt: '2026-05-18 09:20',
    nextStep: 'Chốt bố cục hero và kịch bản chatbot trước buổi demo chiều mai.'
  },
  {
    id: 'brief-lita-academy',
    reference: 'VC-LITA-19B',
    businessName: 'Lita Academy',
    industry: 'Đào tạo kỹ năng bán hàng',
    targetAudience:
      'Founder SME và team sales 5-20 người, cần khóa học kèm playbook áp dụng nhanh sau đào tạo.',
    currentOffer:
      'Workshop 2 ngày + coaching 30 ngày, muốn nhấn mạnh kết quả đầu ra thay vì mô tả giáo trình.',
    brandTone: 'Tự tin, sắc gọn, thực chiến, giàu năng lượng',
    goals: 'Tạo funnel nhận lead workshop và phân loại người quan tâm theo quy mô đội sales.',
    deliverables: ['Landing page', 'Automation', 'Dashboard vận hành'],
    desiredTimeline: 'Cần có demo trong 3 - 5 ngày',
    contactName: 'Linh Anh',
    email: 'linhanh@lita.vn',
    phoneOrZalo: '0988456789',
    source: 'website-intake',
    status: 'reviewing',
    priority: 'high',
    submittedAt: '2026-05-18 14:05',
    nextStep: 'Xác minh thông điệp offer chính và chuẩn bị hai hướng visual cho founder lựa chọn.'
  },
  {
    id: 'brief-neo-travel',
    reference: 'VC-TRAVEL-11C',
    businessName: 'Neo Travel Concierge',
    industry: 'Dịch vụ du lịch cao cấp',
    targetAudience:
      'Gia đình thu nhập cao và khách doanh nghiệp cần tour riêng, đề cao trải nghiệm được cá nhân hóa.',
    currentOffer:
      'Thiết kế hành trình riêng trọn gói, tư vấn 1-1, hỗ trợ visa và concierge xuyên chuyến đi.',
    brandTone: 'Tinh tế, cao cấp, ấm áp, đáng tin',
    goals: 'Tăng cuộc hẹn tư vấn cho tour bespoke và lọc khách theo mức ngân sách.',
    deliverables: ['Landing page', 'Chatbot tư vấn', 'Form intake nâng cao'],
    desiredTimeline: 'Dự án lớn hơn, cần roadmap theo từng phase',
    contactName: 'Bảo Minh',
    email: 'baominh@neotravel.vn',
    phoneOrZalo: '0912456789',
    source: 'website-intake',
    status: 'scheduled',
    priority: 'medium',
    submittedAt: '2026-05-17 16:40',
    nextStep: 'Đã có lịch discovery call, chờ chốt assets thương hiệu và sample itinerary.'
  }
];
