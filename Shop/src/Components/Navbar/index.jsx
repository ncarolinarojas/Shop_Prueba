import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'}> Shopi </NavLink>
                </li>
                <li>
                    <NavLink to={'/all-products'}> All </NavLink>
                </li>
                <li>
                    <NavLink to={'/clothes'}> Clothes </NavLink>
                </li>
                <li>
                    <NavLink to={'/electronics'}> Electronics </NavLink>
                </li>
                <li>
                    <NavLink to={'/furnitures'}> Furnitures </NavLink>
                </li>
                <li>
                    <NavLink to={'/toys'}> Toys </NavLink>
                </li>
                <li>
                    <NavLink to={'/others-products'}> Others </NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    natalia@gmail.com
                </li>
                <li>
                    <NavLink to={'/my-orders'}> My Orders </NavLink>
                </li>
                <li>
                    <NavLink to={'/my-account'}> My Account </NavLink>
                </li>
                <li>
                    <NavLink to={'/sing-in'}> Sing In </NavLink>
                </li>
                <li>
                  
                </li>
            </ul>
        </nav>
    )
}

export default Navbar