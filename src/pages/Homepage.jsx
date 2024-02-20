import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Authentication from "./Authentication";
import Loader from "../components/Loader";
import { fetch_user } from "../redux/reducers/user_slice";
import Admin from "./Admin";
import Customer from "./Customer";
import Rider from "./Rider";

export default function Homepage() {
  const { user, loading_user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_user());
  }, []);

  return (
    <>
      {loading_user ? (
        <Loader />
      ) : (
        <>
          {user ? (
            <>
              {user.role == "admin" ? (
                <Admin />
              ) : user.role == "rider" ? (
                <Rider />
              ) : (
                <Customer />
              )}
            </>
          ) : (
            <Authentication />
          )}
        </>
      )}
    </>
  );
}
