import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { Icon } from '../ui/Icon';

export function SiteNavigation({
  mobileOpen,
  closeMobile,
}: {
  mobileOpen: boolean;
  closeMobile: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();
  return (
    <nav
      id="site-navigation"
      className={`site-navigation ${mobileOpen ? 'mobile-open' : ''}`}
      aria-label="주요 메뉴"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && expanded) {
          event.stopPropagation();
          event.currentTarget
            .querySelector<HTMLButtonElement>('[aria-expanded="true"]')
            ?.focus();
          setExpanded(null);
        }
      }}
    >
      <ul>
        {navigation.map((item, index) => (
          <li key={item.to} className="nav-group">
            <div className="nav-group-heading">
              <Link
                to={item.to}
                aria-current={
                  location.pathname === item.to ||
                  location.pathname.startsWith(`${item.to}/`)
                    ? 'page'
                    : undefined
                }
                onClick={closeMobile}
              >
                {item.label}
              </Link>
              <button
                aria-label={`${item.label} 하위 메뉴`}
                aria-expanded={expanded === item.to}
                aria-controls={`submenu-${index}`}
                onClick={() =>
                  setExpanded(expanded === item.to ? null : item.to)
                }
              >
                <Icon name="chevron" />
              </button>
            </div>
            <ul
              id={`submenu-${index}`}
              className="submenu"
              hidden={expanded !== item.to}
            >
              {item.children.map((child) => (
                <li key={child.to}>
                  <Link
                    to={child.to}
                    onClick={() => {
                      setExpanded(null);
                      closeMobile();
                    }}
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
