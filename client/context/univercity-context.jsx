import React, { createContext, useContext, useState } from "react";

const UnivercityContext = createContext({});

export const UnivercityContextProvider = ({ children }) => {
  const values = {};
  return (
    <UnivercityContext.Provider value={values}>
      {children}
    </UnivercityContext.Provider>
  );
};

export const useUnivercityContext = () => useContext(UnivercityContext);
