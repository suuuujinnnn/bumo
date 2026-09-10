import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/navigation';

export function SiteNavigation({
  mobileOpen,
  closeMobile,
}: {
  mobileOpen: boolean;
  closeMobile: () => void;
}) {
  const { pathname } = useLocation();
  return (
    <nav
      id="site-navigation"
      className={`site-navigation ${mobileOpen ? 'mobile-open' : ''}`}
      aria-label="주요 메뉴"
    >
      <ul>
        {navigation.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              aria-current={
                pathname === item.to || pathname.startsWith(`${item.to}/`)
                  ? 'page'
                  : undefined
              }
              onClick={closeMobile}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
