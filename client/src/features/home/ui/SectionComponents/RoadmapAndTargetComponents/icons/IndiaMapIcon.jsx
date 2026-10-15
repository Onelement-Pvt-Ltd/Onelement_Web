import indiaMap from "@/assets/Home/india-map.svg";

const IndiaMapIcon = ({ size = 25, className = "" }) => (
  <img
    aria-hidden="true"
    alt=""
    src={indiaMap}
    width={size}
    height={size}
    className={`object-contain ${className}`}
  />
);

export default IndiaMapIcon;
