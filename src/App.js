import logo from './logo.svg';
import './App.css';
import { ProductFilterProvider } from "./context/ProductFilterContext";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import { RegistrationProvider } from './context/RegistrationContext';
// import RegisterPage from './pages/RegisterPage';
// function App() {
//   return (
//     <RegistrationProvider>
//       <RegisterPage />
//     </RegistrationProvider>
//   );

// }

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
// import { useRecoilValue } from "recoil";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import ProductPage from "./pages/ProductPage";
// import WizardContainer from "./components/registration/WizardContainer";
import Users from "./pages/User";

// import { authAtom } from "./recoil/authAtom";
// import { themeAtom } from "./recoil/themeAtom";
// import { ProfileProvider } from "./context/Profilecontext";
// import { RegistrationProvider } from './context/RegistrationContext';
// import RegisterPage from './components/registration/steps/RegisterPage';
import RegisterWizard from './pages/RegistrationWizard';
import { useState, useEffect } from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoApp from './components/TodoApp/Addtask';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useTheme } from "./context/ThemeContext";


export default function App() {

  const [auth, setAuth] = useState({ isAuthenticated: false, user: null });
  // const { theme } = useTheme();

  useEffect(() => {
    const savedAuth = JSON.parse(localStorage.getItem("auth"));
    if (savedAuth?.isAuthenticated) setAuth(savedAuth);
  }, []);


  return (
    <div
    // className={
    //   theme === "dark"
    //     ? "dark bg-black text-white min-h-screen"
    //     : "bg-white min-h-screen"
    // }
    >
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

        {/* <Route
            path="/products"
            element={
              auth.isAuthenticated ? <ProductPage /> : <Navigate to="/login" />
            }
          /> */}
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


        {/* FALLBACK */}
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </div>
  );
}
