import './Login.scss'
import login from '../../../assets/loginimg.svg'
import FormInput from '../../../components/FormInput/FormInput'
import ToggleButton from '../../../components/ToggleButton/ToggleButton'
import PageToggle from '../../../components/PageToggle/PageToggle'

export default function Login() {
  return (
    <main id='login'>
        <img src={login} alt="LILLIES Login" title='LILLIES Login' />
        
        <form action="">
            <h1>Welcome Back!</h1>
            <FormInput type='email' id='email' title='Your email address' />
            <FormInput type='password' id='password' title='Your Password' />

            <ToggleButton text='LOGIN' className='login-btn' />
        
            <span>
                <PageToggle link='/signup' title='Create an account' className='create-account' />
                <p>Forgot password</p>
            </span>
        </form>

    </main>
  )
}
