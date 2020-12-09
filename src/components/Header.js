import React from 'react';
import logo from "../assets/moodbotLOGO.svg";
import { Link } from "react-router-dom";

const Header = () => {


    return (
        <>
            <header className=" sm:flex items-center justify-between sm:px-4 sm:py-2">
            
                <div>
                    <Link to="/">
                        <img className="ml-4 my-4" src={logo} alt="logo" />
                    </Link>
                </div>
                <div className=" mr-4 px-2 mt-1 py-1 block ">
                <Link to="/" >
                       <button className="rounded-full py-3 px-6 mr-4 text-lg font-semibold text-blue-500 hover:text-green-500 hover:font-bold  focus:outline-none focus:text-green-600 transform hover:scale-125">Home</button>
                    </Link> 
        
                <Link to="/about" >
                       <button className="text-lg font-semibold text-blue-500 hover:text-green-500 hover:font-bold focus:outline-none focus:text-green-600 transform hover:scale-125">About</button>
                    </Link> 
                </div>

            </header>
        </>
    )
}

export default Header;
