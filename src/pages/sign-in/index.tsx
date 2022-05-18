import Logo from '../../components/logo'
import Input from '../../components/input'
import Button from '../../components/button'
import SignInImg from '../../assets/signin-img.png'
import { Link } from 'react-router-dom'
import './style.css'

function SignIn() {
  return (
    <main>
      <img src={SignInImg} alt="Friends sitting outdoors." />
      <div>
        <Logo className="sign-in_logo" />
      </div>
    </main>
  )
}

export default SignIn
