import { useContext, useState } from "react";
import Navigation from "./navigation";
import { userContext } from "./src/context/userContext";
import StackNavigation from "./stackNavigation";

export default function App() {
  const [user, setUser] = useState({ username: null, password: null });
  const value = { user, setUser };
  return (
    <userContext.Provider value={value}>
      {user.username !== null && user.password !== null ? (
        <Navigation />
      ) : (
        <StackNavigation />
      )}
    </userContext.Provider>
  );
}
