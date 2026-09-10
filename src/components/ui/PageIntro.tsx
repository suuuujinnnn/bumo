import { Icon, type IconName } from './Icon';

export function PageIntro({
  eyebrow,
  title,
  description,
  icon = 'book',
  tone = 'green',
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon?: IconName;
  tone?: 'green' | 'lilac' | 'peach';
}) {
  return (
    <header className={`page-intro tone-${tone}`}>
      <div className="page-intro-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1 tabIndex={-1}>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="page-intro-art" aria-hidden="true">
        <span className="intro-orbit" />
        <span className="intro-disc" />
        <span className="intro-symbol">
          <Icon name={icon} />
        </span>
        <span className="intro-spark">✳</span>
      </div>
    </header>
  );
}
