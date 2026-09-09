import { Link } from 'react-router-dom';
import { Icon } from '../components/ui/Icon';

export function NotFoundPage({
  to = '/',
  label = '홈으로 이동',
}: {
  to?: string;
  label?: string;
}) {
  return (
    <div className="container not-found">
      <p className="eyebrow">페이지 안내</p>
      <h1 tabIndex={-1}>요청한 정보를 찾을 수 없습니다.</h1>
      <p>주소를 확인하거나 아래 링크에서 다시 찾아보세요.</p>
      <Link className="button button-primary" to={to}>
        {label}
        <Icon name="arrow" />
      </Link>
    </div>
  );
}
