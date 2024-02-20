import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { fetch_user, login, register } from "../redux/reducers/user_slice";
import { error, success } from "../redux/reducers/notification_slice";

export default function Authentication() {
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();

  const { loading_login, loading_register } = useSelector(
    (state) => state.user
  );

  const handleLogin = (inputs) => {
    dispatch(login(inputs)).then((res) => {
      if (res.error) {
        dispatch(error(res.error.message));
      } else {
        dispatch(success("Logged in"));
        dispatch(fetch_user());
      }
    });
  };
  const handleRegister = (inputs) => {
    dispatch(register(inputs)).then((res) => {
      if (res.error) {
        dispatch(error(res.error.message));
      } else {
        dispatch(success("Registered"));
      }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen mx-4">
      {show ? (
        <Register
          setshow={setshow}
          register={handleRegister}
          loading={loading_register}
        />
      ) : (
        <Login setshow={setshow} login={handleLogin} loading={loading_login} />
      )}
    </div>
  );
}
