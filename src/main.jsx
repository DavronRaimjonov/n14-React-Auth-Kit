import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { route } from "./route/index.jsx";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";

const store2 = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",


});
const queryClinet = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider  store={store2}>
      <QueryClientProvider client={queryClinet}>
        <RouterProvider router={route} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
