import type { Guide } from '../types/content';

export const guides: Record<'about' | 'local' | 'participate', Guide> = {
  about: {
    title: '정보를 연결하고, 권리를 함께 만듭니다',
    eyebrow: '부모연대 소개',
    description:
      '장애인 당사자와 가족, 이웃이 함께 살아가는 지역사회를 바라봅니다.',
    sections: [
      {
        id: 'values',
        title: '비전과 가치',
        text: '장애인을 동등한 권리의 주체로 바라봅니다. 당사자의 선택과 자립, 지역사회 참여, 가족 모두의 삶을 존중하는 방향을 제안합니다.',
        pending: '소개 문안 예시 · 공식 비전과 가치는 추후 입력',
        link: { label: '권리를 위한 활동 살펴보기', to: '/activities' },
      },
      {
        id: 'history',
        title: '연혁',
        text: '의정부장애인부모연대가 걸어온 길을 확인된 기록을 바탕으로 소개할 예정입니다.',
        pending: '설립일·주요 연혁 추후 입력',
      },
      {
        id: 'organization',
        title: '조직',
        text: '함께하는 사람들과 조직의 역할을 소개할 예정입니다.',
        pending: '공식 조직 구성 추후 입력',
      },
      {
        id: 'local',
        title: '의정부에서 만나는 부모연대',
        text: '지역 안내와 문의 방법은 의정부 부모연대 안내에서 확인할 수 있습니다.',
        link: { label: '의정부 부모연대 안내', to: '/local' },
      },
    ],
  },
  local: {
    title: '가까이에서, 함께하는 의정부',
    eyebrow: '의정부 부모연대 안내',
    description: '우리 지역의 정보와 만남으로 이어지는 길을 안내합니다.',
    sections: [
      {
        id: 'introduction',
        title: '의정부장애인부모연대',
        text: '장애인과 가족이 지역사회에서 필요한 정보를 찾고 함께 참여할 수 있도록 지역 안내를 준비합니다.',
        pending: '지역 소개 문안 예시 · 공식 기관 소개 추후 입력',
        link: { label: '생애주기별 지원정보 찾기', to: '/support' },
      },
      {
        id: 'contact',
        title: '상담·문의 안내',
        text: '어떤 정보가 필요한지, 언제 연락받기 편한지 미리 정리해 보세요. 문의 가능한 내용과 공식 연락 방법을 확인한 뒤 안내할 예정입니다.',
        pending: '전화·이메일·운영시간 추후 입력',
      },
      {
        id: 'directions',
        title: '오시는 길',
        text: '방문 전 확인할 위치와 이동 정보를 준비하고 있습니다. 대중교통, 건물 출입과 이동 편의 정보도 확인 후 안내할 예정입니다.',
        pending: '주소·교통·접근 가능한 출입구 정보 추후 입력',
      },
    ],
  },
  participate: {
    title: '함께하는 마음이, 일상의 변화로',
    eyebrow: '함께하기',
    description:
      '나에게 맞는 방법으로 장애인의 권리와 가족의 삶에 함께해 주세요.',
    sections: [
      {
        id: 'membership',
        title: '회원으로 함께하기',
        text: '지역의 이야기에 귀 기울이고 활동을 함께 알아가는 참여 방식입니다. 가입 대상과 절차는 공식 내용을 확인한 뒤 안내합니다.',
        pending: '회원가입 방법 추후 입력 · 현재 신청을 받지 않습니다',
      },
      {
        id: 'donation',
        title: '후원으로 함께하기',
        text: '권리를 위한 활동에 마음을 보태는 참여 방식입니다. 후원금 사용 안내와 후원 방법은 확인 후 공개합니다.',
        pending: '공식 후원 방법 추후 입력 · 현재 후원금을 받지 않습니다',
      },
      {
        id: 'campaign',
        title: '캠페인에 함께하기',
        text: '일상의 변화에 대한 생각을 나누고 더 많은 이웃과 이야기를 연결해 보세요. 참여 가능한 캠페인은 추후 안내합니다.',
        pending: '캠페인 참여 방법 추후 입력',
        link: {
          label: '캠페인 활동 예시 읽기',
          to: '/activities/together-campaign',
        },
      },
      {
        id: 'volunteer',
        title: '자원활동으로 함께하기',
        text: '각자의 시간과 경험으로 함께할 수 있는 역할을 알아보세요. 활동 내용과 모집 일정은 확인 후 안내합니다.',
        pending: '자원활동 모집 안내 추후 입력',
        link: { label: '새로운 공지 확인하기', to: '/news' },
      },
    ],
  },
};
