import { useSearchParams } from 'react-router-dom';
import { areaInfo, categories, lifeStages } from '../data/navigation';
import { getContent } from '../data/content';
import type { ContentArea } from '../types/content';
import { Breadcrumbs, EmptyState } from '../components/ui/ContentUI';
import { CategoryFilter } from '../features/content/CategoryFilter';
import { ContentList } from '../features/content/ContentList';

export function ListingPage({ area }: { area: ContentArea }) {
  const [params, setParams] = useSearchParams();
  const category = params.get('category') || '';
  const stage = area === 'support' ? params.get('stage') || '' : '';
  const info = areaInfo[area];
  const entries = getContent(area).filter(
    (entry) =>
      (!category || entry.category === category) &&
      (!stage || entry.lifeStage === stage),
  );
  const select = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next);
  };
  return (
    <div className="container interior-page">
      <Breadcrumbs current={info.eyebrow} />
      <header className="page-heading">
        <p className="eyebrow">{info.eyebrow}</p>
        <h1 tabIndex={-1}>{info.title}</h1>
        <p>{info.description}</p>
      </header>
      <div className="filters-panel">
        <CategoryFilter
          label="정보 분류"
          options={categories[area]}
          selected={category}
          onSelect={(value) => select('category', value)}
        />
        {area === 'support' && (
          <CategoryFilter
            label="생애주기"
            options={lifeStages}
            selected={stage}
            onSelect={(value) => select('stage', value)}
          />
        )}
      </div>
      <div className="list-summary">
        <p role="status" aria-live="polite">
          {category || '전체'}
          {stage ? ` · ${stage}` : ''} <strong>{entries.length}건</strong>
        </p>
        <span>게시물과 일정은 예시입니다.</span>
      </div>
      {entries.length ? (
        <ContentList
          entries={entries}
          search={params.size ? `?${params}` : ''}
        />
      ) : (
        <EmptyState onReset={() => setParams({})} />
      )}
    </div>
  );
}
