export type ContentArea = 'activities' | 'support' | 'news' | 'resources';
export type LifeStage =
  '영유아기' | '학령기' | '청소년·전환기' | '성인기' | '가족지원';
export type RecruitmentStatus = '모집 예정' | '모집 중' | '마감';

export interface Content {
  id: string;
  area: ContentArea;
  category: string;
  title: string;
  summary: string;
  body: { heading: string; text: string }[];
  sample: true;
  date: string;
  lifeStage?: LifeStage;
  status?: RecruitmentStatus;
  applicationPeriod?: string;
  eventDate?: string;
  format?: string;
  image?: { src: string; alt: string };
}

export interface NavigationItem {
  label: string;
  to: string;
}

export interface Guide {
  title: string;
  eyebrow: string;
  description: string;
  sections: {
    id: string;
    title: string;
    text: string;
    pending?: string;
    link?: { label: string; to: string };
  }[];
}
