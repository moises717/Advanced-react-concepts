import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

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
                    (formik) => (
                        <Form>

                            <label htmlFor="firstName">First name</label>
                            <Field type="text" name="firstName" id="firstName" placeholder="Nombre" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">Last name</label>
                            <Field type="text" name="lastName" id="lastName" />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="email">Email</label>
                            <Field type="text" name="email" id="email" />
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor="jobType">Job</label>
                            <Field as="select" name="jobType" id="jobType" >
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="developer">Developer</option>
                                <option value="other">Other</option>

                            </Field>
                            <ErrorMessage name="jobType" component="span" />
                            < br />
                            <label>
                                Terms & conditions <Field type="checkbox" name="terms" id="terms" />
                            </label>
                            <ErrorMessage name="terms" component="span" />


                            <button type='submit'>Crear</button>

                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}
