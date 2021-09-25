import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
const data = [
    {
        "title": "Student Helper System",
        "date": "Feb-2021",
        "tech": "MERN Stack",
        "desc": "These was project developed during hackathon held at our institute."
            + "It basically helps students to ask doubts related to the collge curriculum or any placement related doubts."
            + " Person who answered correctly was rewarded with some points ",
        "link": "https://github.com/dhruvil-shah/hacknuthon",
    },
    {
        "title": "DSA Tracker",
        "date": "March-2021",
        "tech": "HTML-CSS(frontend) PHP(backend) SQL(database)",
        "desc": "It was a website created for keeping track of various DSA question from various coding platform." +
            "User can make operation like read question add new one delete one modify one. So basically CRUD functionality was implemented." +
            "Also user can give difficulty level and sort accordingly and also search option was provided on the basis of Data Structure used in question",
        "link": "https://github.com/dhruvil-shah/Dbms-Project"
    },
    {
        "title": "Face Mask Detection",
        "date": "June-2021",
        "tech": "OpenCV-DeepLearning",
        "desc": "In these tough times face mask is essential to remain safe. So to ensure each one takes care created a real time face mask detecion model." +
            "CNN was used as a part of training and predict and to make it available in realtime opencv was incorporated",
        "link": "https://github.com/dhruvil-shah/FaceMaskDetection",
    },
    {
        "title": "Movies Recommendation",
        "date": "Sept-2021",
        "desc": "These was a hybrid web application of ML and Web technologies. Firstly dataset from taken from movies imdb site and was trained using Matrix factorization" +
            "It was a static trained model for approx 950 user so as ID of user is added then movies are recommended as per previous likes and dislikes",
        "tech": "Machine Learning + Web(MERN Stack)",
        "link": "https://github.com/dhruvil-shah/Movies-Recommendation"
    },
    {
        "title": "DataWare House",
        "date": "Oct-2020",
        "desc": "Owner can keep track of all it’s items sold and availability of"+
        "stock. Weekly and Monthly records of various customer are being"+
        "recorded. Also a bill is generated at weekend for sold items respective to customers.",
        "tech":"Java (console based)",
        "link":""
    },
    {
        "title": "",
        "date": "",
        "desc": ""
    }
]
export const Project = () => {
    return (
        <div className='project'>
            {data.map((ele) => {
                return (
                    <>
                        <div className='card-out'>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h4>{ele.title}</h4>
                                        <h4>{ele.date}</h4>
                                        <h4>{ele.tech}</h4>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>{ele.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <a href={ele.link} target="_blank"><FiExternalLink /></a>
                        </div>
                    </>)
            })}


        </div>
    )
}
