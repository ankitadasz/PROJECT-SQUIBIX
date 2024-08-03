// import logo from './logo.svg';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import './App.css';
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import ContactUsPage from "./pages/ContactUsPage";
import ErrorPage from "./pages/ErrorPage";
import SessionPage from "./pages/SessionPage";
import ProfilePage from "./pages/ProfilePage";
import UserHomeContent from "./components/UserHomeContent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<LoginPage />} />
          <Route path = "/signin" element = {<Signup />} />
          <Route path = "/contact" element = {<ContactUsPage />} />
          <Route path = "/errorwhilelogin" element = {<ErrorPage />} />
          <Route path = "/sessionexpired" element = {<SessionPage />} />
          <Route path = "/profile" element = {<ProfilePage />} />
          <Route path = "/userhome" element = {<UserHomeContent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
