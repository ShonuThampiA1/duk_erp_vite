import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, User, Lock } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication and redirect based on role
    switch (role) {
      case 'student':
        navigate('/dashboard/student');
        break;
      case 'faculty':
        navigate('/dashboard/faculty');
        break;
      case 'schoolHead':
        navigate('/dashboard/school-head');
        break;
      case 'academicHead':
        navigate('/dashboard/academic-head');
        break;
      default:
        navigate('/dashboard');
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md bg-surface rounded-xl shadow-lg border border-border overflow-hidden">

        {/* Header */}
        <div className="bg-primary-50 p-8 text-center border-b border-primary-100">
          <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-md">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-primary-700">Welcome Back</h2>
          <p className="text-primary-600 mt-2 text-sm">Sign in to the DUK ERP Portal</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-8 space-y-6">

          {/* Role Selection */}
          <div className="space-y-2">
            <label htmlFor="role" className="block text-sm font-medium text-neutral-700">
              Select Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border border-border rounded-md bg-surface text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="schoolHead">School Head</option>
              <option value="academicHead">Academic Head</option>
            </select>
          </div>

          {/* User ID (Dummy) */}
          <div className="space-y-2">
            <label htmlFor="userId" className="block text-sm font-medium text-neutral-700">
              User ID / Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                id="userId"
                placeholder="Enter your ID"
                className="w-full pl-10 p-3 border border-border rounded-md bg-surface text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                defaultValue="demo_user"
              />
            </div>
          </div>

          {/* Password (Dummy) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                Password
              </label>
              <a href="#" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full pl-10 p-3 border border-border rounded-md bg-surface text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                defaultValue="password123"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-md font-medium transition-colors shadow-sm mt-4"
          >
            <LogIn className="w-5 h-5" />
            Sign In
          </button>
        </form>

      </div>
    </div>
  );
}
