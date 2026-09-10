import { Link } from 'react-router-dom';
import { Icon } from '../ui/Icon';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="footer-brand" to="/">
              의정부장애인부모연대
            </Link>
            <p>
              장애인의 권리, 가족의 삶.
              <br />
              우리의 내일을 함께 만들어갑니다.
            </p>
          </div>
          <nav aria-label="하단 메뉴">
            <Link to="/about">부모연대 소개</Link>
            <Link to="/about#contact">문의 안내</Link>
            <Link to="/about#directions">
              오시는 길 <Icon name="diagonal" />
            </Link>
          </nav>
        </div>
        <div className="footer-details">
          <p>
            주소 · 추후 입력
            <br />
            전화 · 추후 입력 <span className="footer-divider">|</span> 이메일 ·
            추후 입력
          </p>
          <p className="footer-note">
            게시물과 일정은 예시입니다.
            <br />
            공식 기관 정보는 확인 후 안내합니다.
          </p>
        </div>
        <div className="footer-bottom">
          <span>의정부장애인부모연대</span>
          <span>함께 알고, 함께 바꾸는 일상</span>
        </div>
      </div>
    </footer>
  );
}
