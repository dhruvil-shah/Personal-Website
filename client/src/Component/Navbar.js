import React from 'react'
import {BrowserRouter as Router ,Route,Link,Switch} from 'react-router-dom';
import {Home} from './Home.js';
import {About} from './About.js';
import {Contact} from './Contact.js';
import {Project} from './Project.js';
import {Personal} from './Personal.js';
import Bounce from 'react-reveal/Bounce';
export const Navbar = () => {
    return (
    
        <>
        
            <Router>
            <Bounce top>
            <ul className='nav'>
            <li><Link className='nav-item' to='/home' >Home</Link></li>
            <li><Link className='nav-item' to='/personal' >Personal</Link></li>
            <li><Link className='nav-item' to='/project' >Project</Link></li>
            <li><Link className='nav-item' to='/contact' >Contact</Link></li>
            <li><Link className='nav-item' to='/about' >About</Link></li>
            </ul>
            </Bounce>
                <div className='content'>
                <Switch>
                    <Route path="/home" ><Home/></Route>
                    <Route path="/personal" ><Personal/></Route>
                    <Route path="/project" ><Project/></Route>
                    <Route path="/contact" ><Contact/></Route>
                    <Route path="/about" ><About/></Route>
                </Switch>
                </div>
                </Router>
            </>
    )
}
