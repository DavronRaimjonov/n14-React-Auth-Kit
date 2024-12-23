import { Button } from "antd";
import React from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useNavigate } from "react-router-dom";
const Home = () => {
  //   const isAuth = useIsAuthenticated();
  //   console.log(isAuth);
  const auth = useAuthUser();
  console.log(auth.avatar);
  const navigate = useNavigate();
  const signOut = useSignOut();
  const signOut2 = () => {
    signOut();
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      {/* <img src={auth.avatar} alt="" /> */}
      <a href={`mailto:${auth.email}`}>{auth.email}</a>
      <p>{auth.name}</p>
      <Button onClick={signOut2}>sign out</Button>
    </div>
  );
};

export default Home;
