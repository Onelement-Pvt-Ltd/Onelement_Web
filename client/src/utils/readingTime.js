export const calculateReadingTime = (content) => {
  const words = content
    .map(section => `${section.heading} ${section.body}`)
    .join(" ")
    .split(/\s+/).length;

  return Math.ceil(words / 200);
};