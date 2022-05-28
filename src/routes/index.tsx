import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from '../pages/log-in'
import SignUp from '../pages/sign-up'
import Dashboard from '../pages/dashboard'
import Protected from './protected'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
