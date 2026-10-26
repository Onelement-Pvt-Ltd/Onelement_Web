const normalizeStrokeWidth = (strokeWidth) => strokeWidth * (64 / 24);

export const IndustrialCaptureIcon = ({ size = 30, className = "", strokeWidth = 1.8 }) => (
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
      strokeWidth={normalizeStrokeWidth(strokeWidth)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 44h4m8 0h4m9 0h4"
      stroke="currentColor"
      strokeWidth={normalizeStrokeWidth(strokeWidth)}
      strokeLinecap="round"
    />
    <path
      d="M43 16c-1.5-5.2 3.2-9.6 8.2-7.5A7.5 7.5 0 0 1 60 19.2c2.4 1.1 3.6 3.3 3.1 5.8H47.5"
      stroke="currentColor"
      strokeWidth={normalizeStrokeWidth(strokeWidth)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="49" y="23" fill="currentColor" fillOpacity=".9" fontSize="8" fontWeight="650">
      CO2
    </text>
  </svg>
);

export const GreenHydrogenIcon = ({ size = 30, className = "", strokeWidth = 1.8 }) => (
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
      strokeWidth={normalizeStrokeWidth(strokeWidth)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29 53V37h8V24h6v14"
      stroke="currentColor"
      strokeWidth={normalizeStrokeWidth(strokeWidth)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m38 42 6-4m2 4 5 5m-3 5-7 1"
      stroke="currentColor"
      strokeWidth={normalizeStrokeWidth(strokeWidth)}
      strokeLinecap="round"
    />
    <circle cx="38" cy="45" r="5" stroke="currentColor" strokeWidth={normalizeStrokeWidth(strokeWidth)} />
    <circle cx="54" cy="49" r="5" stroke="currentColor" strokeWidth={normalizeStrokeWidth(strokeWidth)} />
    <circle cx="47" cy="35" r="4.5" stroke="currentColor" strokeWidth={normalizeStrokeWidth(strokeWidth)} />
  </svg>
);

export const DownstreamProductsIcon = ({ size = 30, className = "", strokeWidth = 1.8 }) => (
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
      strokeWidth={normalizeStrokeWidth(strokeWidth)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 30.5a5.5 5.5 0 0 0 5.5 5.5"
      stroke="currentColor"
      strokeWidth={normalizeStrokeWidth(strokeWidth)}
      strokeLinecap="round"
    />
    <path
      d="M29 16h15v27H29zM32 12h9v4M33 22h7M33 27h7"
      stroke="currentColor"
      strokeWidth={normalizeStrokeWidth(strokeWidth)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m28 43-4 7m20-7 7 4m-22 5 7 4m9-5-5 5"
      stroke="currentColor"
      strokeWidth={normalizeStrokeWidth(strokeWidth)}
      strokeLinecap="round"
    />
    <circle cx="23" cy="53" r="5" stroke="currentColor" strokeWidth={normalizeStrokeWidth(strokeWidth)} />
    <circle cx="40" cy="57" r="5" stroke="currentColor" strokeWidth={normalizeStrokeWidth(strokeWidth)} />
    <circle cx="54" cy="49" r="5" stroke="currentColor" strokeWidth={normalizeStrokeWidth(strokeWidth)} />
  </svg>
);
