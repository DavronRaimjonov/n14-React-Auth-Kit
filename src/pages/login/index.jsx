import { Input } from "antd";
import React, { useRef } from "react";
import { useLogin } from "../../hooks/useQueryHandler/useQueryAction";
const Login = () => {
  const refName = useRef();
  const refPassword = useRef();
  const { mutate, data } = useLogin();
  const submit = async (e) => {
    e.preventDefault();
    let loginObj = {
      email: refName.current.input.value,
      password: refPassword.current.input.value,
    };
    mutate(loginObj);
  };
  return (
    <section className="h-[100vh] flex items-center justify-center w-[400px] m-auto">
      <form onSubmit={submit} className="w-full">
        <Input
          ref={refName}
          placeholder="Name"
          className="h-[40px]"
          value={"john@mail.com"}
        />
        <Input.Password
          ref={refPassword}
          placeholder="Passoword"
          className="my-5 h-[40px]"
          value={"changeme"}
        />
        <button className="w-full bg-[#2094F3]  text-white text-[18px] h-[40px] rounded-lg">
          Send
        </button>
      </form>
    </section>
  );
};

export default Login;
