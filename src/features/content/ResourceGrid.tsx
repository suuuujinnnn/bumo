import { Link } from 'react-router-dom';
import type { Content } from '../../types/content';
import { Icon } from '../../components/ui/Icon';
import { SampleLabel } from '../../components/ui/ContentUI';

export function ResourceGrid({
  entries,
  search,
}: {
  entries: Content[];
  search: string;
}) {
  return (
    <ul className="resource-grid">
      {entries.map((entry, index) => (
        <li key={entry.id}>
          <article className="resource-record">
            <div
              className={`resource-cover cover-tone-${index % 3}`}
              aria-hidden="true"
            >
              <span>{entry.category}</span>
              <Icon name={entry.format === '영상 소개' ? 'camera' : 'book'} />
              <span>함께 읽는 권리</span>
            </div>
            <div className="resource-record-copy">
              <div className="item-labels">
                <span className="category-label">{entry.category}</span>
                <SampleLabel />
              </div>
              <h3>
                <Link to={`/resources/${entry.id}${search}`}>
                  {entry.title}
                </Link>
              </h3>
              <p>{entry.summary}</p>
              <span className="format-label">{entry.format}</span>
              <div className="record-footer">
                <span>원문·첨부자료 추후 제공</span>
                <Link
                  to={`/resources/${entry.id}${search}`}
                  aria-label={`${entry.title} 자료 읽기`}
                >
                  <Icon name="arrow" />
                </Link>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
