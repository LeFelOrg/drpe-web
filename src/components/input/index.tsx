import './style.css'

function Input({ className, ...props }: any) {
  return <input {...props} className={`${className} input`} />
}

export default Input
