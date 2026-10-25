const IndustrialCaptureIcon = ({ size = 30, className = "" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 64 64"
    width={size}
    height={size}
    className={className}
    fill="none"
  >
    <path
      d="M8 51V29l13 7v-7l13 7V22h10v29M5 51h44"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 44h4m8 0h4m9 0h4"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="M43 16c-1.5-5.2 3.2-9.6 8.2-7.5A7.5 7.5 0 0 1 60 19.2c2.4 1.1 3.6 3.3 3.1 5.8H47.5"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="49" y="23" fill="currentColor" fontSize="8" fontWeight="700">
      CO2
    </text>
  </svg>
);

export default IndustrialCaptureIcon;
