import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/Layout";
import Dashboard from "scenes/Dashboard";
import Login from "Pages/Login/Login";
import Members from "scenes/Members";
import Admin from "scenes/Admin";
import Events from "scenes/Events";
import Trainings from "scenes/Trainings";
import Calendar from "scenes/Calendar";

function App() {
  const mode = useSelector((state) => state.global.mode);
  // const user = useSelector((state) => state.global.user);
  const user = "null";
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
              {user ? (
                <>
                  <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                  />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/members" element={<Members />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/trainings" element={<Trainings />} />
                  <Route path="/calendar" element={<Calendar />} />
                </>
              ) : (
                <Route path="/" element={<Navigate to="/login" replace />} />
              )}
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
