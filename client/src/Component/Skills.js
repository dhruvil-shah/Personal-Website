import React from 'react';
import { Skill_Item } from './Skill_Item';
const language=[
    {"title":"Java","rating":5},
    {"title":"C","rating":4},
    {"title":"Python","rating":4},
    {"title":"HTML-CSS","rating":4},
    {"title":"JavaScript","rating":4}
    
]
const framework=[
    {"title":"Node.js","rating":4},
    {"title":"Express.js","rating":4},
    {"title":"React.js","rating":4},
    {"title":"PHP","rating":3}
]
const database=[
    {"title":"MongoDB","rating":4},
    {"title":"SQL","rating":3}
]
const other=[
    {"title":"Problem Solving","rating":4},
    {"title":"DSA","rating":4},
    {"title":"Git","rating":3},
    {"title":"Machine Learning","rating":3},
    {"title":"Competitive Programming","rating":3}
]
export const Skills = () => {
    return (
        <div className='skills'>
        <fieldset>
        <legend >Languages</legend>
            <div className='language' >
            {
                language.map((lan)=>{
                    return(
                        <Skill_Item title={lan.title} rating={lan.rating}/>
                    )
                })
            }
                {/* <Skill_Item title="Java" rating={3}/> */}
            </div>
        </fieldset>
        <fieldset>
        <legend >Framework</legend>
            <div className='language' >
            {
                framework.map((fam)=>{
                    return(
                        <Skill_Item title={fam.title} rating={fam.rating}/>
                    )
                })
            }
               
            </div>
        </fieldset>
        <fieldset>
        <legend >Database</legend>
            <div className='language' >
            {
                database.map((db)=>{
                    return(
                        <Skill_Item title={db.title} rating={db.rating}/>
                    )
                })
            }
               
            </div>
        </fieldset>
        <fieldset>
        <legend >Others</legend>
            <div className='language' >
            {
                other.map((ot)=>{
                    return(
                        <Skill_Item title={ot.title} rating={ot.rating}/>
                    )
                })
            }
               
            </div>
        </fieldset>
        </div>
    )
}
