import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from '../pages/log-in'
import SignUp from '../pages/sign-up'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
