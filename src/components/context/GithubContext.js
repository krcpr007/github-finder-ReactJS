import { createContext, useReducer } from "react";
import GithubReducer from "../Reducer/GithubReducer";
const GithubContext = createContext();
export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //   get rendom users

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_API_KEY}`,
      },
    });
    const data = await response.json();
    console.log(data);
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
    // setUsers(data);
    // setLoading(false);
  };
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });
  // gitHub searchResults
  const searchResults = async (text) => {
    const params = new URLSearchParams({
      q: text,
      // q:"krcpr"
    });
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    const { items } = await response.json();
    console.log(items);
    dispatch({
        type: "GET_USERS",
        payload: items,
      });
    // setUsers(data);
    // setLoading(false);
  };
    //   Lets clear users form state 
    const clearResults= () =>{
        dispatch({
            type:"CLEAR_USERS"
        })
    }
  return (
    <GithubContext.Provider
      value={{
        // ...state,
        // dispatch,
        users: state.users,
        loading: state.loading,
        fetchUsers,searchResults,clearResults
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
