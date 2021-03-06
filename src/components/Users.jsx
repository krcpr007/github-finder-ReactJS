import React, { useEffect, useContext } from "react";
import Spinner from "./Spinner";
import UserItem from "./UserItem";
import GithubContext from "./context/GithubContext";
function Users() {
  const { users, loading, fetchUsers } = useContext(GithubContext);
  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <Spinner key={user.id} />;
        })}
      </div>
    );
  }
}

export default Users;
