import React from 'react';
import { Button } from 'reactstrap';
import logo from '../images/logo-3 1.png'
import { Link } from 'react-router-dom';

function Header () { 
    return(
    <div className='container d-flex justify-content-between w-100' >
        <div className='d-flex align-items-center'>
        <img src={logo}  alt='logo'/>Due today,Do tomorrow
        </div>
         <nav  className='d-flex align-items-center'>
        <Link to="/"><Button className='btn btn-primary btn-sm px-3 mx-2'> Home</Button></Link>
        <Link to="todo"><Button className='btn btn-primary btn-sm px-3 mx-2'>Login</Button></Link>
        </nav>
        
    </div>
    );
}
export default Header
