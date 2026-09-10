import { Icon } from '../../components/ui/Icon';

/** Decorative, code-native artwork: an illustration of connection, not an event photo. */
export function ConnectionArtwork() {
  return (
    <div className="connection-art" aria-hidden="true">
      <svg className="connection-sculpture" viewBox="0 0 560 530" fill="none">
        <defs>
          <linearGradient
            id="ring-mint"
            x1="155"
            y1="50"
            x2="330"
            y2="410"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#effbd5" />
            <stop offset=".4" stopColor="#c5e8ac" />
            <stop offset=".8" stopColor="#95bd85" />
            <stop offset="1" stopColor="#cce5b1" />
          </linearGradient>
          <linearGradient
            id="ring-green"
            x1="235"
            y1="160"
            x2="460"
            y2="470"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#539978" />
            <stop offset=".32" stopColor="#2b7056" />
            <stop offset=".75" stopColor="#15503e" />
            <stop offset="1" stopColor="#38775c" />
          </linearGradient>
          <radialGradient id="art-glow">
            <stop stopColor="#f9fce7" />
            <stop offset="1" stopColor="#e8eedf" stopOpacity="0" />
          </radialGradient>
          <filter id="ring-shadow" x="-40%" y="-40%" width="190%" height="200%">
            <feDropShadow
              dx="4"
              dy="17"
              stdDeviation="12"
              floodColor="#36513b"
              floodOpacity=".12"
            />
          </filter>
        </defs>
        <circle cx="285" cy="262" r="248" fill="url(#art-glow)" />
        <circle
          cx="284"
          cy="267"
          r="216"
          stroke="#bdcdb5"
          strokeDasharray="3 9"
        />
        <circle
          cx="284"
          cy="267"
          r="253"
          stroke="#cbd5bd"
          strokeOpacity=".55"
        />
        <ellipse
          cx="283"
          cy="476"
          rx="139"
          ry="13"
          fill="#436642"
          opacity=".07"
        />
        <g transform="rotate(-34 280 265)" filter="url(#ring-shadow)">
          <rect
            x="154"
            y="61"
            width="163"
            height="267"
            rx="81.5"
            stroke="url(#ring-mint)"
            strokeWidth="65"
          />
          <rect
            x="247"
            y="205"
            width="163"
            height="267"
            rx="81.5"
            stroke="url(#ring-green)"
            strokeWidth="65"
          />
          <path
            d="M154 246.5a81.5 81.5 0 0 0 163 0v-104"
            stroke="url(#ring-mint)"
            strokeWidth="65"
          />
          <path
            d="M177 143a59 59 0 0 1 58-60"
            stroke="#f3ffe6"
            strokeOpacity=".6"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M387 384a59 59 0 0 1-58 66"
            stroke="#7ca78b"
            strokeOpacity=".55"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
        <circle cx="443" cy="105" r="28" fill="#f0bda0" />
        <path
          d="M99 343v30m-15-15h30m-25-10 21 21m0-21-21 21"
          stroke="#538263"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="417" cy="420" r="7" fill="#699277" />
      </svg>
      <div className="art-note art-note-information">
        <span>
          <Icon name="book" />
        </span>
        <div>
          필요한 정보는<strong>더 가까이</strong>
        </div>
      </div>
      <div className="art-note art-note-together">
        <span>
          <Icon name="people" />
        </span>
        <div>
          함께하는 마음은<strong>더 단단히</strong>
        </div>
      </div>
      <span className="art-caption">서로 다른 우리가, 하나의 연결로.</span>
    </div>
  );
}

export function ActivityArtwork({ variant }: { variant: number }) {
  const words = [
    ['작은 목소리가', '큰 변화로.'],
    ['같은 동네,', '같은 권리.'],
    ['함께라서', '가능한 내일.'],
  ];
  return (
    <div className={`activity-art activity-art-${variant}`}>
      <svg viewBox="0 0 400 280" aria-hidden="true" fill="none">
        {variant === 0 ? (
          <>
            <circle cx="338" cy="230" r="128" fill="#d5e8b9" />
            <path
              d="M264 65v109a57 57 0 0 0 114 0V65"
              stroke="#91b686"
              strokeWidth="42"
            />
            <circle cx="250" cy="65" r="11" fill="#e8f4d7" />
          </>
        ) : variant === 1 ? (
          <>
            <rect
              x="238"
              y="15"
              width="109"
              height="290"
              rx="55"
              transform="rotate(32 238 15)"
              fill="#c6bce6"
            />
            <rect
              x="280"
              y="52"
              width="109"
              height="290"
              rx="55"
              transform="rotate(-26 280 52)"
              fill="#a293c4"
            />
            <circle cx="304" cy="158" r="34" fill="#eee6ff" />
          </>
        ) : (
          <>
            <circle
              cx="325"
              cy="166"
              r="100"
              stroke="#e8a483"
              strokeWidth="40"
            />
            <circle cx="375" cy="260" r="86" fill="#f5ce90" />
            <path
              d="M252 66v52m-26-26h52"
              stroke="#a3553d"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
      <span className="art-topic">
        {['VOICE & CHANGE', 'LIFE & RIGHTS', 'BETTER TOGETHER'][variant]}
      </span>
      <p>
        {words[variant][0]}
        <br />
        {words[variant][1]}
      </p>
      <span className="art-placeholder-label">활동 사진 · 추후 제공</span>
    </div>
  );
}
