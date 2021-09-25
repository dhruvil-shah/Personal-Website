import React from 'react'
import {BrowserRouter as Router ,Route,Link,Switch,Redirect} from 'react-router-dom';
import {Home} from './Home.js';
import {Skills} from './Skills.js';
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
            <li><Link className='nav-item' to='/skills' >Skills</Link></li>
            <li><Link className='nav-item' to='/contact' >Contact</Link></li>
            </ul>
            </Bounce>
                <div className='content'>
                <Switch>
                    <Route exact path='/'>
                    <Redirect to='/home'/>
                    </Route>
                    <Route exact path="/home" ><Home/></Route>
                    <Route exact path="/personal" ><Personal/></Route>
                    <Route exact path="/project" ><Project/></Route>
                    <Route exact path="/contact" ><Contact/></Route>
                    <Route exact path="/skills" ><Skills/></Route>
                </Switch>
                </div>
                </Router>
            </>
    )
}
