import type { Content } from '../types/content';
import type { IconName } from '../components/ui/Icon';

export const supportTopics = [
  '처음 알아보기',
  '배움·학교생활',
  '자립·지역사회 생활',
  '가족의 쉼·마음',
];
export interface SupportInfo {
  topic: string;
  audience: string;
  learn: string;
  questions: string[];
}
export const topicIcons: Record<string, IconName> = {
  '처음 알아보기': 'sun',
  '배움·학교생활': 'book',
  '자립·지역사회 생활': 'pin',
  '가족의 쉼·마음': 'heart',
};
const information: Record<string, SupportInfo> = {
  'life-1-1': {
    topic: '처음 알아보기',
    audience: '정보를 처음 찾는 영유아기 자녀의 가족',
    learn: '첫 상담 전에 정리하면 좋은 질문',
    questions: [
      '아이의 일상에서 어떤 도움이 필요한가요?',
      '상담할 때 가장 먼저 묻고 싶은 것은 무엇인가요?',
      '설명을 어떤 방식으로 받으면 이해하기 편한가요?',
    ],
  },
  'life-1-2': {
    topic: '처음 알아보기',
    audience: '아이와 가족의 생활 지원을 알아보는 분',
    learn: '돌봄과 일상에서 필요한 도움 정리',
    questions: [
      '하루 중 도움이 가장 필요한 때는 언제인가요?',
      '가족이 함께 나눌 수 있는 일은 무엇인가요?',
      '서비스를 알아볼 때 어떤 정보를 확인하고 싶나요?',
    ],
  },
  'life-2-1': {
    topic: '배움·학교생활',
    audience: '입학·진학을 준비하는 자녀와 가족',
    learn: '학교의 이동·의사소통·하루 일과 확인',
    questions: [
      '새로운 학교에서 어떤 하루를 보내게 될까요?',
      '의견을 전할 때 어떤 도움이 필요한가요?',
      '이동과 학교생활에 필요한 도움을 누구와 이야기할까요?',
    ],
  },
  'life-2-2': {
    topic: '배움·학교생활',
    audience: '학교생활에 대해 상담하고 싶은 가족',
    learn: '궁금한 점을 정리하고 문의 경로 확인',
    questions: [
      '학교생활에서 잘 되고 있는 점은 무엇인가요?',
      '아이가 어려워하거나 바꾸고 싶은 점은 무엇인가요?',
      '상담 후 어떤 내용을 다시 확인하면 좋을까요?',
    ],
  },
  'life-3-1': {
    topic: '배움·학교생활',
    audience: '학교 이후의 삶을 준비하는 당사자와 가족',
    learn: '졸업 이후 하고 싶은 일과 하루 계획',
    questions: [
      '학교를 마친 뒤 해보고 싶은 활동은 무엇인가요?',
      '누구와 시간을 보내고 싶나요?',
      '새로운 활동을 시작할 때 어떤 도움이 필요한가요?',
    ],
  },
  'life-3-2': {
    topic: '자립·지역사회 생활',
    audience: '관심 있는 일과 활동을 찾아보는 청소년',
    learn: '좋아하는 일과 참여에 필요한 도움',
    questions: [
      '내가 좋아하고 관심 있는 일은 무엇인가요?',
      '직접 경험해 보고 싶은 활동이 있나요?',
      '나의 선택을 전할 방법은 무엇인가요?',
    ],
  },
  'life-4-1': {
    topic: '자립·지역사회 생활',
    audience: '지역에서 자신의 일상을 만들어가는 성인',
    learn: '살고 싶은 곳과 함께하고 싶은 활동',
    questions: [
      '어떤 곳에서 살고 싶나요?',
      '동네에서 참여해 보고 싶은 활동은 무엇인가요?',
      '내가 원하는 일상을 위해 어떤 도움이 필요한가요?',
    ],
  },
  'life-4-2': {
    topic: '자립·지역사회 생활',
    audience: '자립생활의 지원 경로를 알아보는 당사자와 가족',
    learn: '나의 선택을 위한 자립생활 상담 준비',
    questions: [
      '내가 직접 선택하고 싶은 것은 무엇인가요?',
      '도움이 필요한 일과 스스로 하고 싶은 일은 무엇인가요?',
      '상담에서 먼저 확인할 내용은 무엇인가요?',
    ],
  },
  'life-5-1': {
    topic: '가족의 쉼·마음',
    audience: '가족 각자의 휴식을 함께 이야기하고 싶은 분',
    learn: '가족 모두에게 필요한 쉼과 도움',
    questions: [
      '가족 구성원마다 어떤 휴식이 필요한가요?',
      '서로 부담을 나누기 위해 할 수 있는 일은 무엇인가요?',
      '추가로 알아보고 싶은 도움은 무엇인가요?',
    ],
  },
  'life-5-2': {
    topic: '가족의 쉼·마음',
    audience: '고민을 나누고 마음을 돌보고 싶은 가족',
    learn: '상담에서 나눌 이야기와 질문 준비',
    questions: [
      '지금 가장 이야기하고 싶은 마음은 무엇인가요?',
      '어떤 방식으로 이야기를 나누면 편안할까요?',
      '상담을 통해 어떤 도움을 받고 싶나요?',
    ],
  },
};
export function getSupportInfo(entry: Content): SupportInfo {
  return (
    information[entry.id] || {
      topic: '처음 알아보기',
      audience: entry.lifeStage || '정보가 필요한 당사자와 가족',
      learn: entry.title,
      questions: ['어떤 도움이 필요한지 먼저 정리해 보세요.'],
    }
  );
}
