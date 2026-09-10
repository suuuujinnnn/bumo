import { Link } from "react-router-dom";
import { guides } from "../data/guides";
import { Breadcrumbs } from "../components/ui/ContentUI";
import { PageIntro } from "../components/ui/PageIntro";
import { Icon, type IconName } from "../components/ui/Icon";
import { ParticipatePage } from "./ParticipatePage";
import { Affiliation } from "../components/layout/Affiliation";

const sectionIcons: Record<string, IconName> = {
  values: "sun",
  history: "calendar",
  organization: "people",
  introduction: "people",
  contact: "message",
  directions: "pin",
  membership: "people",
  donation: "heart",
  campaign: "flag",
  volunteer: "sun",
};
export function GuidePage({ kind }: { kind: keyof typeof guides }) {
  if (kind === "participate") return <ParticipatePage />;
  const guide = guides[kind];
  return (
    <div className={`container interior-page guide-page guide-${kind}`}>
      <Breadcrumbs current={guide.eyebrow} />
      <PageIntro {...guide} icon="people" tone="green" />
      <div className="guide-layout">
        {
          <aside className="guide-sidebar">
            <nav
              className="section-navigation"
              aria-label={`${guide.eyebrow} 내용 바로가기`}
            >
              <h2>이 페이지에서</h2>
              {guide.sections.map((section) => (
                <Link key={section.id} to={`/${kind}#${section.id}`}>
                  <Icon name={sectionIcons[section.id] || "book"} />
                  {section.id === "introduction" ? "의정부시지회 소개" : section.title}
                  <Icon name="arrow" />
                </Link>
              ))}
            </nav>
            <div className="guide-side-note">
              <Icon name="message" />
              <p>궁금한 내용이 있으신가요?</p>
              <Link to="/about#contact">문의 안내 확인하기</Link>
            </div>
          </aside>
        }
        <div className="guide-sections">
          {guide.sections.map((section, index) => (
            <section key={section.id} id={section.id} tabIndex={-1}>
              <div className="guide-section-heading">
                <span className={`guide-section-icon guide-icon-${index % 3}`}>
                  <Icon name={sectionIcons[section.id] || "book"} />
                </span>
                <span className="section-index">0{index + 1}</span>
              </div>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              {kind === "about" && section.id === "organization" && <Affiliation />}
              {kind === "about" && section.id === "values" && (
                <ul className="value-labels">
                  <li>권리의 주체</li>
                  <li>자신의 삶을 선택</li>
                  <li>지역사회와 함께</li>
                </ul>
              )}
              {section.id === "contact" && (
                <dl className="contact-facts">
                  <div>
                    <dt>전화</dt>
                    <dd>추후 입력</dd>
                  </div>
                  <div>
                    <dt>이메일</dt>
                    <dd>추후 입력</dd>
                  </div>
                  <div>
                    <dt>운영시간</dt>
                    <dd>추후 입력</dd>
                  </div>
                </dl>
              )}
              {section.id === "directions" && (
                <div className="location-preview">
                  <Icon name="pin" />
                  <span>방문 위치와 이동 정보를 준비하고 있습니다.</span>
                </div>
              )}
              {section.pending && (
                <p className="pending-note">{section.pending}</p>
              )}
              {section.link && (
                <Link className="text-link" to={section.link.to}>
                  {section.link.label}
                  <Icon name="arrow" />
                </Link>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
