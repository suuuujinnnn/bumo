import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../ui/Icon';
import { SearchPanel } from './SearchPanel';
import { SiteNavigation } from './SiteNavigation';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searchRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && mobileOpen) {
          setMobileOpen(false);
          menuRef.current?.focus();
        }
      }}
    >
      <div className="utility-bar">
        <div className="container">
          <span>함께 알고, 함께 바꾸는 일상</span>
          <div className="utility-links">
            <Link to="/support">지원정보 찾기</Link>
            <Link to="/local">
              의정부 부모연대 안내 <Icon name="diagonal" />
            </Link>
          </div>
        </div>
      </div>
      <div className="header-main container">
        <Link className="brand" to="/" aria-label="의정부장애인부모연대 홈">
          <span className="brand-location">의정부</span>
          <span className="brand-name">
            장애인부모연대
            <span className="brand-dot" aria-hidden="true">
              .
            </span>
          </span>
        </Link>
        <SiteNavigation
          mobileOpen={mobileOpen}
          closeMobile={() => setMobileOpen(false)}
        />
        <div className="header-actions">
          <Link
            className="button button-primary header-donate"
            to="/participate"
          >
            후원·회원 안내 <Icon name="diagonal" />
          </Link>
          <button
            ref={searchRef}
            className="icon-button search-trigger"
            aria-label="검색"
            onClick={() => dialogRef.current?.showModal()}
          >
            <Icon name="search" />
          </button>
          <button
            ref={menuRef}
            className="icon-button menu-toggle"
            aria-label={mobileOpen ? '전체 메뉴 닫기' : '전체 메뉴 열기'}
            aria-expanded={mobileOpen}
            aria-controls="site-navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <div className="mobile-shortcuts">
        <Link to="/support">지원정보 찾기</Link>
        <Link to="/local">의정부 안내</Link>
        <Link to="/participate">후원·회원 안내</Link>
      </div>
      <SearchPanel dialogRef={dialogRef} triggerRef={searchRef} />
    </header>
  );
}
