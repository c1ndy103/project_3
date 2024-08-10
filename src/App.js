import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";
import UserProfilePage from './UserProfilePage';
import IntroPage from './IntroPage';
import FavoritePage from './FavoritePage';
import AdoptionPage from './AdoptionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LoginPage />} />
        <Route path = "/home" element = {<HomePage />} />
        <Route path = "/user-profile" element = {<UserProfilePage />} />
        <Route path = "/purpose" element = {<IntroPage />} />
        <Route path = "/signup" element = {<SignUpPage />} />
        <Route path = "/favorite" element = {<FavoritePage />} />
        <Route path = "/adoption" element = {<AdoptionPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;