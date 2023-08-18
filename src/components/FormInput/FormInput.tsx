import { useState } from 'react'
import './FormInput.scss'

type FormTypes = {
    type?: string
    title?: string
    id: string
}

export default function FormInput({type, title, id}: FormTypes) {
    const [formState, setFormState] = useState({
        [id]: '',
    })
    const [showPassword, setShowPassword] = useState(false)

    function handleChange(e:any) {
        e.preventDefault()

        const {name, value} = e.target
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    function togglePassword() {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

  return (
    <span id='form-input'>
        <input
            type={type === 'password' && showPassword ? 'text' : type}
            name={id}
            id={`input ${id}`}
            value={formState[id]}
            onChange={handleChange}
        />
        <label
            htmlFor={id}
            className={formState[id] ? 'active' : ''}
        >
            {title}
        </label>

        {type === 'password' && (
            <i
                className={`fa-solid fa-${showPassword ? 'eye' : 'eye-slash'}`}
                onClick={togglePassword}
            ></i>
        )}
    </span>
  )
}
