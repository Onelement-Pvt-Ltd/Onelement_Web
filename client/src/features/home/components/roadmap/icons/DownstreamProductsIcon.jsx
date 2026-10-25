const DownstreamProductsIcon = ({ size = 30, className = "" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    fill="none"
  >
    <path
      d="M18 7S7 21 7 29.5a11 11 0 0 0 18.7 7.9"
      stroke="currentColor"
      strokeWidth="2.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 30.5a5.5 5.5 0 0 0 5.5 5.5"
      stroke="currentColor"
      strokeWidth="2.7"
      strokeLinecap="round"
    />
    <path
      d="M29 16h15v27H29zM32 12h9v4M33 22h7M33 27h7"
      stroke="currentColor"
      strokeWidth="2.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m28 43-4 7m20-7 7 4m-22 5 7 4m9-5-5 5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="23" cy="53" r="5" stroke="currentColor" strokeWidth="2.7" />
    <circle cx="40" cy="57" r="5" stroke="currentColor" strokeWidth="2.7" />
    <circle cx="54" cy="49" r="5" stroke="currentColor" strokeWidth="2.7" />
  </svg>
);

export default DownstreamProductsIcon;
