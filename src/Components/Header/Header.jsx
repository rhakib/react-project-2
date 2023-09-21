import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between p-7 px-10 shadow-lg'>
            <div>
                <a href="/"><h2 className='text-3xl font-semibold'>Amajhon</h2></a>
            </div>
            <nav>
                <ul className='flex gap-8 text-xl'>
                    <a href=""><NavLink to={'/'}>Home</NavLink></a>
                    <a href=""><NavLink to={'/products'}>Products</NavLink></a>
                    <a href=""><NavLink to={'/dashboard'}>Dashboard</NavLink></a>
                   
                </ul>
            </nav>
        </div>
    );
};

export default Header;