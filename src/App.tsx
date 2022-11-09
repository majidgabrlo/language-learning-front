import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Words from "./pages/Words";
import { getUserData } from "./store/auth/authAction";
import { useAppDispatch } from "./store/hooks";
import { setAppLanguage } from "./store/language/languageAction";
import authChecker from "./utils/authController";


// We should save detail in .env file but just for making cloning easy I used this way
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
          dispatch(getUserData({ ...data }));
          setIsAuthenticated(true);
          if (localStorage.getItem("selectedLearningLang")) {
            dispatch(
              setAppLanguage(localStorage.getItem("selectedLearningLang"))
            );
          }
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
      <ApolloProvider client={client}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/words" element={<Words />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </ApolloProvider>
  );
};

export default App;
