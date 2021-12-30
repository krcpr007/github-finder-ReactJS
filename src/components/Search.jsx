import React, { useState, useContext } from "react";
import GithubContext from "./context/GithubContext";
import AlertContext from "./context/AlertContext";
function Search() {
  const { setAlert } = useContext(AlertContext);
  const { users, searchResults, clearResults } = useContext(GithubContext);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const hadleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      // alert("Please enter something");
      setAlert("Please Enter Something", "error");
    } else {
      searchResults(text);
      setText("");
    }
  };
  const handleClear = () => {
    clearResults();
  };
  return (
    <div className="grid gird-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={hadleSubmit}>
          <div className="from-control">
            <div className="relative ">
              <input
                type="text"
                className="w-full  pr-40 bg-gray-200 input text-black border-purple-500"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button className="absolute top-0 right-0 rounded-l-none w-36 btn border-purple-500 ">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost -btn-lg" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
