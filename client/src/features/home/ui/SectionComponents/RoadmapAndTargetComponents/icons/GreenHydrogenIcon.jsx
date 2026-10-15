const GreenHydrogenIcon = ({ size = 30, className = "" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    fill="none"
  >
    <path
      d="M5 53h34M10 53V29h17v24M14 29v-9h10v9M16 16h6M12 36h11M12 42h11"
      stroke="currentColor"
      strokeWidth="2.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29 53V37h8V24h6v14"
      stroke="currentColor"
      strokeWidth="2.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m38 42 6-4m2 4 5 5m-3 5-7 1"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="38" cy="45" r="5" stroke="currentColor" strokeWidth="2.7" />
    <circle cx="54" cy="49" r="5" stroke="currentColor" strokeWidth="2.7" />
    <circle cx="47" cy="35" r="4.5" stroke="currentColor" strokeWidth="2.7" />
  </svg>
);

export default GreenHydrogenIcon;
