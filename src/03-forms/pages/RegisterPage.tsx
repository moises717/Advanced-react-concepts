import { useForm } from '../hooks/useForm'
import '../styles/styles.css'



export const RegisterPage = () => {

    const { onChange, onSubmit, resetForm, isValidEmail, registerData: { name, password, email, passwordConfirm } } = useForm({
        name: '',
        password: '',
        email: '',
        passwordConfirm: ''
    });


    return (
        <div>
            <h1>Register page</h1>

            <form noValidate onSubmit={onSubmit}>

                <input type="text" name='name' placeholder="Nombre" value={name} onChange={onChange} className={`${name.trim().length <= 0 && 'has-error'}`} />
                {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

                <input type="email" className={`${!isValidEmail(email) && 'has-error'}`} name="email" id="email" placeholder="Intro email" value={email} onChange={onChange} />
                {!isValidEmail(email) && <span>El email no es valido</span>}

                <input type="password" name="password" id="password" placeholder="Intro password" value={password} onChange={onChange} />
                {password.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                {password.trim().length < 6 && password.trim().length > 0 && <span>Las contraseñas deben de tener mas de 6 caracteres</span>}

                <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Intro confirm password" value={passwordConfirm} onChange={onChange} />
                {passwordConfirm.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                {passwordConfirm.trim().length > 0 && password.trim() !== passwordConfirm && <span>Las contraseñas deben de coincidir</span>}

                <button>create</button>
                <button onClick={resetForm}>reset form</button>

            </form>
        </div>
    )
}
