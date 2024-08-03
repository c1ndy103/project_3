import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";
import UserProfilePage from './UserProfilePage';
import IntroPage from './IntroPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LoginPage />} />
        <Route path = "/home" element = {<HomePage />} />
        <Route path = "/user-profile" element = {<UserProfilePage />} />
        <Route path = "/purpose" element = {<IntroPage />} />
        <Route path = "/signup" element = {<SignUpPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;