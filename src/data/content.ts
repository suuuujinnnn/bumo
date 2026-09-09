import type { Content, ContentArea, LifeStage } from '../types/content';

function item(
  area: ContentArea,
  id: string,
  category: string,
  title: string,
  summary: string,
  extras: Partial<Content> = {},
): Content {
  return {
    id,
    area,
    category,
    title,
    summary,
    sample: true,
    date: '2026.09.01',
    body: [
      { heading: '어떤 내용인가요?', text: summary },
      {
        heading: '함께 살펴볼 내용',
        text: '나에게 필요한 도움은 무엇인지, 어떤 방식으로 참여하고 싶은지 생각해 보세요. 당사자의 선택과 의사를 먼저 듣고, 가족과 지역사회가 함께 이야기할 수 있습니다.',
      },
      {
        heading: '더 알아보고 싶다면',
        text: '궁금한 점을 미리 적어 두면 정보를 확인하는 데 도움이 됩니다. 실제 운영 내용과 문의 방법은 확인 후 안내할 예정입니다.',
      },
    ],
    ...extras,
  };
}

const activities = [
  item(
    'activities',
    'policy-voice',
    '정책·입법 활동',
    '우리의 일상이 정책의 출발점이 되도록',
    '이동, 배움, 일과 주거. 일상에서 만나는 어려움을 정책의 언어로 함께 정리하는 활동 예시입니다.',
  ),
  item(
    'activities',
    'equal-community',
    '권리옹호',
    '누구나 지역사회의 동등한 이웃으로',
    '당사자의 선택을 존중하고, 지역사회에서 함께 살아갈 권리를 이야기하는 활동 예시입니다.',
  ),
  item(
    'activities',
    'family-research',
    '연구',
    '가족의 목소리에서 시작하는 질문',
    '가족이 필요한 정보를 어떤 경로로 찾는지 살펴보는 연구 주제 예시입니다.',
  ),
  item(
    'activities',
    'rights-learning',
    '교육',
    '쉽게 배우고 함께 이야기하는 우리의 권리',
    '낯선 용어를 쉬운 말로 풀고 각자의 경험을 나누는 교육 활동 예시입니다.',
  ),
  item(
    'activities',
    'together-campaign',
    '캠페인과 연대 활동',
    '다름이 거리가 되지 않는 의정부',
    '장애인과 가족, 이웃이 함께 지역사회 참여에 대한 생각을 나누는 캠페인 예시입니다.',
  ),
];

const supportPairs: {
  stage: LifeStage;
  titles: [string, string];
  summaries: [string, string];
  categories: [string, string];
}[] = [
  {
    stage: '영유아기',
    titles: [
      '처음 정보를 찾는 가족을 위한 질문 모음',
      '아이와 가족에게 필요한 도움 정리하기',
    ],
    summaries: [
      '처음 상담을 준비할 때 아이의 일상과 가족의 궁금한 점을 정리하는 안내 예시입니다.',
      '돌봄과 생활에서 필요한 도움을 정리하고 지원서비스를 알아보기 위한 안내 예시입니다.',
    ],
    categories: ['생애주기별 정보', '주요 지원서비스'],
  },
  {
    stage: '학령기',
    titles: ['학교 전환을 앞두고 확인할 질문', '학교생활 상담을 준비하는 방법'],
    summaries: [
      '새로운 학교에서의 이동, 의사소통, 하루 일과를 함께 이야기하기 위한 질문 예시입니다.',
      '학교생활에서 궁금한 점을 정리하고 문의할 곳을 확인하는 안내 예시입니다.',
    ],
    categories: ['생애주기별 정보', '상담·문의 기관'],
  },
  {
    stage: '청소년·전환기',
    titles: [
      '학교 이후의 삶을 함께 그려보기',
      '내가 원하는 일과 활동 알아보기',
    ],
    summaries: [
      '학교를 마친 뒤 어떤 하루를 보내고 싶은지 당사자의 생각을 듣는 안내 예시입니다.',
      '관심 있는 일과 활동, 참여에 필요한 도움을 알아보는 안내 예시입니다.',
    ],
    categories: ['생애주기별 정보', '주요 지원서비스'],
  },
  {
    stage: '성인기',
    titles: [
      '지역사회에서 나의 일상 만들기',
      '자립생활에 필요한 지원 질문하기',
    ],
    summaries: [
      '살고 싶은 곳, 만나고 싶은 사람, 해보고 싶은 활동을 정리하는 안내 예시입니다.',
      '자립생활은 필요한 도움을 받으며 자신의 삶을 선택하는 일입니다. 상담 전에 준비할 질문 예시를 살펴보세요.',
    ],
    categories: ['생애주기별 정보', '상담·문의 기관'],
  },
  {
    stage: '가족지원',
    titles: ['가족 모두의 쉼을 이야기하기', '가족의 마음을 나눌 준비하기'],
    summaries: [
      '가족 구성원 각자에게 필요한 휴식과 도움을 이야기하는 안내 예시입니다.',
      '혼자 정리하기 어려운 고민을 함께 나누기 위한 준비 안내 예시입니다.',
    ],
    categories: ['가족지원', '가족지원'],
  },
];
const support = supportPairs.flatMap((pair, index) =>
  pair.titles.map((title, i) =>
    item(
      'support',
      `life-${index + 1}-${i + 1}`,
      pair.categories[i],
      title,
      pair.summaries[i],
      { lifeStage: pair.stage },
    ),
  ),
);

const news = [
  item(
    'news',
    'family-conversation',
    '공지사항',
    '가족의 이야기를 나누는 열린 대화 참여 안내',
    '서로의 일상과 궁금한 점을 나누는 모임 안내 예시입니다. 실제 참가 신청은 받지 않습니다.',
    {
      status: '모집 중',
      applicationPeriod: '2026.09.01–09.20',
      eventDate: '2026.09.24',
      date: '2026.09.08',
    },
  ),
  item(
    'news',
    'rights-class',
    '행사 일정',
    '일상에서 만나는 권리, 함께 읽는 시간',
    '쉬운 말로 권리를 배우고 생각을 나누는 교육 일정 예시입니다.',
    {
      status: '모집 예정',
      applicationPeriod: '2026.09.21–09.30',
      eventDate: '2026.10.07',
      date: '2026.09.07',
    },
  ),
  item(
    'news',
    'community-meeting',
    '공지사항',
    '지역사회 참여 이야기 모임 안내',
    '지역에서 하고 싶은 활동과 필요한 도움을 이야기하는 모임 안내 예시입니다.',
    {
      status: '마감',
      applicationPeriod: '2026.08.10–08.25',
      eventDate: '2026.08.29',
      date: '2026.08.26',
    },
  ),
  item(
    'news',
    'listening-day',
    '활동 소식',
    '서로의 이야기에 귀 기울이는 시간',
    '당사자와 가족의 이야기를 듣는 활동 소식 예시입니다. 실제 개최 기록이 아닙니다.',
    { date: '2026.09.06' },
  ),
  item(
    'news',
    'neighborhood-walk',
    '활동 소식',
    '함께 살기 좋은 동네를 이야기합니다',
    '지역사회 참여에 필요한 변화를 생각해 보는 활동 소식 예시입니다.',
    { date: '2026.09.04' },
  ),
  item(
    'news',
    'policy-discussion',
    '행사 일정',
    '생활 속 정책 질문을 나누는 자리',
    '정책에 대해 궁금한 점을 나누는 행사 일정 예시입니다.',
    {
      status: '모집 예정',
      applicationPeriod: '2026.10.01–10.10',
      eventDate: '2026.10.15',
      date: '2026.09.03',
    },
  ),
  item(
    'news',
    'community-statement',
    '보도자료',
    '지역사회에서 함께 살아갈 권리를 말합니다',
    '권리와 지역사회 참여를 주제로 한 보도자료 구성 예시입니다. 실제 발표문이 아닙니다.',
    { date: '2026.09.02' },
  ),
  item(
    'news',
    'family-voice',
    '보도자료',
    '가족의 삶을 함께 살피는 지역사회를 위해',
    '가족지원에 관한 메시지를 정리한 보도자료 구성 예시입니다.',
    { date: '2026.09.01' },
  ),
];
const resources = [
  item(
    'resources',
    'policy-questions',
    '정책자료',
    '우리 동네 정책을 읽는 질문들',
    '정책이 누구의 어떤 일상과 연결되는지 살펴보는 질문 모음 예시입니다.',
    { format: '읽기 자료' },
  ),
  item(
    'resources',
    'rights-workbook',
    '교육자료',
    '함께 배우는 권리 이야기',
    '선택과 존중을 일상의 사례로 이야기해 보는 교육자료 예시입니다.',
    { format: '활동지' },
  ),
  item(
    'resources',
    'family-reader',
    '발간물',
    '가족의 일상을 이야기하는 작은 책',
    '가족의 쉼과 관계를 주제로 구성한 발간물 예시입니다.',
    { format: '책자' },
  ),
  item(
    'resources',
    'easy-choice',
    '쉬운 정보',
    '내 생각을 말해도 괜찮아요',
    '나는 내가 좋아하는 것을 말할 수 있어요. 도움이 필요하면 부탁할 수 있어요. 내 생각을 전하는 쉬운 정보 예시입니다.',
    { format: '쉬운 글' },
  ),
  item(
    'resources',
    'community-video',
    '영상자료',
    '내가 바라는 동네, 함께 나누는 이야기',
    '이웃과 함께 살아가는 일상을 다룰 영상의 소개 예시입니다. 영상은 추후 제공됩니다.',
    { format: '영상 소개' },
  ),
];

export const content: Content[] = [
  ...activities,
  ...support,
  ...news,
  ...resources,
];
export const getContent = (area: ContentArea) =>
  content.filter((entry) => entry.area === area);
export const featuredActivities = [activities[0], activities[1], activities[4]];
export const importantNotices = news.slice(0, 3);
