import axios from "axios";

const useAxios = () => {
  const response = ({ url, method = "GET", params, headers, body }) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer${localStorage.getItem("token")}`,
        ...headers,
      },
      params: {
        ...params,
      },
    });
  };
  return response;
};

export default useAxios;
