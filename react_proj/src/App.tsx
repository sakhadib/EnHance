// App.tsx
import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// import Header from "./components/header"; // Ensure Header is correctly imported
import Log_Header from "./components/log_header";

import SignUp from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/projects";
import Teams from "./pages/teams";

const App: React.FC = () => {
  // State to manage light/dark mode
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // Toggle function to switch between light and dark mode
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Memoized theme to improve performance
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Pass the toggleTheme function to Header for theme switching */}
        <Log_Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
