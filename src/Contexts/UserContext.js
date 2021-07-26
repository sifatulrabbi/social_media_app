import React from "react";
import addNewUser from "../Services/addNewUser";

export const UserContext = React.createContext();

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = React.useState(null);
  const [userName, setUserName] = React.useState("");

  React.useEffect(() => {
    if (userInfo) {
      getUsername();
    } else {
      setUserInfo(null);
    }
  }, [userInfo]);

  async function getUsername() {
    setUserName(await addNewUser(userInfo));
  }

  return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>;
}
