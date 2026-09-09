import { Link } from 'react-router-dom';
import { Icon, type IconName } from '../../components/ui/Icon';
import {
  SampleLabel,
  SectionHeading,
  StatusBadge,
} from '../../components/ui/ContentUI';
import { featuredActivities, importantNotices } from '../../data/content';
import { categoryLink, lifeStages, stageLink } from '../../data/navigation';
import {
  ActivityArtwork,
  ConnectionArtwork,
  LifeStageArtwork,
} from './HomeArtwork';

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span aria-hidden="true" />
            서로를 잇는 힘, 의정부장애인부모연대
          </p>
          <h1 tabIndex={-1}>
            서로의 오늘을 잇고,
            <br />
            <span>함께의 내일</span>을 엽니다.
          </h1>
          <p className="hero-description">
            장애인 가족에게 필요한 정보를 연결하고,
            <br className="desktop-break" /> 장애인의 권리를 함께 만들어갑니다.
          </p>
          <div className="hero-buttons">
            <Link className="button button-primary" to="/support">
              나에게 필요한 정보 찾기{' '}
              <span className="button-arrow">
                <Icon name="arrow" />
              </span>
            </Link>
            <Link className="hero-secondary" to="/local">
              의정부 부모연대 안내 <Icon name="diagonal" />
            </Link>
          </div>
        </div>
        <ConnectionArtwork />
      </div>
      <div className="hero-footer container">
        <span>
          <span className="online-dot" aria-hidden="true" />
          정보로 가까워지고, 연대로 단단해지는 우리
        </span>
        <span className="hero-values">
          권리 <span aria-hidden="true">✳</span> 자립{' '}
          <span aria-hidden="true">✳</span> 함께하는 삶
        </span>
      </div>
    </section>
  );
}

const quickServices: { title: string; to: string; icon: IconName }[] = [
  { title: '생애주기별 정보', to: '/support', icon: 'book' },
  { title: '의정부 부모연대', to: '/local', icon: 'pin' },
  { title: '상담·문의', to: '/local#contact', icon: 'message' },
  {
    title: '교육·행사',
    to: categoryLink('news', '행사 일정'),
    icon: 'calendar',
  },
  {
    title: '정책자료',
    to: categoryLink('resources', '정책자료'),
    icon: 'file',
  },
  { title: '후원·회원가입', to: '/participate', icon: 'heart' },
];
export function QuickServices() {
  return (
    <section className="quick-services container" aria-labelledby="quick-title">
      <div className="quick-heading">
        <span className="eyebrow">어디서부터 시작할까요?</span>
        <h2 id="quick-title">
          찾고 있던 정보,
          <br />
          여기서 바로.
        </h2>
      </div>
      <ul>
        {quickServices.map((service) => (
          <li key={service.to}>
            <Link to={service.to}>
              <span className="quick-icon">
                <Icon name={service.icon} />
              </span>
              <span>{service.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export function ImportantNotices() {
  return (
    <section
      className="important-section container"
      aria-labelledby="important-title"
    >
      <div className="important-heading">
        <span className="eyebrow">지금 확인해 보세요</span>
        <h2 id="important-title">
          알려드립니다<span className="accent-dot">.</span>
        </h2>
        <Link className="text-link" to="/news">
          공지 모두 보기 <Icon name="arrow" />
        </Link>
        <span className="notice-decoration" aria-hidden="true">
          <Icon name="calendar" />
        </span>
      </div>
      <ul className="important-list">
        {importantNotices.map((entry) => (
          <li key={entry.id}>
            <div className="notice-status">
              <StatusBadge status={entry.status!} />
              <SampleLabel />
            </div>
            <div>
              <h3>
                <Link to={`/news/${entry.id}`}>{entry.title}</Link>
              </h3>
              <p>
                <span>예시 신청 기간 {entry.applicationPeriod}</span>
                <span>예시 행사일 {entry.eventDate}</span>
              </p>
            </div>
            <Icon name="diagonal" />
          </li>
        ))}
      </ul>
    </section>
  );
}
export function FeaturedActivities() {
  return (
    <section className="section container activities-section">
      <SectionHeading
        eyebrow="권리로 이어지는 발걸음"
        title="함께 만드는 변화"
        to="/activities"
        linkLabel="활동 모두 보기"
      />
      <div className="activity-grid">
        {featuredActivities.map((entry, index) => (
          <article className="activity-card" key={entry.id}>
            <Link
              className="activity-image-link"
              to={`/activities/${entry.id}`}
              aria-label={`${entry.title} 활동 예시 읽기`}
              tabIndex={-1}
            >
              <ActivityArtwork variant={index} />
            </Link>
            <div className="item-labels">
              <span className="category-label">{entry.category}</span>
              <SampleLabel />
            </div>
            <h3>
              <Link to={`/activities/${entry.id}`}>{entry.title}</Link>
            </h3>
            <p>{entry.summary}</p>
            <Link
              className="text-link activity-read"
              to={`/activities/${entry.id}`}
              aria-label={`${entry.title} 활동 읽기`}
            >
              활동 읽기 <Icon name="diagonal" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
const stageDescriptions = [
  '처음 만나는 정보와 도움',
  '배움과 학교생활',
  '학교 이후의 삶 준비',
  '자립과 지역사회 생활',
  '가족 모두의 일상과 쉼',
];
export function LifeStageLinks() {
  return (
    <section className="life-section">
      <div className="container">
        <SectionHeading
          eyebrow="삶의 모든 시기에, 필요한 정보"
          title="모든 오늘에, 필요한 연결"
          to="/support"
          linkLabel="지원정보 모두 보기"
        />
        <div className="life-grid">
          {lifeStages.map((stage, index) => (
            <Link key={stage} to={stageLink(stage)}>
              <span className="life-number">0{index + 1}</span>
              <LifeStageArtwork index={index} />
              <h3>{stage}</h3>
              <p>{stageDescriptions[index]}</p>
              <Icon name="arrow" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
