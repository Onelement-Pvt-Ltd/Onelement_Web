export const revealItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerGroup = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.04 }
  }
};

export const viewportOnce = { once: true, amount: 0.16 };
