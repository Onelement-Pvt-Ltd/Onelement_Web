import { ReactTyped } from "react-typed";

const TypingAnimation = () => {
  return (
    <div>
      <ReactTyped
        strings={["Developer", "Designer", "Freelancer", "Creator"]}
        typeSpeed={120}
        backSpeed={80}
        backDelay={1000}
        loop={true}
        showCursor={true}
        cursorChar="|"
      />
    </div>
  );
};
export default TypingAnimation;
