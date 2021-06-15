import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../../Data/Data.json';

const Navbar1 = () => {
    return (
        <header>
            <nav>
                <div></div>
                <div><Link to="/"><img src={data.logo} alt="logo" /></Link></div>
                <div className="">
                    <ul>
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>Login</Link>
                        </li>
                        <li>
                            <Link>Order</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar1;