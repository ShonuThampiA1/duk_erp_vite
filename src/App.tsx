import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';

// Outside pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DesignSystem from './pages/DesignSystem';

// Student Pages
import StudentDashboard from './pages/student/Dashboard';
import StudentTimetable from './pages/student/Timetable';
import StudentAttendance from './pages/student/Attendance';
import StudentAssignments from './pages/student/Assignments';
import StudentFees from './pages/student/Fees';
import StudentLibrary from './pages/student/Library';

// Faculty Pages
import FacultyDashboard from './pages/faculty/Dashboard';
import FacultyClasses from './pages/faculty/Classes';
import FacultyAttendance from './pages/faculty/Attendance';
import FacultyAssignments from './pages/faculty/Assignments';
import FacultyGrading from './pages/faculty/Grading';

// School Head Pages
import SchoolHeadDashboard from './pages/school-head/Dashboard';
import SchoolHeadDepartments from './pages/school-head/Departments';
import SchoolHeadFaculty from './pages/school-head/FacultyPerformance';
import SchoolHeadReports from './pages/school-head/Reports';

// Academic Head Pages
import AcademicHeadDashboard from './pages/academic-head/Dashboard';
import AcademicHeadSchools from './pages/academic-head/Schools';
import AcademicHeadAnalytics from './pages/academic-head/Analytics';
import AcademicHeadPolicies from './pages/academic-head/Policies';

function App() {
  return (
    <Router>
      <Routes>
        {/* Outside Pages */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<MainLayout role="student" />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="timetable" element={<StudentTimetable />} />
          <Route path="attendance" element={<StudentAttendance />} />
          <Route path="assignments" element={<StudentAssignments />} />
          <Route path="fees" element={<StudentFees />} />
          <Route path="library" element={<StudentLibrary />} />
        </Route>

        {/* Faculty Routes */}
        <Route path="/faculty" element={<MainLayout role="faculty" />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<FacultyDashboard />} />
          <Route path="classes" element={<FacultyClasses />} />
          <Route path="attendance" element={<FacultyAttendance />} />
          <Route path="assignments" element={<FacultyAssignments />} />
          <Route path="grading" element={<FacultyGrading />} />
        </Route>

        {/* School Head Routes */}
        <Route path="/school-head" element={<MainLayout role="schoolHead" />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<SchoolHeadDashboard />} />
          <Route path="departments" element={<SchoolHeadDepartments />} />
          <Route path="faculty-performance" element={<SchoolHeadFaculty />} />
          <Route path="reports" element={<SchoolHeadReports />} />
        </Route>

        {/* Academic Head Routes */}
        <Route path="/academic-head" element={<MainLayout role="academicHead" />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AcademicHeadDashboard />} />
          <Route path="schools" element={<AcademicHeadSchools />} />
          <Route path="analytics" element={<AcademicHeadAnalytics />} />
          <Route path="policies" element={<AcademicHeadPolicies />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
