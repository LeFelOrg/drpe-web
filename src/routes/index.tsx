import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from '../pages/log-in'
import SignUp from '../pages/sign-up'
import ForgotPassword from '../pages/forgot-password'
import ResetPassword from '../pages/reset-password'
import Protected from './protected'
import RperList from '../pages/rper-list'
import Profile from '../pages/profile'
import Dashboard from '../pages/dashboard'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route element={<Protected />}>
          <Route path="/rper-list" element={<RperList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
