import { useId } from 'react';

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
  const id = useId();
  return (
    <div className="select-filter">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={selected}
        onChange={(event) => onSelect(event.target.value)}
      >
        <option value="">전체</option>
        {selected && !options.includes(selected) && (
          <option value={selected}>{selected} (등록되지 않은 분류)</option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
