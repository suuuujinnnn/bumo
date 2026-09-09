import { Link } from 'react-router-dom';
import { guides } from '../data/guides';
import { Breadcrumbs } from '../components/ui/ContentUI';
import { Icon } from '../components/ui/Icon';

export function GuidePage({ kind }: { kind: keyof typeof guides }) {
  const guide = guides[kind];
  return (
    <div className="container interior-page guide-page">
      <Breadcrumbs current={guide.eyebrow} />
      <header className="page-heading">
        <p className="eyebrow">{guide.eyebrow}</p>
        <h1 tabIndex={-1}>{guide.title}</h1>
        <p>{guide.description}</p>
      </header>
      <div className="guide-layout">
        <nav
          className="section-navigation"
          aria-label={`${guide.eyebrow} 내용 바로가기`}
        >
          {guide.sections.map((section, index) => (
            <Link key={section.id} to={`/${kind}#${section.id}`}>
              <span>0{index + 1}</span>
              {section.title}
              <Icon name="arrow" />
            </Link>
          ))}
        </nav>
        <div className="guide-sections">
          {guide.sections.map((section, index) => (
            <section key={section.id} id={section.id} tabIndex={-1}>
              <span className="section-index">0{index + 1}</span>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
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
