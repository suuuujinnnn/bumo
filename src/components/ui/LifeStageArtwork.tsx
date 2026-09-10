export function LifeStageArtwork({ index }: { index: number }) {
  return (
    <svg
      className={`stage-art stage-art-${index}`}
      viewBox="0 0 110 90"
      fill="none"
      aria-hidden="true"
    >
      {index === 0 && (
        <>
          <path
            d="M56 75V39"
            stroke="#407455"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path d="M55 48C21 54 15 20 23 15c28-3 36 14 32 33Z" fill="#aac98e" />
          <path d="M56 58c-2-28 23-42 39-31 4 26-14 39-39 31Z" fill="#46775a" />
        </>
      )}
      {index === 1 && (
        <>
          <rect
            x="20"
            y="30"
            width="34"
            height="49"
            rx="10"
            fill="#7a9b7a"
            transform="rotate(-10 20 30)"
          />
          <rect
            x="55"
            y="16"
            width="34"
            height="61"
            rx="10"
            fill="#c7d99c"
            transform="rotate(8 55 16)"
          />
          <path
            d="m36 47 8 1m-9 8 8 1m24-24 8 1m-9 8 8 1"
            stroke="#fbfbeb"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </>
      )}
      {index === 2 && (
        <>
          <path d="m13 75 33-51 22 51H13Z" fill="#c4b8da" />
          <path d="m41 75 33-64 26 64H41Z" fill="#7d719d" />
          <circle cx="24" cy="19" r="9" fill="#e5ceb1" />
        </>
      )}
      {index === 3 && (
        <>
          <path
            d="M22 76V44a33 33 0 0 1 66 0v32H68V44a13 13 0 0 0-26 0v32H22Z"
            fill="#e3a283"
          />
          <path d="M41 76V58a23 23 0 0 1 46 0v18" fill="#f0c99b" />
        </>
      )}
      {index === 4 && (
        <>
          <path
            d="M55 74S12 49 19 28c7-20 30-13 36 0 6-13 29-20 36 0 7 21-36 46-36 46Z"
            fill="#789681"
          />
          <path
            d="m42 47 9 9 20-20"
            stroke="#eef3df"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}
