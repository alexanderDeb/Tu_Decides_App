import React from "react";

export const userContext = React.createContext({
  user: { username: null, password: null },
  setUser: () => {},
});
