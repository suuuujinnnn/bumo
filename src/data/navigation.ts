import type { ContentArea, LifeStage, NavigationItem } from '../types/content';

export const lifeStages: LifeStage[] = [
  '영유아기',
  '학령기',
  '청소년·전환기',
  '성인기',
  '가족지원',
];
export const categories: Record<ContentArea, string[]> = {
  activities: [
    '정책·입법 활동',
    '권리옹호',
    '연구',
    '교육',
    '캠페인과 연대 활동',
  ],
  support: ['생애주기별 정보', '주요 지원서비스', '가족지원', '상담·문의 기관'],
  news: ['공지사항', '활동 소식', '행사 일정', '보도자료'],
  resources: ['정책자료', '교육자료', '발간물', '쉬운 정보', '영상자료'],
};
export const areaInfo: Record<
  ContentArea,
  { title: string; eyebrow: string; description: string }
> = {
  activities: {
    title: '함께 만드는 변화',
    eyebrow: '우리의 활동',
    description: '권리를 이야기하고, 일상의 변화를 함께 만들어갑니다.',
  },
  support: {
    title: '지금 필요한 정보를 찾아보세요',
    eyebrow: '지원정보',
    description: '삶의 시기와 관심 주제에 맞는 정보부터 차근차근 살펴보세요.',
  },
  news: {
    title: '새로운 소식을 전합니다',
    eyebrow: '소식·공지',
    description: '공지부터 교육과 행사까지, 함께 알아두면 좋은 소식입니다.',
  },
  resources: {
    title: '알수록 넓어지는 권리',
    eyebrow: '자료실',
    description:
      '정책을 이해하는 자료부터 일상에서 읽기 쉬운 정보까지 모았습니다.',
  },
};
export function categoryLink(area: ContentArea, category: string) {
  return `/${area}?category=${encodeURIComponent(category)}`;
}
export function stageLink(stage: LifeStage) {
  return `/support?stage=${encodeURIComponent(stage)}`;
}
export const navigation: NavigationItem[] = [
  { label: '부모연대 소개', to: '/about' },
  { label: '활동', to: '/activities' },
  { label: '지원정보', to: '/support' },
  { label: '소식', to: '/news' },
  { label: '자료', to: '/resources' },
  { label: '함께하기', to: '/participate' },
];
