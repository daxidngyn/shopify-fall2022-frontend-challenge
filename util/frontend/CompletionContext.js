import React, { createContext, useReducer, useEffect } from "react";
import { completionReducer } from "./CompletionReducer";

export const CompletionContext = createContext();

const CompletionContextProvider = (props) => {
  const [completions, dispatch] = useReducer(completionReducer, [], () => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("completions");

      return localData ? JSON.parse(localData) : [];
    }
  });

  useEffect(() => {
    localStorage.setItem("completions", JSON.stringify(completions));
  }, [completions]);

  return (
    <CompletionContext.Provider value={{ completions, dispatch }}>
      {props.children}
    </CompletionContext.Provider>
  );
};

export default CompletionContextProvider;
