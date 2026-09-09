import { Link } from 'react-router-dom';
import type { RecruitmentStatus } from '../../types/content';
import { Icon } from './Icon';

export function SampleLabel() {
  return <span className="sample-label">예시</span>;
}
export function StatusBadge({ status }: { status: RecruitmentStatus }) {
  return (
    <span
      className={`status-badge ${status === '모집 중' ? 'is-open' : status === '마감' ? 'is-closed' : 'is-upcoming'}`}
    >
      {status}
    </span>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  to,
  linkLabel,
}: {
  eyebrow?: string;
  title: string;
  to?: string;
  linkLabel?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
      {to && (
        <Link className="text-link" to={to}>
          {linkLabel}
          <Icon name="arrow" />
        </Link>
      )}
    </div>
  );
}
export function Breadcrumbs({
  current,
  parent,
}: {
  current: string;
  parent?: { title: string; to: string };
}) {
  return (
    <nav className="breadcrumbs" aria-label="현재 위치">
      <ol>
        <li>
          <Link to="/">홈</Link>
        </li>
        {parent && (
          <li>
            <Link to={parent.to}>{parent.title}</Link>
          </li>
        )}
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
export function EmptyState({
  title = '선택한 분류의 정보가 아직 없습니다.',
  onReset,
}: {
  title?: string;
  onReset?: () => void;
}) {
  return (
    <div className="empty-state">
      <Icon name="book" />
      <h2>{title}</h2>
      <p>다른 분류를 선택하거나 전체 정보를 살펴보세요.</p>
      {onReset && (
        <button className="button button-secondary" onClick={onReset}>
          전체 정보 보기
        </button>
      )}
    </div>
  );
}
