import { useFormik } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {


    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Este campo es requerido').max(15, 'Must be 15 characters or less'),
            lastName: Yup.string().required('Este campo es requerido'),
            email: Yup.string().email('Invalid email address').required('Este campo es requerido'),
        }),
    })

    return (
        <div>
            <h1>Formik Yup form</h1>
            <form noValidate onSubmit={handleSubmit}>

                <label htmlFor="firstName">First name</label>
                <input type="text" {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last name</label>
                <input type="text"  {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input type="email" {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}


                <button type='submit'>Crear</button>

            </form>
        </div>
    )
}
