import { useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibleHandler = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 750) {
      setVisible(true);
    } else if (scrolled <= 750) {
      setVisible(false);
    }
  };

  const onClickHandler = () => {
    window.scroll({ top: "0", behavior: "auto" });
  };

  window.addEventListener("scroll", toggleVisibleHandler);

  return (
    <button
      id="scrollUp"
      className={`fixed right-5 bottom-5 p-2 rounded-full text-white bg-neutral-800 transition-all duration-300 ease-in z-50 ${
        !visible && "-right-20"
      }`}
      onClick={onClickHandler}
    >
      <span>
        <HiArrowUp size={30} />
      </span>
    </button>
  );
};

export default ScrollToTop;
