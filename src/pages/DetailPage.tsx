import { Link, useLocation, useParams } from 'react-router-dom';
import type { ContentArea } from '../types/content';
import { getContent } from '../data/content';
import { areaInfo } from '../data/navigation';
import {
  Breadcrumbs,
  SampleLabel,
  StatusBadge,
} from '../components/ui/ContentUI';
import { Icon } from '../components/ui/Icon';
import { ContentMeta, RelatedContent } from '../features/content/ContentList';
import { NotFoundPage } from './NotFoundPage';

export function DetailPage({ area }: { area: ContentArea }) {
  const { id } = useParams();
  const { search } = useLocation();
  const entries = getContent(area);
  const entry = entries.find((item) => item.id === id);
  const backTo = `/${area}${search}`;
  if (!entry)
    return (
      <NotFoundPage to={backTo} label={`${areaInfo[area].eyebrow} 목록으로`} />
    );
  return (
    <div className="container interior-page detail-page">
      <Breadcrumbs
        current="상세 정보"
        parent={{ title: areaInfo[area].eyebrow, to: backTo }}
      />
      <article>
        <header className="detail-heading">
          <div className="item-labels">
            <span className="category-label">{entry.category}</span>
            <SampleLabel />
            {entry.status && <StatusBadge status={entry.status} />}
          </div>
          <h1 tabIndex={-1}>{entry.title}</h1>
          <p className="detail-summary">{entry.summary}</p>
          <ContentMeta entry={entry} />
        </header>
        <p className="sample-notice">
          <SampleLabel /> 이 글과 일정은 예시입니다. 실제 사업·행사·지원 안내가
          아닙니다.
        </p>
        <div className="article-body">
          {entry.body.map((block) => (
            <section key={block.heading}>
              <h2>{block.heading}</h2>
              <p>{block.text}</p>
            </section>
          ))}
          {area === 'resources' && (
            <section className="attachment-notice">
              <h2>첨부자료 안내</h2>
              <p>
                {entry.format === '영상 소개'
                  ? '영상은 추후 제공됩니다. 현재 재생할 수 있는 영상은 없습니다.'
                  : '첨부파일은 추후 제공됩니다. 현재 내려받을 수 있는 파일은 없습니다.'}
              </p>
            </section>
          )}
          {entry.status && (
            <p className="pending-note">
              참여 방법 추후 입력 · 현재 신청을 받지 않습니다.
            </p>
          )}
          <div className="detail-next">
            <h2>
              {area === 'activities'
                ? '함께하는 방법이 궁금하다면'
                : '도움이 더 필요하다면'}
            </h2>
            <Link
              className="text-link"
              to={
                area === 'activities'
                  ? '/participate#campaign'
                  : '/local#contact'
              }
            >
              {area === 'activities'
                ? '캠페인 참여 안내'
                : '의정부 상담·문의 안내'}
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </article>
      <div className="back-to-list">
        <Link className="button button-secondary" to={backTo}>
          {areaInfo[area].eyebrow} 목록으로 <Icon name="arrow" />
        </Link>
      </div>
      <RelatedContent
        entries={entries.filter((item) => item.id !== id).slice(0, 2)}
      />
    </div>
  );
}
