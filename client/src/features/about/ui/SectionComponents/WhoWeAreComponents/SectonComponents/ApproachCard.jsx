import { motion as Motion } from "framer-motion";
import { revealItem } from "../../../aboutMotion";

const ApproachCard = ({ id, title, description }) => (
  <Motion.article className="approach-card" variants={revealItem}>
    <span>{id}</span>
    <div className="approach-card-copy">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </Motion.article>
);

export default ApproachCard;
