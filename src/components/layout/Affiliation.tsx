import { Link } from 'react-router-dom';

export function Affiliation() {
  return (
    <div className="affiliation">
      <p className="eyebrow">전국에서 경기로, 우리 곁의 의정부로</p>
      <ol aria-label="기관 소속 관계">
        <li><a href="https://www.bumo.or.kr/">전국장애인부모연대 <span aria-hidden="true">↗</span></a></li>
        <li><a href="http://ggbumo.or.kr/">경기도장애인부모연대 <span aria-hidden="true">↗</span></a></li>
        <li><Link to="/about">의정부시지회</Link></li>
      </ol>
      <a className="affiliation-cafe" href="https://cafe.daum.net/ujbbumo1004">의정부시지회 다음 카페 방문하기 <span aria-hidden="true">↗</span></a>
    </div>
  );
}
