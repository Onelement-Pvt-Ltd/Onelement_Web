import { createElement } from "react";
import { motion as Motion } from "framer-motion";
import { revealItem } from "../../../aboutMotion";

const VerticalCard = ({ title, short, description, icon }) => (
  <Motion.article className="vertical-card" variants={revealItem}>
    <div className="vertical-icon">{createElement(icon, { "aria-hidden": true, size: 22 })}</div>
    <span className="vertical-short">{short}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </Motion.article>
);

export default VerticalCard;
