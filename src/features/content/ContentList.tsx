import { Link } from 'react-router-dom';
import type { Content } from '../../types/content';
import { SampleLabel, StatusBadge } from '../../components/ui/ContentUI';
import { Icon } from '../../components/ui/Icon';

export function ContentMeta({ entry }: { entry: Content }) {
  return (
    <div className="content-meta">
      {entry.lifeStage && <span>{entry.lifeStage}</span>}
      {entry.format && <span>{entry.format}</span>}
      {entry.applicationPeriod ? (
        <>
          <span>예시 신청 기간 {entry.applicationPeriod}</span>
          <span>예시 행사일 {entry.eventDate}</span>
        </>
      ) : (
        <span>예시 게시일 {entry.date}</span>
      )}
    </div>
  );
}
export function ContentItem({
  entry,
  search = '',
}: {
  entry: Content;
  search?: string;
}) {
  return (
    <li className={`content-item content-${entry.area}`}>
      <div className="content-item-copy">
        <div className="item-labels">
          <span className="category-label">{entry.category}</span>
          <SampleLabel />
          {entry.status && <StatusBadge status={entry.status} />}
        </div>
        <h2>
          <Link to={`/${entry.area}/${entry.id}${search}`}>{entry.title}</Link>
        </h2>
        <p className="item-summary">{entry.summary}</p>
        <ContentMeta entry={entry} />
      </div>
      <Icon className="item-arrow" name="arrow" />
    </li>
  );
}
export function ContentList({
  entries,
  search,
}: {
  entries: Content[];
  search?: string;
}) {
  return (
    <ul className="content-list">
      {entries.map((entry) => (
        <ContentItem key={entry.id} entry={entry} search={search} />
      ))}
    </ul>
  );
}
export function RelatedContent({ entries }: { entries: Content[] }) {
  if (!entries.length) return null;
  return (
    <aside className="related-content" aria-labelledby="related-title">
      <h2 id="related-title">함께 읽으면 좋은 정보</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <Link to={`/${entry.area}/${entry.id}`}>
              <span>
                <SampleLabel /> {entry.title}
              </span>
              <Icon name="arrow" />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
