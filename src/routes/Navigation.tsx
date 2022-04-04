import { NavLink, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage, RegisterFormikPage, DynamicForm } from '../03-forms/pages/';

import img from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={img} alt="" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>basic register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik basic page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/yup-form" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik  yup form</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik  components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstraction" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik  abstraction</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register-formik-page" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Formik  page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form-page" className={({ isActive }) => isActive ? 'nav-active' : ''}>Dynamic Form</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<RegisterPage />} />
                    <Route path="/formik" element={<FormikBasicPage />} />
                    <Route path="/yup-form" element={<FormikYupPage />} />
                    <Route path="/formik-components" element={<FormikComponents />} />
                    <Route path="/formik-abstraction" element={<FormikAbstraction />} />
                    <Route path="/register-formik-page" element={<RegisterFormikPage />} />
                    <Route path="/dynamic-form-page" element={<DynamicForm />} />
                    <Route path='/*' element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
