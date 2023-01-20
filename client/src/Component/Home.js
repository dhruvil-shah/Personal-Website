import React from 'react'
import { FaRegHandSpock } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
export const Home = () => {
    return (
        <div className='home'>
            <FaRegHandSpock className='hand-icon' size='1.2em'/>
            <Zoom left>
            <h1>Hey Dhruvil Here!!</h1>
            </Zoom>
//             <img src='https://media-exp1.licdn.com/dms/image/C4E03AQEEcvbtDvdO0w/profile-displayphoto-shrink_800_800/0/1607868193277?e=1637798400&v=beta&t=gLUgOUaTOyKSCniMpexMLIjeI0QUao7eNec-fifXq_8'/>
            <Slide left>
            <p>I'm currently studying as a 3rd year Computer Science student at Nirma University, Ahmedabad. I have been in recent times learned ample number of skills such as 
Web Development, Machine Learning, Databases, Full Stack Development, Application Development and much more. I have also interest in problem solving on various 
platforms like Leetcode, Hackerrank, Codeforces, GFG. Apart from side works I was able to score 9.25/10 cpi till my second year. More insights about me can be obtained from these websites.

            </p>
            </Slide>
        </div>

    )
}
