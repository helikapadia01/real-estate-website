import React, { createContext, useContext, useState, useEffect } from "react";

const ScrollControlContext = createContext();

export const useScrollControl = () => useContext(ScrollControlContext);

export const ScrollControlProvider = ({ children }) => {
  const [isScrollEnabled, setScrollEnabled] = useState(true);

  useEffect(() => {
    if (isScrollEnabled) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  }, [isScrollEnabled]);

  const enableScroll = () => setScrollEnabled(true);
  const disableScroll = () => setScrollEnabled(false);

  return (
    <ScrollControlContext.Provider
      value={{ isScrollEnabled, enableScroll, disableScroll }}
    >
      {children}
    </ScrollControlContext.Provider>
  );
};