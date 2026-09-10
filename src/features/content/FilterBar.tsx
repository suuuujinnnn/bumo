import { useId } from 'react';
import { CategoryFilter } from './CategoryFilter';
import { Icon } from '../../components/ui/Icon';

export function FilterBar({
  label,
  options,
  selected,
  onSelect,
  onReset,
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  onReset: () => void;
}) {
  const id = useId();
  return (
    <section className="filter-bar" aria-labelledby={id}>
      <div className="filter-bar-heading">
        <span className="filter-symbol">
          <Icon name="filter" />
        </span>
        <div>
          <h2 id={id}>분류로 모아보기</h2>
          <p>조건을 선택하면 아래 목록에 바로 반영됩니다.</p>
        </div>
      </div>
      <CategoryFilter
        label={label}
        options={options}
        selected={selected}
        onSelect={onSelect}
      />
      <button className="reset-filter" onClick={onReset} disabled={!selected}>
        <Icon name="reset" />
        조건 초기화
      </button>
    </section>
  );
}
