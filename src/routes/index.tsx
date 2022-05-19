import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from '../pages/log-in'
// import SignIn from '../pages/sign-in'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn />} />
        {/* <Route path='/signIn' element={<SignIn />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
