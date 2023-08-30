import FormInput from '../FormInput/FormInput'
import ToggleButton from '../ToggleButton/ToggleButton'
import './Checkout.scss'

interface CheckoutTypes {
    closeCheck: () => void
    className?:string
}

export default function Checkout({closeCheck, className}:CheckoutTypes) {
  return (
    <div id='checkout' className={className}>
        <main>
            <ToggleButton
                onClick={closeCheck}
                icon='fa-solid fa-x fa-2x'
                className='close-check'
            />
            
            <h2>Checkout</h2>

            <form action="">
                <FormInput id='card-number' title='Card Number' type='tel' pattern='\d*' maxLength={19}/>
                <FormInput id='card-date' title='MM / YY' type='tel' pattern='\d*' maxLength={7}/>
                <FormInput id='card-cvc' title='CVC/CVV2' type='tel' pattern='\d*' maxLength={4}/>
                <FormInput id='card-pin' title='Card Pin' type='password' pattern='\d*' maxLength={4}/>

                <ToggleButton
                    text='Make Payment'
                    className='checkout-pay'
                />
            </form>
        </main>
    </div>
  )
}
