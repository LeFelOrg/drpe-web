import Logo from '../../components/logo'
import Input from '../../components/input'
import Button from '../../components/button'
import LogInImg from '../../assets/login-img.png'
import newAccIcon from '../../assets/new-acc-icon.svg'
import { Link } from 'react-router-dom'
import './style.css'

function LogIn() {
  return (
    <main className="log-in_main">
      <div className="log-in_form">
        <Logo className="log-in_logo" />
        <h2 className="log-in_sub-title">Credentials</h2>
        <Input
          className="log-in_input-email"
          placeholder="Email"
          type="email"
          required
        />
        <Input
          className="log-in_input-password"
          placeholder="Password"
          type="text"
          required
        />
        <Button className="log-in_button">Log In</Button>
        <Link className="log-in_link-forgot-pw" to="/forgotPassword">
          Forgot Password?
        </Link>
        <div className='log-in_new-acc'>
          <img src={newAccIcon} alt="Enter Icon" />
          <Link className="log-in_link-to-new-acc" to="/signIn">
            Create New Account
          </Link>
        </div>
      </div>
      <img className="log-in_img" src={LogInImg} alt="People in a meeting." />
    </main>
  )
}

export default LogIn
