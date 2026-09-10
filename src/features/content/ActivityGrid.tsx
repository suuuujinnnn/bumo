import { Link } from 'react-router-dom';
import type { Content } from '../../types/content';
import { categories } from '../../data/navigation';
import { SampleLabel } from '../../components/ui/ContentUI';
import { Icon } from '../../components/ui/Icon';

const photoSubjects: Record<string, string> = {
  '정책·입법 활동': '정책에 대한 의견을 나누는 자리',
  권리옹호: '동등한 이웃으로 함께하는 일상',
  연구: '가족의 목소리에 귀 기울이는 시간',
  교육: '함께 배우고 생각을 나누는 시간',
  '캠페인과 연대 활동': '지역사회와 함께하는 연대 활동',
};

export function ActivityMedia({ entry }: { entry: Content }) {
  if (entry.image)
    return (
      <div className="activity-media">
        <img src={entry.image.src} alt={entry.image.alt} loading="lazy" />
      </div>
    );
  const tone = Math.max(0, categories.activities.indexOf(entry.category)) % 3;
  return (
    <div className={`activity-media media-tone-${tone}`}>
      <svg
        className="photo-shapes"
        viewBox="0 0 400 250"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="340" cy="30" r="95" fill="currentColor" opacity=".09" />
        <path
          d="M-30 255 98 96l92 125 71-80 160 140H-30Z"
          fill="currentColor"
          opacity=".07"
        />
        <rect
          x="151"
          y="65"
          width="98"
          height="76"
          rx="17"
          stroke="currentColor"
          opacity=".18"
          strokeWidth="2"
        />
      </svg>
      <Icon name="camera" />
      <span className="photo-pending">활동 사진 · 추후 제공</span>
      <span className="photo-subject">
        {photoSubjects[entry.category] || '함께하는 활동의 모습'}
      </span>
    </div>
  );
}

export function ActivityGrid({
  entries,
  search,
}: {
  entries: Content[];
  search: string;
}) {
  return (
    <ul className="activity-record-grid">
      {entries.map((entry) => (
        <li key={entry.id}>
          <article className="activity-record">
            <Link
              className="record-link"
              to={`/activities/${entry.id}${search}`}
              aria-labelledby={`activity-${entry.id}`}
            >
              <ActivityMedia entry={entry} />
              <div className="record-copy">
                <div className="item-labels">
                  <span className="category-label">{entry.category}</span>
                  <SampleLabel />
                </div>
                <h3 id={`activity-${entry.id}`}>{entry.title}</h3>
                <p>{entry.summary}</p>
                <div className="record-footer">
                  <span>예시 게시일 {entry.date}</span>
                  <span>
                    활동 기록 읽기 <Icon name="arrow" />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
