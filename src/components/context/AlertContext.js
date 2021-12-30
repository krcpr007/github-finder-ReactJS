import { createContext, useReducer } from "react";
import alertReducer from "../Reducer/AlertReducer";
const AlertContext = createContext();
export const AlertProvider = ({ children }) => {
  const iniitialStatete = null;
  const [state, dispatch] = useReducer(alertReducer, iniitialStatete);

  //  set alert
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: {
        msg,
        type,
      },
    });
  };
  setTimeout(() => {
    dispatch({ type: "REMOVE_ALERT" });
  }, 3000);
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
export default AlertContext; 