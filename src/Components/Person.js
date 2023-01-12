import React from 'react'


function Person({person}){
    return(
        <h1>i am {person.name} my age is {person.age}. my skill is {person.skill}</h1>
    )
}

export default Person