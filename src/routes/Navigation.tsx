import { NavLink, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { ShoppingPage } from '../component-patterns/pages/ShoppingPage';
import img from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={img} alt="" />
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<ShoppingPage />} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path='/*' element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
