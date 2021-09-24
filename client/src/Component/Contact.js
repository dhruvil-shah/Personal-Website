import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import {RiMessage2Fill} from 'react-icons/ri';
export const Contact = () => {
    return (
        <div>
            <form action="POST" className='form'>
                <div className='inp'>
                    <MdEmail /><input type="email" placeholder="Enter email"></input>
                </div>
                <div className='inp'>
                   <FiPhone/> <input type="text" placeholder="Enter phone no."></input>
                </div>
                <div className='inp-txt'>
                <RiMessage2Fill/><textarea rows="3" cols="20" placeholder="Enter Message Here"></textarea>
                </div>
                <button>Submit </button>
            </form>
        </div>
    )
}
