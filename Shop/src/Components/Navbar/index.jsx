import { NavLink } from 'react-router-dom';
const Navbar = () => {

    const activeStyle = "underline"

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to={'/'}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    > Shopi </NavLink>
                </li>
                <li>
                    <NavLink to={'/all-products'}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    > All </NavLink>
                </li>
                <li>
                    <NavLink to={'/clothes'}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    > Clothes </NavLink>
                </li>
                <li>
                    <NavLink to={'/electronics'}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    > Electronics </NavLink>
                </li>
                <li>
                    <NavLink to={'/furnitures'}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    > Furnitures </NavLink>
                </li>
                <li>
                    <NavLink to={'/toys'}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    > Toys </NavLink>
                </li>
                <li>
                    <NavLink to={'/others-products'}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    > Others </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li>
                    natalia@gmail.com
                </li>
                <li>
                    <NavLink to={'/my-orders'}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    > My Orders </NavLink>
                </li>
                <li>
                    <NavLink to={'/my-account'}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    > My Account </NavLink>
                </li>
                <li>
                    <NavLink to={'/sing-in'}
                        className={
                            ({ isActive }) =>
                                isActive ? activeStyle : undefined
                        }
                    > Sing In </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar