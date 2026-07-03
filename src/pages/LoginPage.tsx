import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
    <div className="flex min-h-screen flex-1">
      {/* Left side: Hero / Branding (8 col equivalent, roughly 2/3) */}
      <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:w-2/3 relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="University Campus"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-primary-900/70 mix-blend-multiply" />
        </div>

        <div className="relative flex flex-col justify-between h-full p-12 text-white">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-primary-500 text-white flex items-center justify-center font-bold text-xl shadow-lg border border-primary-400">
                DUK
              </div>
              <span className="text-3xl font-bold tracking-tight">ERP Portal</span>
            </Link>
          </div>
          <div className="mb-24">
             <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-tight">
               Digital University Kerala
             </h1>
             <p className="text-2xl font-medium text-primary-100 max-w-2xl leading-relaxed">
               "Empowering minds through digital excellence. Your unified gateway to academic innovation."
             </p>
          </div>
        </div>
      </div>

      {/* Right side: Login Form (4 col equivalent, roughly 1/3) */}
      <div className="flex flex-col justify-center flex-1 lg:w-1/3 lg:flex-none bg-surface border-l border-border px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">

          <div>
             <h2 className="text-3xl font-bold tracking-tight text-neutral-900">Sign in to your account</h2>
             <p className="mt-2 text-sm text-neutral-600">
               Welcome back to the DUK Enterprise Resource Planning portal.
             </p>
          </div>

          <div className="mt-10">
            <form onSubmit={handleLogin}>
               <div className="space-y-6">

                 {/* Role Selection */}
                 <div>
                    <label htmlFor="role" className="block text-sm/6 font-medium text-neutral-900">
                      Select Role
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="role"
                        name="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                      >
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                        <option value="schoolHead">School Head</option>
                        <option value="academicHead">Academic Head</option>
                      </select>
                      <svg
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-neutral-500 sm:size-4"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </div>
                 </div>

                 {/* User ID / Email */}
                 <div>
                   <label htmlFor="userId" className="block text-sm/6 font-medium text-neutral-900">
                     User ID / Email address
                   </label>
                   <div className="mt-2">
                     <input
                       id="userId"
                       name="userId"
                       type="text"
                       autoComplete="email"
                       placeholder="Enter your ID or Email"
                       className="block w-full rounded-md bg-white px-3 py-2 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                     />
                   </div>
                 </div>

                 {/* Password */}
                 <div>
                   <div className="flex items-center justify-between">
                     <label htmlFor="password" className="block text-sm/6 font-medium text-neutral-900">
                       Password
                     </label>
                     <div className="text-sm/6">
                       <a href="#" className="font-semibold text-primary-600 hover:text-primary-500">
                         Forgot password?
                       </a>
                     </div>
                   </div>
                   <div className="mt-2">
                     <input
                       id="password"
                       name="password"
                       type="password"
                       autoComplete="current-password"
                       placeholder="••••••••"
                       className="block w-full rounded-md bg-white px-3 py-2 text-base text-neutral-900 outline outline-1 -outline-offset-1 outline-border placeholder:text-neutral-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary-600 sm:text-sm/6"
                     />
                   </div>
                 </div>

                 {/* Remember Me */}
                 <div className="flex items-center gap-3">
                   <div className="flex h-6 shrink-0 items-center">
                     <div className="group grid size-4 grid-cols-1">
                       <input
                         id="remember-me"
                         name="remember-me"
                         type="checkbox"
                         className="col-start-1 row-start-1 appearance-none rounded border border-border bg-white checked:border-primary-600 checked:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                       />
                       <svg
                         fill="none"
                         viewBox="0 0 14 14"
                         className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-neutral-950/25"
                       >
                         <path
                           d="M3 8L6 11L11 3.5"
                           strokeWidth={2}
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className="opacity-0 group-has-[:checked]:opacity-100"
                         />
                       </svg>
                     </div>
                   </div>
                   <label htmlFor="remember-me" className="text-sm/6 text-neutral-900">
                     Remember me
                   </label>
                 </div>

                 {/* Submit Button */}
                 <div>
                   <button
                     type="submit"
                     className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
                   >
                     Sign in
                   </button>
                 </div>

               </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
