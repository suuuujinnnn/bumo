export function CategoryFilter({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <fieldset className="category-filter">
      <legend>{label}</legend>
      <div className="filter-options">
        {['전체', ...options].map((option) => (
          <button
            type="button"
            key={option}
            aria-pressed={selected === (option === '전체' ? '' : option)}
            onClick={() => onSelect(option === '전체' ? '' : option)}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
