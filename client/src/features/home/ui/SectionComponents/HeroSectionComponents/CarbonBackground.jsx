import { motion, useReducedMotion } from "framer-motion";

const CarbonBackground = () => {
  const reduceMotion = useReducedMotion();
  const hexRadius = 42;
  const cols = 11;
  const rows = 7;

  const hexagons = [];
  const atoms = [];

  const hexPoints = (cx, cy, r) => {
    const pts = [];

    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 180) * (60 * i - 30);

      pts.push([
        cx + r * Math.cos(angle),
        cy + r * Math.sin(angle),
      ]);
    }

    return pts;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * hexRadius * 1.72 + (row % 2) * hexRadius * 0.86 + 70;
      const y = row * hexRadius * 1.48 + 80;

      const points = hexPoints(x, y, hexRadius);

      hexagons.push(points);

      points.forEach((p) => atoms.push(p));
    }
  }

  return (
    <>
      {/* Glow */}

      <div className="absolute left-[-250px] top-[-150px] h-[500px] w-[500px] rounded-full bg-green-400/10 blur-[180px]" />

      <div className="absolute right-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[160px]" />

      {/* Background */}

      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-full opacity-30 lg:w-3/5"
        animate={reduceMotion ? undefined : {
          rotate: [-2, 2, -2],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          className="h-full w-full"
          viewBox="-300 0 1200 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="bond"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#ffffff"
                stopOpacity=".75"
              />

              <stop
                offset="100%"
                stopColor="#00ffd5"
                stopOpacity=".18"
              />
            </linearGradient>

            <radialGradient id="atom">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#7effe5" />
            </radialGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          <g
            stroke="url(#bond)"
            strokeWidth="1.1"
            fill="none"
          >
            {hexagons.map((hex, i) => (
              <polygon
                key={i}
                points={hex
                  .map((p) => `${p[0]},${p[1]}`)
                  .join(" ")}
              />
            ))}
          </g>

          <g
            fill="url(#atom)"
            filter="url(#glow)"
          >
            {atoms.map(([x, y], i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="3.5"
              >
                <animate
                  attributeName="r"
                  values="3.5;5;3.5"
                  dur={`${4 + (i % 5)}s`}
                  repeatCount="indefinite"
                />

                <animate
                  attributeName="opacity"
                  values=".5;1;.5"
                  dur={`${5 + (i % 3)}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>

          {/* Floating particles */}

          {[...Array(70)].map((_, i) => (
            <circle
              key={i}
              cx={(i * 83) % 1200}
              cy={(i * 137) % 700}
              r={(i % 3) + 1}
              fill="#7effe5"
              opacity=".25"
            />
          ))}

          {/* CO2 */}

          <g opacity=".45">

            <circle cx="1050" cy="150" r="6" fill="white"/>
            <circle cx="1073" cy="150" r="3" fill="#7effe5"/>
            <circle cx="1096" cy="150" r="3" fill="#7effe5"/>

            <line
              x1="1056"
              y1="150"
              x2="1070"
              y2="150"
              stroke="#7effe5"
            />

            <line
              x1="1076"
              y1="150"
              x2="1090"
              y2="150"
              stroke="#7effe5"
            />

          </g>
        </svg>
      </motion.div>
    </>
  );
};

export default CarbonBackground;
