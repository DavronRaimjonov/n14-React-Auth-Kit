import { useMutation } from "react-query";
import useAxios from "../../useAxios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import useSignIn from "react-auth-kit/hooks/useSignIn";
const useLogin = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const signIn = useSignIn();
  return useMutation({
    mutationFn: (data) => axios({ url: "login", body: data, method: "POST" }),
    onSuccess: (data) => {
      let user = {
        id: 1,
        email: "john@mail.com",
        password: "changeme",
        name: "Jhon",
        role: "customer",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
      };
      localStorage.setItem("token", data?.data?.access_token);
      signIn({
        auth: {
          token: data?.data?.access_token,
          type: "Bearer",
        },

        userState: user,
        expiresIn: 3000,
      });
      notification.success({ message: "Login sucsessful" });
      navigate("/");
    },
  });
};

export { useLogin };
/*



{
  "email": "john@mail.com",
  "password": "changeme"
}

*/
