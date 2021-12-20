import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card border border-purple-500 shadow-md compact side bg-base-100">
      <div className="flex-row item-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full h-14 shadow w-14">
              <img src={avatar_url} alt="profile_pic" />
            </div>
          </div>
        </div>
        <div>
           <h2 className="card-title">{login} </h2>
           <Link className="text-base-content text-opacity-40" to={`/user/${login}`}>
               visit Profile
           </Link>
        </div>
      </div>
    </div>
  );
}
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
