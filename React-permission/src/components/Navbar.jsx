import { NavLink } from "react-router-dom";

// import { NavLink } from "react-router-dom"
export default function Navbar(){
    return(
        <>
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <ul style={{display:'flex',}}>
                    <li  style={{listStyle:'none', marginLeft:'20px'}}>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li  style={{listStyle:'none', marginLeft:'20px'}}>
                        <NavLink to={'/profile'}>Profile</NavLink>
                    </li>
                </ul>
                <ul>
                    <li style={{listStyle:'none'}}>
                        <NavLink to={'/login'}>Login</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}