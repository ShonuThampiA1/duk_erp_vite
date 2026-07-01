import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';

// Outside pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

// Dashboard pages
import Dashboard from './pages/Dashboard';
import StudentDashboard from './pages/student/Dashboard';
import FacultyDashboard from './pages/faculty/Dashboard';
import SchoolHeadDashboard from './pages/school-head/Dashboard';
import AcademicHeadDashboard from './pages/academic-head/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Outside Pages */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Dashboard Pages */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/faculty" element={<FacultyDashboard />} />
          <Route path="/dashboard/school-head" element={<SchoolHeadDashboard />} />
          <Route path="/dashboard/academic-head" element={<AcademicHeadDashboard />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
