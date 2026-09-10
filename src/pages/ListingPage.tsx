import { useSearchParams } from 'react-router-dom';
import { areaInfo, categories } from '../data/navigation';
import { getContent } from '../data/content';
import type { ContentArea } from '../types/content';
import { Breadcrumbs, EmptyState } from '../components/ui/ContentUI';
import { PageIntro } from '../components/ui/PageIntro';
import { FilterBar } from '../features/content/FilterBar';
import { ContentList } from '../features/content/ContentList';
import { ActivityGrid } from '../features/content/ActivityGrid';
import { ResourceGrid } from '../features/content/ResourceGrid';

export function ListingPage({
  area,
}: {
  area: Exclude<ContentArea, 'support'>;
}) {
  const [params, setParams] = useSearchParams();
  const category = params.get('category') || '';
  const info = areaInfo[area];
  const entries = getContent(area).filter(
    (entry) => !category || entry.category === category,
  );
  const select = (value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set('category', value);
    else next.delete('category');
    setParams(next);
  };
  const search = params.size ? `?${params}` : '';
  const sectionName = {
    activities: '활동 기록',
    news: '새로운 소식',
    resources: '함께 읽는 자료',
  }[area];
  return (
    <div className={`container interior-page listing-page listing-${area}`}>
      <Breadcrumbs current={info.eyebrow} />
      <PageIntro
        {...info}
        icon={
          area === 'activities' ? 'flag' : area === 'news' ? 'calendar' : 'book'
        }
        tone={
          area === 'activities' ? 'green' : area === 'news' ? 'peach' : 'lilac'
        }
      />
      <FilterBar
        label={
          area === 'activities'
            ? '활동 분야'
            : area === 'news'
              ? '소식 분류'
              : '자료 종류'
        }
        options={categories[area]}
        selected={category}
        onSelect={select}
        onReset={() => setParams({})}
      />
      <section aria-labelledby="listing-results-title">
        <div className="results-heading">
          <h2 id="listing-results-title">{sectionName}</h2>
          <p role="status" aria-live="polite">
            {category || '전체'} <strong>{entries.length}건</strong>
          </p>
        </div>
        <p className="list-disclaimer">
          게시물과 일정은 예시입니다.
          {area === 'activities' ? ' 공식 활동 사진은 추후 제공됩니다.' : ''}
        </p>
        {!entries.length ? (
          <EmptyState onReset={() => setParams({})} />
        ) : area === 'activities' ? (
          <ActivityGrid entries={entries} search={search} />
        ) : area === 'resources' ? (
          <ResourceGrid entries={entries} search={search} />
        ) : (
          <ContentList entries={entries} search={search} />
        )}
      </section>
    </div>
  );
}
