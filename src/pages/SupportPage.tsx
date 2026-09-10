import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs, EmptyState } from '../components/ui/ContentUI';
import { PageIntro } from '../components/ui/PageIntro';
import { LifeStageArtwork } from '../components/ui/LifeStageArtwork';
import { Icon } from '../components/ui/Icon';
import { CategoryFilter } from '../features/content/CategoryFilter';
import { SupportCard, SupportHelp } from '../features/support/SupportCard';
import { getContent } from '../data/content';
import { categories, lifeStages } from '../data/navigation';
import { getSupportInfo, supportTopics } from '../data/support';

const stageHints = [
  '처음 만나는 도움',
  '배움과 학교생활',
  '학교 이후의 준비',
  '자립과 지역사회',
  '가족 모두의 일상',
];

export function SupportPage() {
  const [params, setParams] = useSearchParams();
  const stage = params.get('stage') || '';
  const topic = params.get('topic') || '';
  const category = params.get('category') || '';
  const entries = getContent('support').filter(
    (entry) =>
      (!stage || entry.lifeStage === stage) &&
      (!topic || getSupportInfo(entry).topic === topic) &&
      (!category || entry.category === category),
  );
  const select = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next);
  };
  const selected = [stage, topic, category].filter(Boolean);
  return (
    <div className="container interior-page support-page">
      <Breadcrumbs current="지원정보" />
      <PageIntro
        eyebrow="나에게 필요한 연결"
        title="어떤 도움이 필요하세요?"
        description="삶의 시기와 관심 있는 도움을 골라보세요. 필요한 안내부터 차근차근 연결해 드립니다."
        icon="book"
      />
      <section className="support-finder" aria-labelledby="finder-title">
        <div className="finder-heading">
          <div>
            <p className="eyebrow">지원정보 찾기</p>
            <h2 id="finder-title">원하는 조건만 골라도 괜찮아요.</h2>
          </div>
          <span className="finder-hint">
            <Icon name="filter" />
            선택한 조건이 바로 반영됩니다
          </span>
        </div>
        <fieldset className="stage-fieldset">
          <legend>
            <span className="step-number">01</span>어느 시기의 정보를 찾으세요?
          </legend>
          <div className="stage-helper">
            <p>정보가 필요한 생애주기를 한 가지 선택해 주세요.</p>
            <label className="all-stages">
              <input
                type="radio"
                name="life-stage"
                value=""
                checked={!stage}
                onChange={() => select('stage', '')}
              />
              모든 시기
            </label>
          </div>
          <div className="stage-options">
            {lifeStages.map((value, index) => (
              <label
                className={`stage-option ${stage === value ? 'selected' : ''}`}
                key={value}
              >
                <input
                  type="radio"
                  name="life-stage"
                  value={value}
                  checked={stage === value}
                  onChange={() => select('stage', value)}
                />
                <LifeStageArtwork index={index} />
                <span className="stage-option-title">{value}</span>
                <span className="stage-option-hint">{stageHints[index]}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className="support-filter-row">
          <div>
            <h2>
              <span className="step-number">02</span>어떤 도움이 궁금하세요?
            </h2>
            <p>잘 모르겠다면 ‘전체’로 두어도 됩니다.</p>
          </div>
          <CategoryFilter
            label="관심 있는 도움"
            options={supportTopics}
            selected={topic}
            onSelect={(value) => select('topic', value)}
          />
          <CategoryFilter
            label="안내 종류"
            options={categories.support}
            selected={category}
            onSelect={(value) => select('category', value)}
          />
        </div>
        <div className="applied-filters">
          <div>
            <span className="applied-label">선택한 조건</span>
            {selected.length ? (
              <ul>
                {selected.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            ) : (
              <span>전체 안내</span>
            )}
          </div>
          <button
            className="reset-filter"
            onClick={() => setParams({})}
            disabled={!selected.length}
          >
            <Icon name="reset" />
            조건 초기화
          </button>
        </div>
        <div className="finder-bottom">
          <p role="status" aria-live="polite">
            선택한 조건의 안내 <strong>{entries.length}건</strong>
          </p>
          <button
            className="results-jump"
            onClick={() => {
              const title = document.getElementById('support-results-title');
              title?.focus();
              title?.scrollIntoView({ block: 'start' });
            }}
          >
            안내 확인하기 <Icon name="arrow" />
          </button>
        </div>
      </section>
      <div className="support-results-layout">
        <section aria-labelledby="support-results-title">
          <div className="results-heading">
            <div>
              <p className="eyebrow">지금 살펴볼 정보</p>
              <h2 id="support-results-title" tabIndex={-1}>
                나에게 필요한 안내 <span>{entries.length}</span>
              </h2>
            </div>
            <span className="sample-explainer">
              아래 내용은 안내 예시입니다.
            </span>
          </div>
          {entries.length ? (
            <ul className="support-card-grid">
              {entries.map((entry) => (
                <li key={entry.id}>
                  <SupportCard
                    entry={entry}
                    search={params.size ? `?${params}` : ''}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState onReset={() => setParams({})} />
          )}
        </section>
        <SupportHelp />
      </div>
    </div>
  );
}
