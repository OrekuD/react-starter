import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

const Consumer = Context.Consumer;

export { Context, Provider, Consumer };
