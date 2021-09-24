import React from 'react'
import { FaRegHandSpock } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
export const Home = () => {
    return (
        <div className='home'>
            <FaRegHandSpock className='hand-icon' size='2em' />
            <Zoom left>
            <h1>Hey Dhruvil Here!!</h1>
            </Zoom>
            <img src='https://cdn5.f-cdn.com/contestentries/1386480/29840496/5b68d04c16995_thumb900.jpg'/>
            <Slide left>
            <p>Cum, mauris risus scelerisque nullam habitasse blandit parturient semper sapien inceptos. Condimentum magna, per justo sit. 
            Suscipit eget curae; scelerisque odio fringilla maecenas varius vivamus ridiculus eleifend. Curabitur senectus, aenean eu. 
            Fermentum enim, ad parturient! 
            Ornare aliquam massa nec sed hac aenean habitasse dolor, potenti eget ullamcorper. Magna habitant senectus mus massa egestas at tempus justo.
            </p>
            </Slide>
        </div>

    )
}
