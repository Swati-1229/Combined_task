import logo from './logo.svg';
import './App.css';
import { ProductFilterProvider } from "./context/ProductFilterContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import ProductPage from "./pages/ProductPage";
import Users from "./pages/User";
import { ProfileProvider } from "./context/Profilecontext";
import RegisterWizard from './pages/RegistrationWizard';
import { useState, useEffect } from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoApp from './components/TodoApp/Addtask';
import ProfileForm from './components/Profile/AddProfile';
import ViewProfile from './components/Profile/ViewProfile';


export default function App() {

  const [auth, setAuth] = useState({ isAuthenticated: false, user: null });
  useEffect(() => {
    const savedAuth = JSON.parse(localStorage.getItem("auth"));
    if (savedAuth?.isAuthenticated) setAuth(savedAuth);
  }, []);


  return (
    <div
    >
      <ProfileProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={< RegisterWizard />} />
          <Route
            path="/dashboard"
            element={
              auth.isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/products"
            element={
              auth.isAuthenticated ? (
                <ProductFilterProvider>
                  <ProductPage />
                </ProductFilterProvider>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/Addtask"
            element={
              auth.isAuthenticated ? (

                <TodoProvider>
                  <div className="min-h-screen p-4 bg-gray-200 dark:bg-gray-900">
                    <TodoApp />
                  </div>
                </TodoProvider>

              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/users"
            element={
              auth.isAuthenticated ? <Users /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/Profile"
            element={
              auth.isAuthenticated ? < ProfileForm /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/ViewProfile"
            element={
              auth.isAuthenticated ? <ViewProfile /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </ProfileProvider>
    </div>
  );
}
