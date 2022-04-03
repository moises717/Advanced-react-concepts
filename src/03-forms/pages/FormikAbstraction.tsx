import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';


import '../styles/styles.css';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Yup form</h1>

            <Formik initialValues={{
                initialValues: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                },
            }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().required('Este campo es requerido').max(15, 'Must be 15 characters or less'),
                        lastName: Yup.string().required('Este campo es requerido'),
                        email: Yup.string().email('Invalid email address').required('Este campo es requerido'),
                        terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
                        jobType: Yup.string().required('Este campo es requerido').notOneOf(['other', null], 'You must select a job type'),
                    })
                }
            >
                {
                    (formik) => {
                        return (
                            <Form>

                                <MyTextInput label='First name' name='firstName' placeholder='Nombre' type='text' />

                                <MyTextInput label='Last name' name='lastName' placeholder='apellido' type='text' />

                                <MyTextInput label='Email' name='email' placeholder='email' type='email' />

                                <MySelect label='Job Type' name='jobType'>
                                    <option value="">Select a job type</option>
                                    <option value="designer">Designer</option>
                                    <option value="developer">Developer</option>
                                    <option value="other">Other</option>
                                </MySelect>
                                <br />
                                <MyCheckbox label='terms & condition' name='terms' />

                                <button type='submit'>Crear</button>
                            </Form>
                        );
                    }
                }

            </Formik>

        </div>
    )
}
