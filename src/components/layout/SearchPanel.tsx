import type { RefObject } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../ui/Icon';

export function SearchPanel({
  dialogRef,
  triggerRef,
}: {
  dialogRef: RefObject<HTMLDialogElement | null>;
  triggerRef: RefObject<HTMLButtonElement | null>;
}) {
  const close = () => dialogRef.current?.close();
  return (
    <dialog
      ref={dialogRef}
      className="search-dialog"
      aria-labelledby="search-title"
      aria-describedby="search-description"
      onClose={() => triggerRef.current?.focus()}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return;
        const controls =
          event.currentTarget.querySelectorAll<HTMLElement>('button, a[href]');
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
    >
      <div className="dialog-heading">
        <span className="eyebrow">정보 탐색</span>
        <button
          className="icon-button"
          aria-label="검색 안내 닫기"
          onClick={close}
          autoFocus
        >
          <Icon name="close" />
        </button>
      </div>
      <h2 id="search-title">검색 준비 중</h2>
      <p id="search-description">아래 메뉴에서 필요한 정보를 찾아보세요.</p>
      <div className="search-destinations">
        {[
          { label: '지원정보 찾기', to: '/support', icon: 'book' },
          { label: '정책·교육 자료 찾기', to: '/resources', icon: 'file' },
          { label: '부모연대 소개', to: '/about', icon: 'pin' },
        ].map(({ label, to, icon }) => (
          <Link key={to} to={to} onClick={close}>
            <Icon name={icon as 'book' | 'file' | 'pin'} />
            {label}
            <Icon name="arrow" />
          </Link>
        ))}
      </div>
    </dialog>
  );
}
