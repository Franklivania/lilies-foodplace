import { useNavigate } from 'react-router-dom'
import signup from '../../assets/signimg.svg'
import FormInput from '../../components/FormInput/FormInput'
import ToggleButton from '../../components/ToggleButton/ToggleButton'
import PageToggle from '../../components/PageToggle/PageToggle'
import './SignUp.scss'

export default function SignUp() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/dashboard')
    }

  return (
    <main id='signup'>
        <img src={signup} alt="LILLIES signup" title='LILLIES sign up'/>

        <form action="">
            <h1>Welcome to Lilies!</h1>

            <FormInput type='text' id='firstname' title='Your FirstName'/>
            <FormInput type='email' id='email' title='Your email address' />
            <FormInput type='password' id='password' title='Your Password' />

            <ToggleButton text='SIGN UP' className='signup-btn' onClick={handleClick} />

            <p>Already have an account? <PageToggle link='/login' title='LOGIN' className='login-btn' /></p>
        </form>
    </main>
  )
}
