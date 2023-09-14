import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div className="landingPageBody">
            <nav className="navBar">
                <div className='navBar-title'>
                    Prima Health Credit
                </div>

                <ul className="navBarList">
                    <li><Link href="/medicine" className="navBarLinks">Seach Medicine</Link></li>
                    <li><Link href="/disease" className="navBarLinks">Seach Disease</Link></li>
                    <li><Link href="/profile" className="navBarLinks">Profile</Link></li>
                    <li><Link href="" className="navBarLinks">About</Link></li>
                </ul>

                <div className="navBarLogin">
                    <div className="loginContainer">
                        <svg width="20" height="20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.75A1.75 1.75 0 008.25 5.5v1.75h3.5V5.5A1.75 1.75 0 0010 3.75zM6.75 5.5v1.75H4.545c-.737 0-1.295.61-1.295 1.313v7.874c0 .703.558 1.313 1.295 1.313h10.91c.737 0 1.295-.61 1.295-1.313V8.563c0-.702-.558-1.312-1.296-1.312H13.25V5.5a3.25 3.25 0 10-6.5 0zm-2 3.25h10.5v7.5H4.75v-7.5zm5.25 4.5a.75.75 0 000-1.5h-.001a.75.75 0 000 1.5H10z" fill="currentColor"></path></svg>
                        Login
                    </div>
                    <div className="patnerContainer">
                        Let's Patner
                    </div>
                </div>
            </nav>
        </div>


    )
}
