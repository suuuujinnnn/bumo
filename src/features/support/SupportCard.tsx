import { Link } from 'react-router-dom';
import type { Content } from '../../types/content';
import { getSupportInfo, topicIcons } from '../../data/support';
import { Icon } from '../../components/ui/Icon';
import { SampleLabel } from '../../components/ui/ContentUI';

export function SupportCard({
  entry,
  search,
}: {
  entry: Content;
  search: string;
}) {
  const info = getSupportInfo(entry);
  return (
    <article className="support-card">
      <div className="support-card-top">
        <span className="support-topic-icon">
          <Icon name={topicIcons[info.topic] || 'book'} />
        </span>
        <div className="item-labels">
          <span className="category-label">{entry.lifeStage}</span>
          <SampleLabel />
        </div>
      </div>
      <span className="support-topic">{info.topic}</span>
      <h3>
        <Link to={`/support/${entry.id}${search}`}>{entry.title}</Link>
      </h3>
      <dl className="support-facts">
        <div>
          <dt>이런 분께</dt>
          <dd>{info.audience}</dd>
        </div>
        <div>
          <dt>알아볼 내용</dt>
          <dd>{info.learn}</dd>
        </div>
      </dl>
      <div className="support-card-footer">
        <span>{entry.category}</span>
        <Link
          to={`/support/${entry.id}${search}`}
          aria-label={`${entry.title} 안내 읽기`}
        >
          안내 읽기 <Icon name="arrow" />
        </Link>
      </div>
    </article>
  );
}

export function SupportHelp() {
  return (
    <aside className="support-help" aria-label="정보 찾기 도움말">
      <div className="help-panel">
        <span className="help-icon">
          <Icon name="message" />
        </span>
        <h2>
          어디서부터
          <br />
          시작할지 모르겠다면
        </h2>
        <p>
          궁금한 점을 정리하고,
          <br />
          의정부 부모연대의 문의 안내를 살펴보세요.
        </p>
        <Link className="text-link" to="/about#contact">
          상담·문의 안내 <Icon name="arrow" />
        </Link>
        <span className="help-pending">공식 연락처 추후 입력</span>
      </div>
      <div className="help-panel help-panel-easy">
        <Icon name="book" />
        <h2>쉬운 말로 읽고 싶어요</h2>
        <p>천천히 읽으며 이해할 수 있는 정보를 모았습니다.</p>
        <Link className="text-link" to="/resources?category=쉬운%20정보">
          쉬운 정보 모아보기 <Icon name="arrow" />
        </Link>
      </div>
    </aside>
  );
}
