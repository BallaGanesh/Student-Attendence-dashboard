import { useState } from "react";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import StudentListPage from "./pages/StudentListPage";
import SummaryPage from "./pages/SummaryPage";
import { Navigate, Route, BrowserRouter as Router, Routes  } from "react-router-dom";





export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  <>
  <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route 
            path="/login" 
            element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} 
          />
          <Route 
            path="/students" 
            element={
              isLoggedIn ? <StudentListPage /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/summary" 
            element={
              isLoggedIn ? <SummaryPage /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="*" 
            element={<Navigate to="/login" />} 
          />
        </Routes>
      </Router>
      

      
  </>
  );
}
