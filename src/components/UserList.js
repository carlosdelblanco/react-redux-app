import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchAllUsers } from "../store/slices/users";

const UserList = () => {
  const dispatch = useDispatch();
  const users = [];

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {users.map((user, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              <img src={user.avatar} alt="avatar" />
              <div className="card-body">
                <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
