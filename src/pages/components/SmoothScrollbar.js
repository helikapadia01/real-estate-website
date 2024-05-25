import { useScrollControl } from "../../../context/ScrollControlContext";
import React, { useRef, useEffect } from "react";
import Scrollbar from "smooth-scrollbar";


const SmoothScrollbar = ({ children }) => {
  const scrollRef = useRef(null);
  const { isScrollEnabled } = useScrollControl();

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollRef.current, {
      damping: 0.05,
      thumbMinSize: 20,
    });

    scrollbar.options.continuousScrolling = isScrollEnabled;

    return () => scrollbar.destroy();
  }, [isScrollEnabled]);

  return (
    <div
      ref={scrollRef}
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        margin: "0",
        padding: "0",
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScrollbar;
