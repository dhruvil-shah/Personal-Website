import { React, useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { RiMessage2Fill } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import emailjs from 'emailjs-com';
export const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        msg: ""
    });
    let name, value;
    const updateUser = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const postData = async (e) => {
        e.preventDefault();
        if(user.name && user.email && user.msg && user.phone){
                
            try {
                
                const resp = await fetch('https://portfolio-f6ab2-default-rtdb.firebaseio.com/users.json', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user)
                })
                
                alert("Data Successfully Stored");
               
                emailjs.sendForm('service_e9jpv5s', 'template_scdngs2','#form', 'user_XSA0W9Igma8yKzhDg8kJ3')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                    console.log('FAILED...'+ JSON.stringify(err));
                });
                setUser({
                    name: "",
                    email: "",
                    phone: "",
                    msg: ""
                });
            } catch (err) {
                console.log("Posting Data Error:", err);
            }
        }
        else{
            alert("Please Enter required field");
        }
    }
        return (
        <div>
            <form action="POST" className='form' id='form'>
                <div className='inp'>
                    <BsFillPersonFill /><input type="text" name="name" placeholder="Enter Name" value={user.name} onChange={updateUser} required></input>
                </div>
                <div className='inp'>
                    <MdEmail /><input type="email" name="email" placeholder="Enter email" value={user.email} onChange={updateUser} required></input>
                </div>
                <div className='inp'>
                    <FiPhone /> <input type="number" name="phone" placeholder="Enter phone no." value={user.phone} onChange={updateUser} required></input>
                </div>
                <div className='inp-txt'>
                    <RiMessage2Fill /><textarea rows="3" cols="20" name="msg" value={user.msg} onChange={updateUser} placeholder="Enter Message Here" required></textarea>
                </div>
                <button onClick={postData}>Submit</button>
            </form>
        </div>
    )
}
