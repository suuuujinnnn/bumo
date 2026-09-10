import { Link } from "react-router-dom";
import { guides } from "../data/guides";
import { Breadcrumbs } from "../components/ui/ContentUI";
import { Icon } from "../components/ui/Icon";
import "../styles/participate.css";

const messages = [
  ["서로의 이야기가", "우리의 목소리로."],
  ["권리를 위한 활동에", "꾸준한 마음을."],
  ["나의 생각에서", "우리 동네의 변화로."],
  ["당신의 시간과 경험이", "만남의 시작이 됩니다."],
];
const words = ["목소리", "마음", "변화", "만남"];

function ParticipationArt({ index }: { index: number }) {
  return (
    <svg
      className="join-design-art"
      viewBox="0 0 400 320"
      fill="none"
      aria-hidden="true"
    >
      {index === 0 && (
        <>
          <ellipse
            cx="153"
            cy="156"
            rx="94"
            ry="119"
            transform="rotate(-30 153 156)"
            stroke="currentColor"
            strokeWidth="38"
          />
          <ellipse
            cx="251"
            cy="166"
            rx="83"
            ry="108"
            transform="rotate(30 251 166)"
            stroke="var(--art-accent)"
            strokeWidth="38"
          />
          <path
            d="m309 33 8 23 25 2-20 15 6 25-20-15-21 14 8-24-19-16 25-1Z"
            fill="currentColor"
          />
        </>
      )}
      {index === 1 && (
        <>
          <path
            d="M201 271 72 151C-10 65 110-21 201 76c91-97 210-11 129 75Z"
            fill="currentColor"
          />
          <path
            d="M96 237c87-2 142-50 205-123"
            stroke="var(--art-accent)"
            strokeWidth="27"
            strokeLinecap="round"
          />
          <circle cx="322" cy="261" r="17" fill="var(--art-accent)" />
        </>
      )}
      {index === 2 && (
        <>
          <path
            d="M87 271V51"
            stroke="currentColor"
            strokeWidth="19"
            strokeLinecap="round"
          />
          <path
            d="M100 51c75-54 128 55 215 0v135c-87 55-140-54-215 0Z"
            fill="currentColor"
          />
          <path
            d="m163 110 30 29 57-55"
            stroke="var(--art-accent)"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m312 242 20-12m-1 46 23 1"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </>
      )}
      {index === 3 && (
        <>
          <circle cx="200" cy="160" r="64" fill="var(--art-accent)" />
          <g stroke="currentColor" strokeWidth="32" strokeLinecap="round">
            <path d="M200 34v36m0 180v36M74 160h36m180 0h36M111 71l25 25m128 128 25 25M111 249l25-25M264 96l25-25" />
          </g>
        </>
      )}
    </svg>
  );
}

export function ParticipatePage() {
  const guide = guides.participate;
  return (
    <div className="join-design-page join-design-story">
      <div className="container">
        <Breadcrumbs current="함께하기" />
        <header className="join-design-intro">
          <p className="join-design-eyebrow">
            함께하기 <span>서로 다른 방법, 같은 방향</span>
          </p>
          <h1 tabIndex={-1}>
            함께하는 마음이,
            <br />
            일상의 변화로.
          </h1>
          <p>{guide.description}</p>
          <nav className="join-design-jumps" aria-label="참여 방법 바로가기">
            {guide.sections.map((section, index) => (
              <Link
                key={section.id}
                to={`/participate#${section.id}`}
              >
                <span>0{index + 1}</span>
                {section.title
                  .replace("으로 함께하기", "")
                  .replace("에 함께하기", "")}
                <Icon name="arrow" />
              </Link>
            ))}
          </nav>
        </header>
      </div>
      <div className="join-design-sections">
        {guide.sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            tabIndex={-1}
            className={`join-design-section join-design-tone-${index}`}
            aria-labelledby={`join-design-title-${section.id}`}
          >
            <div className="join-design-section-inner">
              <div className="join-design-number" aria-hidden="true">
                0{index + 1}
                <span>{words[index]}</span>
              </div>
              <div className="join-design-copy">
                <p className="join-design-kicker">{section.title}</p>
                <h2 id={`join-design-title-${section.id}`}>
                  {messages[index][0]}{' '}
                  <br />
                  {messages[index][1]}
                </h2>
                <p className="join-design-description">{section.text}</p>
                <p className="join-design-pending">{section.pending}</p>
                <Link
                  className="join-design-link"
                  to={section.link?.to || "/about#contact"}
                >
                  {section.link?.label || "문의 안내 확인하기"}
                  <Icon name="diagonal" />
                </Link>
              </div>
              <div className="join-design-visual">
                <ParticipationArt index={index} />
                <span aria-hidden="true">함께 만드는 {words[index]}</span>
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className="container join-design-ending">
        <p>
          함께하는 방법은 달라도,
          <br />
          <strong>우리가 바라보는 곳은 같습니다.</strong>
        </p>
        <Link className="text-link" to="/activities">
          권리를 위한 활동 살펴보기
          <Icon name="arrow" />
        </Link>
      </div>
    </div>
  );
}
