import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css'

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    passwordConfirm: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .min(2, 'Must be 2 characters or more')
                            .required('Name is required'),
                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        password: Yup.string()
                            .min(6, 'Password must be at least 6 characters')
                            .required('Password is required'),
                        passwordConfirm: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                            .required('Confirm Password is required')
                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <Field type="text" name='name' placeholder="Nombre" />
                            <ErrorMessage name='name' component="span" />

                            <Field type="email" name="email" id="email" placeholder="Intro email" />
                            <ErrorMessage name="email" component="span" />

                            <Field type="password" name="password" id="password" placeholder="Intro password" />
                            <ErrorMessage name="password" component="span" />


                            <Field type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Intro confirm password" />
                            <ErrorMessage name="passwordConfirm" component="span" />

                            <button type='submit'>create</button>
                            <button>reset form</button>
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}
