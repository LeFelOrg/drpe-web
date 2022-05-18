import './style.css'

interface Props {
  children: string,
  className: string
}

function Button({children, className}: Props) {
  return(
    <button className={`${className} button`}>
      {children}
    </button>
  )
}

export default Button
