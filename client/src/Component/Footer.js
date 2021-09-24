import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaLinkedin} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';

export const Footer = () => {
    return (
        <div className='footer'>
           <a href='https://www.facebook.com/dhruvil.shah.5030' target='_blank'><FaFacebook size='1.8em'/></a>
           <a href='https://www.instagram.com/dhruvil_shah_99/' target='_blank'><AiOutlineInstagram size='1.8em'/></a>
           <a href='https://www.linkedin.com/in/dhruvil-shah-444a92108/' target='_blank'><FaLinkedin size='1.8em'/></a>
           <a href='https://github.com/dhruvil-shah' target='_blank'><AiFillGithub size='1.8em'/></a>
        </div>
    )
}
