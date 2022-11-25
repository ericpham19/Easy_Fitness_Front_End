
import './App.css';

import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./components/SignUp";
import LogoutPage from './Pages/LogoutPage';

import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import SessionsPage from "./Pages/SessionsPage"
import FrontPage from './Pages/FrontPage';
import UserPage from './Pages/UserPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/sessionspage" element={
            <ProtectedRoutes>
              <SessionsPage />
            </ProtectedRoutes>} />
          <Route path="/user" element={
            <ProtectedRoutes>
              <UserPage />
            </ProtectedRoutes>} 
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
