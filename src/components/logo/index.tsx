import logoRper from '../../assets/logo-rper.png'
import './style.css'

interface Props {
  className: string
}

function Logo({ className }: Props) {
  return (
    <div className={`${className} logo`}>
      <img src={logoRper} alt="Rapid Participatory Emacipatory Research Logo" />
      <h1 className="logo_title">Rapid Participatory Emacipatory Research</h1>
      <p className="logo_initials">RPER</p>
      <p className="logo_description">Social Management Software</p>
    </div>
  )
}

export default Logo
