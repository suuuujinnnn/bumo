import { Link } from "react-router-dom";
import {
  FeaturedActivities,
  Hero,
  ImportantNotices,
  LifeStageLinks,
  QuickServices,
} from "../features/home/HomeSections";
import { getContent } from "../data/content";
import { SampleLabel, SectionHeading } from "../components/ui/ContentUI";
import { Icon } from "../components/ui/Icon";

export function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <QuickServices />
      <ImportantNotices />
      <FeaturedActivities />
      <LifeStageLinks />
      <div className="container updates-grid section">
        <section>
          <SectionHeading
            eyebrow="우리의 소식"
            title="새로운 이야기"
            to="/news"
            linkLabel="소식 모두 보기"
          />
          <ul className="home-news-list">
            {getContent("news")
              .filter((entry) => !entry.status)
              .slice(0, 3)
              .map((entry) => (
                <li key={entry.id}>
                  <div className="item-labels">
                    <span className="category-label">{entry.category}</span>
                    <SampleLabel />
                  </div>
                  <h3>
                    <Link to={`/news/${entry.id}`}>{entry.title}</Link>
                  </h3>
                  <span className="small-meta">예시 게시일 {entry.date}</span>
                </li>
              ))}
          </ul>
        </section>
        <section>
          <SectionHeading
            eyebrow="함께 읽는 자료"
            title="알수록 넓어지는 권리"
            to="/resources"
            linkLabel="자료 모두 보기"
          />
          <ul className="home-resource-list">
            {getContent("resources")
              .filter((entry) =>
                ["정책자료", "교육자료", "쉬운 정보"].includes(entry.category),
              )
              .map((entry) => (
                <li key={entry.id}>
                  <div className="resource-symbol">
                    <Icon name="file" />
                  </div>
                  <div>
                    <div className="item-labels">
                      <span className="category-label">{entry.category}</span>
                      <SampleLabel />
                    </div>
                    <h3>
                      <Link to={`/resources/${entry.id}`}>{entry.title}</Link>
                    </h3>
                    <span className="small-meta">
                      {entry.format} · 예시 게시일 {entry.date}
                    </span>
                  </div>
                  <Icon name="diagonal" />
                </li>
              ))}
          </ul>
        </section>
      </div>
      <section className="local-section container">
        <div className="local-marker" aria-hidden="true">
          <svg viewBox="0 0 180 170" fill="none">
            <path
              d="M15 132c30-25 42 16 75-4s43-35 73-14"
              stroke="#9ab899"
              strokeWidth="28"
              strokeLinecap="round"
            />
            <rect x="33" y="48" width="46" height="65" rx="22" fill="#bfcdad" />
            <rect x="93" y="29" width="52" height="86" rx="26" fill="#77997b" />
            <circle cx="111" cy="51" r="17" fill="#f0c7a2" />
            <path
              d="M90 132s-30-28-30-47a30 30 0 1 1 60 0c0 19-30 47-30 47Z"
              fill="#235540"
            />
            <circle cx="90" cy="85" r="10" fill="#eef4de" />
          </svg>
          <span>의정부</span>
        </div>
        <div className="local-copy">
          <p className="eyebrow">의정부장애인부모연대</p>
          <h2>부모연대 만나기</h2>
          <p>
            우리가 지향하는 가치와 상담·방문 안내를 만나보세요.
            <br />
            공식 연락처와 방문 정보는 확인 후 안내합니다.
          </p>
        </div>
        <div className="meet-links">
          <Link className="button button-secondary" to="/about">
            부모연대 소개 <Icon name="arrow" />
          </Link>
          <div>
            <Link to="/about#contact">상담·문의</Link>
            <Link to="/about#directions">오시는 길</Link>
          </div>
        </div>
      </section>
      <section className="participation-section">
        <div className="container participation-inner">
          <div>
            <p className="eyebrow">혼자보다 함께, 오늘보다 나은 내일</p>
            <h2>
              함께하는 마음이
              <br />
              <span>일상의 변화</span>가 됩니다.
            </h2>
          </div>
          <div className="participation-links">
            <Link to="/participate#membership">
              회원으로 함께하기 <Icon name="diagonal" />
            </Link>
            <Link to="/participate#donation">
              후원으로 마음 보태기 <Icon name="diagonal" />
            </Link>
            <Link to="/participate#campaign">
              캠페인·자원활동 알아보기 <Icon name="diagonal" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
