const MeaningIcon = ({ size = 18, className = "", strokeWidth = 1.8 }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
  >
    <path
      d="M5.1 8.2A8 8 0 0 0 12 20a8 8 0 0 0 7.7-5.8M8.1 4.1A8 8 0 0 1 12 3c1.2 0 2.4.3 3.4.7"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M13.5 10.5c.5-2.4 2.2-4 4.9-4.4-.1 2.7-1.7 4.5-4.6 4.8M13.6 10.8l3.1-2.4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="4.7" cy="7.2" r="1" fill="currentColor" />
    <circle cx="19.8" cy="13.2" r="1" fill="currentColor" />
  </svg>
);

export default MeaningIcon;
