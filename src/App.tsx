import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CardsList from "./components/CardsList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { setAuth } from "./store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import authChecker from "./utils/authController";


export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  headers: {
    Authorization: localStorage.getItem("languageToken") || "",
  },
});
const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const data = await authChecker();
        if (data) {
          dispatch(setAuth({ ...data }));
          setIsAuthenticated(true);
        } else {
          navigate("/signin");
        }
      } catch (error) {
        navigate("/signin");
      }
    };
    checkAuthentication();
  }, []);

  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<CardsList />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default App;
